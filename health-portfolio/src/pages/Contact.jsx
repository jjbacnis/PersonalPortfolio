import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;

    window.location.href = `mailto:jbacnis1@my.centennialcollege.ca?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <main>
      <section className="page-header">
        <div className="container">
          <h1>Contact Me</h1>
          <p className="lead">Let’s connect to discuss digital health, clinical workflows, or collaboration opportunities.</p>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-narrow">
          {submitted ? (
            <div className="card success-message">
              <h3>Thank you for reaching out!</h3>
              <p>Your message has been submitted. I will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required placeholder="Your Full Name" />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required placeholder="your.email@example.com" />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required placeholder="Inquiry / Opportunity" />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required placeholder="How can I help you?"></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}