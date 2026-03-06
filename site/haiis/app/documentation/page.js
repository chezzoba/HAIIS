import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from './page.module.css';

export default function Documentation() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className={styles['doc-hero']}>
        <h1>Documentation</h1>
        <p className={styles.subtitle}>Step-by-step guides, templates, and resources for implementing the Healthcare AI Implementation Standards</p>
      </section>

      {/* Step-by-Step Guide */}
      <section id="guide" className={styles['guide-section']}>
        <h2>Implementation Guide</h2>
        <p className={styles['section-description']}>Follow these six steps to implement the framework in your organization</p>
        
        <div className={styles['step-cards']}>
          <div className={styles['step-card']}>
            <div className={styles['step-number']}>1</div>
            <div className={styles['step-content']}>
              <h3>Assess your AI use case</h3>
              <p>Identify the specific healthcare AI application, data types, and regulatory requirements</p>
              {/* <a href="#assessment" className={styles['step-link']}>View assessment template →</a> */}
            </div>
          </div>

          <div className={styles['step-card']}>
            <div className={styles['step-number']}>2</div>
            <div className={styles['step-content']}>
              <h3>Select compliance pattern</h3>
              <p>Choose the appropriate architecture pattern based on your regulatory needs (HIPAA, GxP, FDA)</p>
              {/* <a href="#patterns" className={styles['step-link']}>Browse patterns →</a> */}
            </div>
          </div>

          <div className={styles['step-card']}>
            <div className={styles['step-number']}>3</div>
            <div className={styles['step-content']}>
              <h3>Map security controls</h3>
              <p>Apply the security control mapping system to your chosen cloud platform</p>
              {/* <a href="#security" className={styles['step-link']}>View security controls →</a> */}
            </div>
          </div>

          <div className={styles['step-card']}>
            <div className={styles['step-number']}>4</div>
            <div className={styles['step-content']}>
              <h3>Apply governance protocols</h3>
              <p>Implement data governance protocols for sensitive healthcare data management</p>
              {/* <a href="#governance" className={styles['step-link']}>View governance templates →</a> */}
            </div>
          </div>

          <div className={styles['step-card']}>
            <div className={styles['step-number']}>5</div>
            <div className={styles['step-content']}>
              <h3>Run risk assessment</h3>
              <p>Complete the AI risk assessment methodology for healthcare-specific risks</p>
              {/* <a href="#risk" className={styles['step-link']}>Download risk worksheet →</a> */}
            </div>
          </div>

          <div className={styles['step-card']}>
            <div className={styles['step-number']}>6</div>
            <div className={styles['step-content']}>
              <h3>Deploy via playbook</h3>
              <p>Follow the implementation playbook for step-by-step deployment guidance</p>
              {/* <a href="#playbooks" className={styles['step-link']}>View playbooks →</a> */}
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="downloads" className={styles['downloads-section']}>
        <h2>Downloadable Resources</h2>
        <p className={styles['section-description']}>Templates, checklists, and worksheets to accelerate your implementation</p>
        
        <div className={styles['download-cards']}>
          <div className={styles['download-card']}>
            <h3>Quickstart PDF</h3>
            <p>Complete guide to getting started in 15 minutes</p>
            {/* <a href="#" className={styles['download-button']}>Download PDF</a> */}
          </div>

          <div className={styles['download-card']}>
            <h3>Component Checklist</h3>
            <p>Comprehensive checklist for all five framework components</p>
            {/* <a href="#" className={styles['download-button']}>Download Checklist</a> */}
          </div>

          <div className={styles['download-card']}>
            <h3>Risk Worksheet</h3>
            <p>Interactive Excel worksheet for AI risk assessment</p>
            {/* <a href="#" className={styles['download-button']}>Download Worksheet</a> */}
          </div>

          <div className={styles['download-card']}>
            <h3>Architecture Template</h3>
            <p>Draw.io template for creating compliant architecture diagrams</p>
            {/* <a href="#" className={styles['download-button']}>Download Template</a> */}
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section id="categories" className={styles['categories-section']}>
        <h2>Documentation Categories</h2>
        
        <div className={styles['category-grid']}>
          <div className={styles['category-card']}>
            <h3>Architecture Patterns</h3>
            <p>Compliance-by-design blueprints for common AI use cases</p>
            <ul>
              <li>Report automation</li>
              <li>Medical imaging analysis</li>
              <li>Natural language processing</li>
              <li>Predictive analytics</li>
            </ul>
          </div>

          <div className={styles['category-card']}>
            <h3>Security Controls</h3>
            <p>Cross-cloud security mappings and implementation guides</p>
            <ul>
              <li>AWS security controls</li>
              <li>Azure security controls</li>
              <li>GCP security controls</li>
              <li>Hybrid cloud security</li>
            </ul>
          </div>

          <div className={styles['category-card']}>
            <h3>Governance Templates</h3>
            <p>Data governance protocols and access control templates</p>
            <ul>
              <li>Data classification frameworks</li>
              <li>Access control templates</li>
              <li>Audit and monitoring protocols</li>
              <li>Data lifecycle management</li>
            </ul>
          </div>

          <div className={styles['category-card']}>
            <h3>Risk Worksheets</h3>
            <p>Healthcare-specific AI risk assessment tools</p>
            <ul>
              <li>Risk assessment worksheets</li>
              <li>Mitigation strategy templates</li>
              <li>Healthcare risk catalogs</li>
              <li>Compliance validation checklists</li>
            </ul>
          </div>

          <div className={styles['category-card']}>
            <h3>Checklists</h3>
            <p>Implementation and validation checklists</p>
            <ul>
              <li>Deployment checklists</li>
              <li>Compliance validation</li>
              <li>Security assessment</li>
              <li>Performance testing</li>
            </ul>
          </div>

          <div className={styles['category-card']}>
            <h3>Glossary</h3>
            <p>Definitions of key terms and concepts</p>
            <ul>
              <li>Healthcare regulations</li>
              <li>AI/ML terminology</li>
              <li>Cloud computing terms</li>
              <li>Security concepts</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}