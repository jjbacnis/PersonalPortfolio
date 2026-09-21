export default function Projects() {
  return (
    <main>
      <section className="page-header">
        <div className="container">
          <h1>Projects</h1>
          <p className="lead">Selected academic and applied health informatics research.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <div className="card">
              <span className="card-tag">EMR Optimization</span>
              <h3>Clinical Workflow Analysis & EMR Optimization</h3>
              <p>Analyzed clinical entry points and patient charting workflows to identify bottlenecks in electronic medical record documentation. Developed recommendations for UI/UX improvements and standardized templates.</p>
              <div className="card-footer">
                <span className="tech-badge">Workflow Mapping</span>
                <span className="tech-badge">Usability Analysis</span>
              </div>
            </div>

            <div className="card">
              <span className="card-tag">Health Analytics</span>
              <h3>Database Architecture & Health Informatics Modeling</h3>
              <p>Designed structured relational database models tailored for healthcare data entry, ensuring data integrity, compliance with privacy standards, and efficient querying for reporting.</p>
              <div className="card-footer">
                <span className="tech-badge">SQL</span>
                <span className="tech-badge">Data Modeling</span>
              </div>
            </div>

            <div className="card">
              <span className="card-tag">Digital Health</span>
              <h3>User-Centered Patient Portal Design Prototype</h3>
              <p>Conceptualized an intuitive digital health portal interface focused on accessibility, patient engagement, and clear presentation of health metrics.</p>
              <div className="card-footer">
                <span className="tech-badge">User-Centered Design</span>
                <span className="tech-badge">Health Literacy</span>
              </div>
            </div>

            <div className="card">
              <span className="card-tag">Applied Research</span>
              <h3>Healthcare Data Insights & Visualizations</h3>
              <p>Explored complex clinical datasets to derive actionable insights, creating concise summaries to support data-driven decision-making in healthcare settings.</p>
              <div className="card-footer">
                <span className="tech-badge">Data Analysis</span>
                <span className="tech-badge">Clinical Insights</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}