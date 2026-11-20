import { useEffect, useState } from 'react';

const resources = {
  users: {
    label: 'Users',
    fields: [
      { name: 'firstname', label: 'First name', required: true },
      { name: 'lastname', label: 'Last name', required: true },
      { name: 'email', label: 'Email', type: 'email', required: true },
      { name: 'password', label: 'Password', type: 'password', required: true },
    ],
  },
  projects: {
    label: 'Projects',
    fields: [
      { name: 'title', label: 'Title', required: true },
      { name: 'completion', label: 'Completion date', type: 'date' },
      { name: 'description', label: 'Description', type: 'textarea', required: true },
      { name: 'image', label: 'Image URL' },
    ],
  },
  services: {
    label: 'Services',
    fields: [
      { name: 'title', label: 'Title', required: true },
      { name: 'description', label: 'Description', type: 'textarea', required: true },
    ],
  },
  references: {
    label: 'References',
    fields: [
      { name: 'name', label: 'Name', required: true },
      { name: 'position', label: 'Position', required: true },
      { name: 'company', label: 'Company', required: true },
      { name: 'testimonial', label: 'Testimonial', type: 'textarea', required: true },
    ],
  },
};

function getId(entry) {
  return entry.id || entry._id;
}

function formatValue(field, value) {
  if (!value) return '—';
  if (field === 'completion') {
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? value : date.toLocaleDateString();
  }
  if (field === 'password') return '••••••••';
  return String(value);
}

export default function Admin() {
  const [activeResource, setActiveResource] = useState('users');
  const [entries, setEntries] = useState([]);
  const [form, setForm] = useState({});
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const resource = resources[activeResource];

  const API_URL = import.meta.env.VITE_API_URL || '';

  async function request(path, options = {}) {
    const response = await fetch(`${API_URL}${path}`, {
      headers: { 'Content-Type': 'application/json', ...options.headers },
      ...options,
    });

    const payload = await response.json().catch(() => ({}));

    if (!response.ok || payload.success === false) {
      throw new Error(payload.message || 'The backend request failed.');
    }

    return payload;
  }

  async function loadEntries(resourceName = activeResource) {
    setLoading(true);
    setError('');
    try {
      const payload = await request(`/api/${resourceName}`);
      setEntries(payload.data || []);
    } catch (loadError) {
      setError(loadError.message);
      setEntries([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const loadTimer = window.setTimeout(() => {
      loadEntries(activeResource);
    }, 0);
    return () => window.clearTimeout(loadTimer);
  }, [activeResource]);

  function selectResource(resourceName) {
    resetForm();
    setActiveResource(resourceName);
  }

  function startEditing(entry) {
    setEditingId(getId(entry));
    setForm(resource.fields.reduce((values, field) => {
      let value = entry[field.name] ?? '';
      if (field.name === 'password') value = '';
      if (field.name === 'completion' && value) {
        value = new Date(value).toISOString().slice(0, 10);
      }
      values[field.name] = value;
      return values;
    }, {}));
  }

  function resetForm() {
    setForm({});
    setEditingId(null);
  }

  async function saveEntry(event) {
    event.preventDefault();
    setError('');

    const body = { ...form };
    if (activeResource === 'users' && editingId && !body.password) {
      delete body.password;
    }

    try {
      if (editingId) {
        await request(`/api/${activeResource}/${editingId}`, {
          method: 'PUT',
          body: JSON.stringify(body),
        });
      } else {
        await request(`/api/${activeResource}`, {
          method: 'POST',
          body: JSON.stringify(body),
        });
      }
      resetForm();
      await loadEntries();
    } catch (saveError) {
      setError(saveError.message);
    }
  }

  async function deleteEntry(entry) {
    const id = getId(entry);
    if (!id || !window.confirm(`Delete this ${resource.label.toLowerCase().slice(0, -1)}?`)) return;
    setError('');
    try {
      await request(`/api/${activeResource}/${id}`, { method: 'DELETE' });
      if (editingId === id) resetForm();
      await loadEntries();
    } catch (deleteError) {
      setError(deleteError.message);
    }
  }

  return (
    <main className="admin-page">
      <section className="page-header">
        <div className="container">
          <h1>Admin Dashboard</h1>
          <p className="lead">Create, review, edit, and delete portfolio records.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="admin-tabs" role="tablist" aria-label="Admin resources">
            {Object.entries(resources).map(([key, config]) => (
              <button
                type="button"
                role="tab"
                aria-selected={activeResource === key}
                className={activeResource === key ? 'admin-tab active' : 'admin-tab'}
                key={key}
                onClick={() => selectResource(key)}
              >
                {config.label}
              </button>
            ))}
          </div>

          {error && <div className="admin-error" role="alert">{error}</div>}

          <div className="admin-layout">
            <div className="card admin-form-card">
              <h2>{editingId ? `Edit ${resource.label.slice(0, -1)}` : `Add ${resource.label.slice(0, -1)}`}</h2>
              <form onSubmit={saveEntry}>
                {resource.fields.map((field) => {
                  const required = field.required && (!editingId || field.name !== 'password');
                  const commonProps = {
                    id: `admin-${field.name}`,
                    name: field.name,
                    value: form[field.name] ?? '',
                    required,
                    onChange: (event) => setForm((current) => ({ ...current, [field.name]: event.target.value })),
                  };
                  return (
                    <div className="form-group" key={field.name}>
                      <label htmlFor={commonProps.id}>{field.label}</label>
                      {field.type === 'textarea' ? (
                        <textarea {...commonProps} rows="4" />
                      ) : (
                        <input {...commonProps} type={field.type || 'text'} />
                      )}
                    </div>
                  );
                })}
                <div className="admin-form-actions">
                  <button type="submit" className="btn">{editingId ? 'Save changes' : `Add ${resource.label.slice(0, -1)}`}</button>
                  {editingId && <button type="button" className="btn btn-outline" onClick={resetForm}>Cancel</button>}
                </div>
              </form>
            </div>

            <div className="card admin-list-card">
              <div className="admin-list-heading">
                <h2>{resource.label}</h2>
                <span className="admin-count">{entries.length}</span>
              </div>
              {loading ? (
                <p className="admin-empty">Loading {resource.label.toLowerCase()}...</p>
              ) : entries.length === 0 ? (
                <p className="admin-empty">No {resource.label.toLowerCase()} found.</p>
              ) : (
                <div className="admin-table-wrap">
                  <table className="admin-table">
                    <thead>
                      <tr>
                        {resource.fields.filter((field) => field.name !== 'password').map((field) => (
                          <th key={field.name}>{field.label}</th>
                        ))}
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {entries.map((entry) => (
                        <tr key={getId(entry)}>
                          {resource.fields.filter((field) => field.name !== 'password').map((field) => (
                            <td key={field.name}>{formatValue(field.name, entry[field.name])}</td>
                          ))}
                          <td>
                            <div className="admin-row-actions">
                              <button type="button" className="admin-edit" onClick={() => startEditing(entry)}>Edit</button>
                              <button type="button" className="admin-delete" onClick={() => deleteEntry(entry)}>Delete</button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
