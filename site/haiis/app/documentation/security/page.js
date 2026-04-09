import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './page.module.css';
import securityControls from './controls.json';

export const metadata = {
  title: 'Security Controls | HAIIS',
  description: 'Cross-cloud security control mappings for healthcare AI implementation across AWS, Azure, and GCP.',
};

export default function SecurityControlsPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>Security Controls</h1>
          <p>A curated directory of cross-cloud security control mappings for healthcare AI implementation</p>
        </section>

        <section className={styles.tableSection}>
          <div className={styles.tableWrapper}>
            <table className={styles.controlsTable}>
              <thead>
                <tr>
                  <th>Security Control</th>
                  <th>Use Case</th>
                  <th>AWS</th>
                  <th>Azure</th>
                  <th>GCP</th>
                </tr>
              </thead>
              <tbody>
                {securityControls.map((control, index) => (
                  <tr key={index}>
                    <td className={styles.controlName}>{control.control}</td>
                    <td className={styles.useCase}>{control.useCase}</td>
                    <td className={styles.cloudService}>
                      {control.aws.services.split(', ').map((service, i) => (
                        <span key={i}>
                          {i > 0 && ', '}
                          <a href={control.aws.links[i]} target="_blank" rel="noopener noreferrer">{service}</a>
                        </span>
                      ))}
                    </td>
                    <td className={styles.cloudService}>
                      {control.azure.services.split(', ').map((service, i) => (
                        <span key={i}>
                          {i > 0 && ', '}
                          <a href={control.azure.links[i]} target="_blank" rel="noopener noreferrer">{service}</a>
                        </span>
                      ))}
                    </td>
                    <td className={styles.cloudService}>
                      {control.gcp.services.split(', ').map((service, i) => (
                        <span key={i}>
                          {i > 0 && ', '}
                          <a href={control.gcp.links[i]} target="_blank" rel="noopener noreferrer">{service}</a>
                        </span>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className={styles.bestPractices}>
          <h2>Best Practices for Healthcare AI Security</h2>
          <p className={styles.sectionIntro}>
            Implementing AI in regulated healthcare environments requires a comprehensive approach to security 
            that addresses both traditional infrastructure concerns and AI-specific risks.
          </p>

          <div className={styles.practiceSection}>
            <h3>1. Data Protection & Privacy</h3>
            <ul>
              <li><strong>Encryption Everywhere:</strong> Implement encryption at rest and in transit for all PHI and PII. Use customer-managed keys (CMKs) for sensitive data stores and model artifacts.</li>
              <li><strong>Data Minimization:</strong> Only collect and process the minimum necessary data for AI model training and inference. Implement automated data retention and deletion policies.</li>
              <li><strong>De-identification:</strong> Apply de-identification techniques (anonymization, pseudonymization) before using data for model training. Validate de-identification effectiveness regularly.</li>
              <li><strong>Data Lineage:</strong> Maintain comprehensive audit trails of data flow from source systems through AI pipelines to outputs, enabling compliance verification and incident investigation.</li>
            </ul>
          </div>

          <div className={styles.practiceSection}>
            <h3>2. Access Control & Authentication</h3>
            <ul>
              <li><strong>Zero Trust Architecture:</strong> Implement least-privilege access controls with continuous verification. Never trust, always verify.</li>
              <li><strong>Role-Based Access Control (RBAC):</strong> Define granular roles for data scientists, clinicians, administrators, and automated systems with appropriate permissions.</li>
              <li><strong>Multi-Factor Authentication:</strong> Require MFA for all human access to AI systems, especially for production environments and PHI access.</li>
              <li><strong>Service-to-Service Authentication:</strong> Use managed identities, service accounts, and short-lived credentials for automated AI workflows.</li>
            </ul>
          </div>

          <div className={styles.practiceSection}>
            <h3>3. Model Security & Integrity</h3>
            <ul>
              <li><strong>Model Versioning:</strong> Maintain version control for all models with cryptographic signatures to ensure integrity and enable rollback capabilities.</li>
              <li><strong>Adversarial Robustness:</strong> Test models against adversarial attacks and implement input validation to prevent manipulation of AI outputs.</li>
              <li><strong>Model Monitoring:</strong> Continuously monitor model performance, drift, and anomalous predictions that could indicate security issues or data poisoning.</li>
              <li><strong>Secure Training Pipelines:</strong> Isolate training environments, validate training data sources, and implement controls to prevent unauthorized model modifications.</li>
            </ul>
          </div>

          <div className={styles.practiceSection}>
            <h3>4. Compliance & Governance</h3>
            <ul>
              <li><strong>Regulatory Alignment:</strong> Map AI implementations to HIPAA, HITECH, FDA regulations, and state privacy laws. Document compliance controls.</li>
              <li><strong>Business Associate Agreements:</strong> Ensure BAAs are in place with all cloud providers and third-party AI service vendors handling PHI.</li>
              <li><strong>Audit Readiness:</strong> Implement comprehensive logging and monitoring to support compliance audits. Retain logs per regulatory requirements.</li>
              <li><strong>Risk Assessments:</strong> Conduct regular security risk assessments specific to AI systems, including bias, fairness, and safety considerations.</li>
            </ul>
          </div>

          <div className={styles.practiceSection}>
            <h3>5. Infrastructure Security</h3>
            <ul>
              <li><strong>Network Segmentation:</strong> Isolate AI workloads in dedicated VPCs/VNets with strict firewall rules and network access controls.</li>
              <li><strong>Secure APIs:</strong> Implement API gateways with rate limiting, authentication, and input validation for all AI service endpoints.</li>
              <li><strong>Container Security:</strong> Scan container images for vulnerabilities, use minimal base images, and implement runtime security monitoring.</li>
              <li><strong>Secrets Management:</strong> Store API keys, credentials, and certificates in dedicated secrets management services, never in code or configuration files.</li>
            </ul>
          </div>

          <div className={styles.practiceSection}>
            <h3>6. Incident Response & Recovery</h3>
            <ul>
              <li><strong>Incident Response Plan:</strong> Develop AI-specific incident response procedures covering data breaches, model compromises, and output errors.</li>
              <li><strong>Backup & Recovery:</strong> Implement automated backups of models, training data, and configurations with tested recovery procedures.</li>
              <li><strong>Breach Notification:</strong> Establish processes for timely breach notification per HIPAA requirements (60 days) and state laws.</li>
              <li><strong>Post-Incident Analysis:</strong> Conduct thorough post-mortems after security incidents to improve controls and prevent recurrence.</li>
            </ul>
          </div>

          <div className={styles.practiceSection}>
            <h3>7. Transparency & Explainability</h3>
            <ul>
              <li><strong>Model Documentation:</strong> Maintain comprehensive documentation of model architecture, training data, performance metrics, and limitations.</li>
              <li><strong>Explainable AI:</strong> Implement techniques to explain model decisions, especially for clinical decision support applications.</li>
              <li><strong>Patient Rights:</strong> Enable mechanisms for patients to access, correct, and request deletion of their data used in AI systems.</li>
              <li><strong>Clinical Validation:</strong> Ensure AI outputs are validated by qualified healthcare professionals before clinical use.</li>
            </ul>
          </div>
        </section>

        <section className={styles.notes}>
          <h2>Implementation Notes</h2>
          <div className={styles.noteCards}>
            <div className={styles.noteCard}>
              <h3>Multi-Cloud Strategy</h3>
              <p>
                Organizations can use this mapping to maintain consistent security postures across 
                multiple cloud providers or to facilitate cloud migration projects.
              </p>
            </div>
            <div className={styles.noteCard}>
              <h3>HIPAA Compliance</h3>
              <p>
                All listed services support HIPAA-compliant configurations when properly implemented 
                with Business Associate Agreements (BAAs) in place.
              </p>
            </div>
            <div className={styles.noteCard}>
              <h3>Defense in Depth</h3>
              <p>
                Implement multiple layers of security controls to create a robust defense strategy 
                for healthcare AI workloads.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
