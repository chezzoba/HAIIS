import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';
import styles from './page.module.css';

export default function Framework() {
  const dwidth = 1200;
  return (
    <>
      <Navbar />

      {/* Hero Diagram Section */}
      <section className={styles['framework-hero']}>
        <h1>HAIIS Core Pillars</h1>
        <div className={styles['diagram-container']}>
          <Image 
            src="/img/pillarsdiagram.png" 
            alt="Framework Five Pillars Diagram" 
            width={dwidth}
            height={dwidth / 2}
            priority
          />
        </div>
      </section>

      {/* Principles Section */}
      <section id="principles">
        <h2>Framework Principles</h2>
        <div className={styles['principles-list']}>
          <div className={styles['principle-item']}>
            <span className={styles.checkmark}>✓</span>
            <div>
              <h3>Cloud-agnostic</h3>
              <p>Works across AWS, Azure, GCP, and other cloud platforms</p>
            </div>
          </div>
          <div className={styles['principle-item']}>
            <span className={styles.checkmark}>✓</span>
            <div>
              <h3>Compliance-by-design</h3>
              <p>HIPAA, GxP, and FDA requirements embedded from the start</p>
            </div>
          </div>
          <div className={styles['principle-item']}>
            <span className={styles.checkmark}>✓</span>
            <div>
              <h3>Open-access</h3>
              <p>No licensing fees, freely available to all</p>
            </div>
          </div>
          <div className={styles['principle-item']}>
            <span className={styles.checkmark}>✓</span>
            <div>
              <h3>Actionable</h3>
              <p>Patterns and playbooks, not just principles</p>
            </div>
          </div>
          <div className={styles['principle-item']}>
            <span className={styles.checkmark}>✓</span>
            <div>
              <h3>Education-first scaling</h3>
              <p>Train-the-trainer approach for widespread adoption</p>
            </div>
          </div>
        </div>
      </section>

      {/* The 5 Components Section */}
      <section id="components">
        <h2>The Five Core Components</h2>
        <div className={styles['components-accordion']}>
          
          <details className={styles['component-card']}>
            <summary>
              <h3>Compliance-by-Design Architecture Patterns</h3>
            </summary>
            <div className={styles['component-content']}>
              <h4>Problem Statement</h4>
              <p>Healthcare organizations struggle to implement AI while meeting regulatory requirements like HIPAA, GxP, and FDA standards.</p>
              
              <h4>Solution Overview</h4>
              <p>Reusable technical blueprints that embed regulatory requirements directly into AI implementation patterns, ensuring compliance from day one.</p>
              
              <h4>Target Users</h4>
              <p>Cloud architects, IT leaders, compliance teams</p>
              
              <h4>Key Deliverables</h4>
              <ul>
                <li>Architecture templates for common AI use cases</li>
                <li>Compliance checklists integrated into design patterns</li>
                <li>Reference implementations across cloud platforms</li>
              </ul>
              
              <a href="/documentation" className={styles['cta-link']}>View Documentation →</a>
            </div>
          </details>

          <details className={styles['component-card']}>
            <summary>
              <h3>Security Control Mapping System</h3>
            </summary>
            <div className={styles['component-content']}>
              <h4>Problem Statement</h4>
              <p>Inconsistent security controls across different cloud providers create gaps and compliance risks.</p>
              
              <h4>Solution Overview</h4>
              <p>Comprehensive mapping between AI components and security requirements across cloud platforms, enabling consistent security implementation.</p>
              
              <h4>Target Users</h4>
              <p>Security architects, cloud engineers, compliance officers</p>
              
              <h4>Key Deliverables</h4>
              <ul>
                <li>Cross-cloud security control matrices</li>
                <li>Implementation guides for each cloud platform</li>
                <li>Security validation checklists</li>
              </ul>
              
              <a href="/documentation" className={styles['cta-link']}>View Documentation →</a>
            </div>
          </details>

          <details className={styles['component-card']}>
            <summary>
              <h3>Data Governance Protocols</h3>
            </summary>
            <div className={styles['component-content']}>
              <h4>Problem Statement</h4>
              <p>Managing sensitive healthcare data across AI training, inference, and monitoring lacks standardized approaches.</p>
              
              <h4>Solution Overview</h4>
              <p>Standardized protocols for managing sensitive data throughout the AI lifecycle while maintaining compliance and enabling innovation.</p>
              
              <h4>Target Users</h4>
              <p>Data governance teams, AI engineers, privacy officers</p>
              
              <h4>Key Deliverables</h4>
              <ul>
                <li>Data classification frameworks</li>
                <li>Access control templates</li>
                <li>Audit and monitoring protocols</li>
              </ul>
              
              <a href="/documentation" className={styles['cta-link']}>View Documentation →</a>
            </div>
          </details>

          <details className={styles['component-card']}>
            <summary>
              <h3>AI Risk Assessment Methodology</h3>
            </summary>
            <div className={styles['component-content']}>
              <h4>Problem Statement</h4>
              <p>AI introduces unique risks in healthcare that traditional risk frameworks don't adequately address.</p>
              
              <h4>Solution Overview</h4>
              <p>Structured approach to evaluate and mitigate risks specific to AI deployments in regulated healthcare environments.</p>
              
              <h4>Target Users</h4>
              <p>Risk managers, compliance teams, AI project leads</p>
              
              <h4>Key Deliverables</h4>
              <ul>
                <li>Risk assessment worksheets</li>
                <li>Mitigation strategy templates</li>
                <li>Healthcare-specific risk catalogs</li>
              </ul>
              
              <a href="/documentation" className={styles['cta-link']}>View Documentation →</a>
            </div>
          </details>

          <details className={styles['component-card']}>
            <summary>
              <h3>Implementation Playbooks</h3>
            </summary>
            <div className={styles['component-content']}>
              <h4>Problem Statement</h4>
              <p>Healthcare organizations need concrete, step-by-step guidance for implementing AI solutions.</p>
              
              <h4>Solution Overview</h4>
              <p>Detailed guides tailored to specific healthcare use cases, providing clear implementation paths from concept to production.</p>
              
              <h4>Target Users</h4>
              <p>Project managers, implementation teams, technical leads</p>
              
              <h4>Key Deliverables</h4>
              <ul>
                <li>Use case-specific implementation guides</li>
                <li>Step-by-step deployment checklists</li>
                <li>Troubleshooting and optimization tips</li>
              </ul>
              
              <a href="/documentation" className={styles['cta-link']}>View Documentation →</a>
            </div>
          </details>

        </div>
      </section>

      {/* Implementation Roadmap Section */}
      <section id="roadmap" className={styles['evolution-section']}>
        <h2>Framework Roadmap</h2>
        <div className={styles['timeline']}>
          <div className={styles['timeline-item']}>
            <div className={styles['timeline-year']}>2023</div>
            <div className={styles['timeline-content']}>
              <h3>Initial Patterns</h3>
              <p>Document first compliance-by-design patterns based on successful implementations at pharmaceutical companies and healthcare systems</p>
            </div>
          </div>

          <div className={styles['timeline-item']}>
            <div className={styles['timeline-year']}>2028</div>
            <div className={styles['timeline-content']}>
              <h3>Validation Phase</h3>
              <p>Test patterns with early adopters, refine based on real-world feedback, and expand to include security control mappings</p>
            </div>
          </div>

          <div className={styles['timeline-item']}>
            <div className={styles['timeline-year']}>2030</div>
            <div className={styles['timeline-content']}>
              <h3>Framework Formalization</h3>
              <p>Organize patterns into the five core components, create implementation playbooks, and launch the open-source framework</p>
            </div>
          </div>

          <div className={styles['timeline-item']}>
            <div className={styles['timeline-year']}>2032+</div>
            <div className={styles['timeline-content']}>
              <h3>Community Growth</h3>
              <p>Expanding through collaboration, training programs, and continuous refinement based on community input</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
