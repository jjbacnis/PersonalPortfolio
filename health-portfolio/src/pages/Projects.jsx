import { useEffect, useState } from 'react';

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!selectedImage) {
      return undefined;
    }

    const closeOnEscape = (event) => { // used to close the lightbox when the Escape key is pressed
      if (event.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    document.addEventListener('keydown', closeOnEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      document.body.style.overflow = '';
    };
  }, [selectedImage]);

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
          <div className="project-list">
            <article className="project-item">
              <button type="button" className="project-media" onClick={() => setSelectedImage({ src: '/images/TableauDashboard.png', alt: 'Tableau Public dashboard visualizing communicable disease trends across Ontario in 2025' })} aria-label="Zoom into Tableau Public dashboard">
                <img src="/images/TableauDashboard.png" alt="Tableau Public dashboard visualizing communicable disease trends across Ontario in 2025" />
                <span className="project-zoom-hint">View full image</span>
              </button>
              <div className="project-content">
                <span className="card-tag">Data Visualization</span>
                <h2>Tableau Public: Ontario Communicable Disease Trends</h2>
                <p className="project-objective"><strong>Objective:</strong> Visualize the top communicable disease trends reported across Ontario during 2025.</p>
                <p>Created interactive Tableau Public dashboards to organize and present reported communicable disease data from across Ontario. The visualizations make it easier to compare trends, identify patterns, and communicate public health findings.</p>
                <p className="project-link"><a href="https://public.tableau.com/app/profile/jordan.bacnis/viz/DiseasesofpublichealthcasecountsinOntario2025/Dashboard1" target="_blank" rel="noopener noreferrer">View the Tableau Public dashboard</a></p>
                <div className="card-footer">
                  <span className="tech-badge">Tableau Public</span>
                  <span className="tech-badge">Public Health Data</span>
                  <span className="tech-badge">Dashboard Design</span>
                </div>
              </div>
            </article>

            <article className="project-item">
              <button type="button" className="project-media" onClick={() => setSelectedImage({ src: '/images/HealthBridgePortal.png', alt: 'HealthBridge clinician and patient portal concept' })} aria-label="Zoom into HealthBridge portal">
                <img src="/images/HealthBridgePortal.png" alt="HealthBridge clinician and patient portal concept" />
                <span className="project-zoom-hint">View full image</span>
              </button>
              <div className="project-content">
                <span className="card-tag">Digital Health</span>
                <h2>HealthBridge: Connected Clinician and Patient Portal</h2>
                <p className="project-objective"><strong>Objective:</strong> Conceptualize a connected portal that improves appointment access, care coordination, and digital record sharing.</p>
                <p>Created HealthBridge on Replit as a clinician-facing and patient-facing portal concept. Patients can book appointments, find the nearest care facility, and review recent results. Clinicians can view upcoming appointments, access medical histories and records through bridged EMR systems, and support digital patient record transfers between facilities.</p>
                <div className="card-footer">
                  <span className="tech-badge">Replit</span>
                  <span className="tech-badge">Health IT</span>
                  <span className="tech-badge">Care Coordination</span>
                </div>
              </div>
            </article>

            <article className="project-item">
              <button type="button" className="project-media" onClick={() => setSelectedImage({ src: '/images/HealthConnect_portal.png', alt: 'Figma concept for a clinic website' })} aria-label="Zoom into clinic website concept">
                <img src="/images/HealthConnect_portal.png" alt="Figma concept for a clinic website" />
                <span className="project-zoom-hint">View full image</span>
              </button>
              <div className="project-content">
                <span className="card-tag">Web Design</span>
                <h2>Clinic Website Concept in Figma</h2>
                <p className="project-objective"><strong>Objective:</strong> Design the foundation of a clear, welcoming website for a new clinic and make appointment access straightforward for patients.</p>
                <p>Created a conceptual clinic website in Figma that allows patients to book appointments and learn about the clinic. The project showcases user-focused web design, page structure, and the visual foundation for a potential healthcare startup.</p>
                <div className="card-footer">
                  <span className="tech-badge">Figma</span>
                  <span className="tech-badge">Web Design</span>
                  <span className="tech-badge">User Experience</span>
                </div>
              </div>
            </article>

            <article className="project-item">
              <button type="button" className="project-media" onClick={() => setSelectedImage({ src: '/images/COVIDAnalysis.png', alt: 'Excel analysis of COVID-19 vaccination records in Canada' })} aria-label="Zoom into COVID-19 vaccination analysis">
                <img src="/images/COVIDAnalysis.png" alt="Excel analysis of COVID-19 vaccination records in Canada" />
                <span className="project-zoom-hint">View full image</span>
              </button>
              <div className="project-content">
                <span className="card-tag">Data Analysis</span>
                <h2>COVID-19 Vaccination Data Analysis in Excel</h2>
                <p className="project-objective"><strong>Objective:</strong> Examine Canadian vaccination records to highlight COVID-19 trends and vaccination frequency.</p>
                <p>Used Excel to sort, examine, and analyze COVID-19 vaccination records in Canada. The analysis highlights patterns in the data and shows how frequently vaccinations were recorded across the dataset.</p>
                <div className="card-footer">
                  <span className="tech-badge">Microsoft Excel</span>
                  <span className="tech-badge">Data Cleaning</span>
                  <span className="tech-badge">Trend Analysis</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {selectedImage && (
        <div className="project-lightbox" role="dialog" aria-modal="true" aria-label="Full project image" onClick={() => setSelectedImage(null)}>
          <button type="button" className="lightbox-close" onClick={() => setSelectedImage(null)} aria-label="Close full project image">
            &times;
          </button>
          <img src={selectedImage.src} alt={selectedImage.alt} onClick={(event) => event.stopPropagation()} />
        </div>
      )}
    </main>
  );
}