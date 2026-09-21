export default function About() {
  return (
    <main>
      <section className="page-header">
        <div className="container">
          <h1>About Me</h1>
          <p className="lead">Dedicated to connecting technology, data, and patient-centered care.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h2>Background & Background</h2>
              <p>
                As a Health Informatics student at Centennial College, I focus on the intersection of healthcare systems, data architecture, and clinical workflow improvement. My coursework and applied projects center on understanding how digital health tools can reduce clinician burden and elevate patient outcomes.
              </p>
              <p>
                I bring a collaborative, interdisciplinary approach to every initiative—translating complex clinical requirements into structured, scalable technological solutions.
              </p>
            </div>
            <div>
              <h2>Academic Highlights</h2>
              <ul className="styled-list">
                <li><strong>Centennial College:</strong> Health Informatics Diploma Program</li>
                <li><strong>Focus Areas:</strong> Database Systems, Health Informatics Concepts, Software Engineering Principles</li>
                <li><strong>Core Strengths:</strong> Clinical Workflow Mapping, EMR/EHR Optimization, Data Modeling</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}