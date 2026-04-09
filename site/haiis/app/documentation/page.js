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
        <p className={styles.subtitle}>Guides, templates, and practical resources for organizations exploring AI implementation</p>
      </section>

      {/* Step-by-Step Guide */}
      <section id="guide" className={styles['guide-section']}>
        <h2>Implementation Guide</h2>
        <p className={styles['section-description']}>The six-step implementation model below illustrates how organizations may apply HAIIS framework components in practice</p>
        
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

      {/* Documentation Categories */}
      <section id="categories" className={styles['categories-section']}>
        <h2>Documentation</h2>
        
        <div className={styles['category-grid']}>
          <div className={styles['category-card']}>
            <h3>Architecture Patterns</h3>
            <p>Compliance-by-design blueprints for common AI use cases</p>
            <ul>
              <li>Compliance Automation</li>
              <li>Remote Patient Monitoring</li>
              <li>Serverless Resilience</li>
              <li>Predictive analytics</li>
            </ul>
            <a href="/documentation/patterns" className={styles['step-link']}>Browse patterns →</a>
          </div>

          <div className={styles['category-card']}>
            <h3>Security Controls</h3>
            <p>Cross-cloud security mappings</p>
            <ul>
              <li>AWS security controls</li>
              <li>Azure security controls</li>
              <li>GCP security controls</li>
            </ul>
            <a href="/documentation/security" className={styles['step-link']}>Browse security controls →</a>
          </div>

          <div className={styles['category-card']}>
            <h3>Governance Templates</h3>
            <p>Data governance protocols</p>
            <ul>
              <li>Data classification frameworks</li>
              <li>Access control templates</li>
              <li>Audit and monitoring protocols</li>
              <li>Data lifecycle management</li>
            </ul>
            <a href="/documentation/governance" className={styles['step-link']}>Browse governance →</a>
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
            <span className={styles['coming-soon']}>Coming soon</span>
          </div>

          <div className={styles['category-card']}>
            <h3>Implementation Playbooks</h3>
            <p>Implementation and validation guides</p>
            <ul>
              <li>Deployment guides</li>
              <li>Security assessment</li>
              <li>Performance testing</li>
            </ul>
            <a href="/documentation/playbooks" className={styles['step-link']}>Browse playbooks →</a>
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
            <a href="/documentation/glossary" className={styles['step-link']}>Browse glossary →</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}