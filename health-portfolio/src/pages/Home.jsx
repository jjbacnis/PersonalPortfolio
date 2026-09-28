import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <span className="badge">Health Informatics Student</span>
          <h1>Bridging Clinical Workflows with Modern Data Solutions</h1>
          <p className="hero-sub">
            Hi, I'm Jordan, a Health Informatics student at Centennial College with hands-on experience in digital health, clinical workflows, and applied research. Passionate about improving patient outcomes through data-driven decision-making and user-centered healthcare technology.
          </p>
          <div className="hero-actions">
            <Link to="/projects" className="btn btn-primary">
              View Projects
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <p className="about-name">A little about me</p>
              <h2>Healthcare-minded, technology-focused</h2>
              <p>
                I&apos;m Jordan Bacnis, a Health Informatics student at Centennial College interested in how thoughtful technology can make healthcare clearer, more connected, and easier to navigate.
              </p>
              <p>
                I bring together an understanding of clinical workflows, health data, and user needs to explore practical solutions that support both care teams and the people they serve.
              </p>
            </div>
            <div className="card">
              <h2>What this portfolio shows</h2>
              <p>
                This portfolio is a snapshot of how I think and work: curious about the problem, careful with the data, and focused on outcomes that matter in real healthcare settings.
              </p>
              <ul className="styled-list">
                <li>Applied projects in health informatics and digital health</li>
                <li>Ways I analyze workflows, systems, and healthcare data</li>
                <li>A growing foundation for a career improving patient-centered care</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <br />
          <h2>Core Capabilities</h2>
          <div className="grid grid-3">
            <div className="card">
              <h3>EMR / EHR Optimization</h3>
              <p>Evaluating clinical documentation workflows, interface usability, and data standardization to streamline healthcare delivery.</p>
            </div>
            <div className="card">
              <h3>Health Data Analytics</h3>
              <p>Translating complex healthcare datasets into clear, actionable insights for clinical decision support and system efficiency.</p>
            </div>
            <div className="card">
              <h3>Digital Health Innovation</h3>
              <p>Collaborating across interdisciplinary teams to conceptualize and test user-centered health technology solutions.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}