import Main from '../../components/Main';
import styles from './page.module.css';
import Link from 'next/link';

const eyebrow = { color: '#0066cc', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' };
const h2Style = { textAlign: 'left', marginBottom: '1.5rem', fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#1a1a1a' };
const container = { maxWidth: '1100px', margin: '0 auto' };

export default function Documentation() {
  return (
    <Main>

      {/* Hero Section */}
      <section style={{ background: '#fff', padding: '1.5rem 2rem' }}>
        <div style={container}>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1a1a1a', marginBottom: '1rem' }}>Documentation</h1>
          <p style={{ fontSize: '1.15rem', color: '#555', lineHeight: 1.7, maxWidth: '1200px' }}>
            Guides, templates, and practical resources for organizations exploring AI implementation
          </p>
        </div>
      </section>

      {/* Implementation Guide */}
      <section id="guide" style={{ padding: '1.5rem 2rem', background: '#f7f9fc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div style={container}>
          <p style={eyebrow}>Guide</p>
          <h2 style={h2Style}>Implementation Guide</h2>
          <p style={{ color: '#555', marginBottom: '2rem', fontSize: '0.95rem', maxWidth: '640px' }}>
            The six-step implementation model below illustrates how organizations may apply HAIIS framework components in practice
          </p>
          <div style={{ borderTop: '1px solid #e2e8f0' }}>
            {[
              { n: '01', title: 'Assess your AI use case', desc: 'Identify the specific healthcare AI application, data types, and regulatory requirements' },
              { n: '02', title: 'Select compliance pattern', desc: 'Choose the appropriate architecture pattern based on your regulatory needs (HIPAA, GxP, FDA)' },
              { n: '03', title: 'Map security controls', desc: 'Apply the security control mapping system to your chosen cloud platform' },
              { n: '04', title: 'Apply governance protocols', desc: 'Implement data governance protocols for sensitive healthcare data management' },
              { n: '05', title: 'Run risk assessment', desc: 'Complete the AI risk assessment methodology for healthcare-specific risks' },
              { n: '06', title: 'Deploy via playbook', desc: 'Follow the implementation playbook for step-by-step deployment guidance' },
            ].map((step) => (
              <div key={step.n} style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', padding: '1.5rem 0', borderBottom: '1px solid #e2e8f0' }}>
                <span style={{ fontSize: '1.75rem', fontWeight: 700, color: '#d0d8e4', flexShrink: 0, minWidth: '3rem', lineHeight: 1 }}>{step.n}</span>
                <div>
                  <h3 style={{ fontSize: '1rem', color: '#1a1a1a', marginBottom: '0.35rem', fontWeight: 600 }}>{step.title}</h3>
                  <p style={{ color: '#555', lineHeight: 1.7, margin: 0, fontSize: '0.95rem' }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section id="categories" style={{ padding: '1.5rem 2rem', background: '#fff' }}>
        <div style={container}>
          <p style={eyebrow}>Resources</p>
          <h2 style={h2Style}>Documentation</h2>
          <div className="grid-3col" style={{ borderTop: '1px solid #e2e8f0', borderLeft: '1px solid #e2e8f0' }}>

            <div style={{ padding: '2rem', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1rem', color: '#1a1a1a', marginBottom: '0.4rem', fontWeight: 600 }}>Architecture Patterns</h3>
              <p style={{ color: '#555', fontSize: '0.875rem', marginBottom: '1rem' }}>Compliance-by-design blueprints for common AI use cases</p>
              <ul style={{ paddingLeft: '1.25rem', color: '#555', fontSize: '0.875rem', lineHeight: 1.8, flex: 1 }}>
                <li>Compliance Automation</li>
                <li>Remote Patient Monitoring</li>
                <li>Serverless Resilience</li>
                <li>Predictive analytics</li>
              </ul>
              <Link href="/documentation/patterns" className={styles['step-link']} style={{ marginTop: '1.25rem', display: 'inline-block' }}>Browse patterns →</Link>
            </div>

            <div style={{ padding: '2rem', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1rem', color: '#1a1a1a', marginBottom: '0.4rem', fontWeight: 600 }}>Security Controls</h3>
              <p style={{ color: '#555', fontSize: '0.875rem', marginBottom: '1rem' }}>Cross-cloud security mappings</p>
              <ul style={{ paddingLeft: '1.25rem', color: '#555', fontSize: '0.875rem', lineHeight: 1.8, flex: 1 }}>
                <li>AWS security controls</li>
                <li>Azure security controls</li>
                <li>GCP security controls</li>
              </ul>
              <Link href="/documentation/security" className={styles['step-link']} style={{ marginTop: '1.25rem', display: 'inline-block' }}>Browse security controls →</Link>
            </div>

            <div style={{ padding: '2rem', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1rem', color: '#1a1a1a', marginBottom: '0.4rem', fontWeight: 600 }}>Governance Templates</h3>
              <p style={{ color: '#555', fontSize: '0.875rem', marginBottom: '1rem' }}>Data governance protocols</p>
              <ul style={{ paddingLeft: '1.25rem', color: '#555', fontSize: '0.875rem', lineHeight: 1.8, flex: 1 }}>
                <li>Data classification frameworks</li>
                <li>Access control templates</li>
                <li>Audit and monitoring protocols</li>
                <li>Data lifecycle management</li>
              </ul>
              <Link href="/documentation/governance" className={styles['step-link']} style={{ marginTop: '1.25rem', display: 'inline-block' }}>Browse governance →</Link>
            </div>

            <div style={{ padding: '2rem', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1rem', color: '#1a1a1a', marginBottom: '0.4rem', fontWeight: 600 }}>Risk Worksheets</h3>
              <p style={{ color: '#555', fontSize: '0.875rem', marginBottom: '1rem' }}>Healthcare-specific AI risk assessment tools</p>
              <ul style={{ paddingLeft: '1.25rem', color: '#555', fontSize: '0.875rem', lineHeight: 1.8, flex: 1 }}>
                <li>Risk assessment worksheets</li>
                <li>Mitigation strategy templates</li>
                <li>Healthcare risk catalogs</li>
                <li>Compliance validation checklists</li>
              </ul>
              <span className={styles['coming-soon']} style={{ marginTop: '1.25rem' }}>Coming soon</span>
            </div>

            <div style={{ padding: '2rem', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1rem', color: '#1a1a1a', marginBottom: '0.4rem', fontWeight: 600 }}>Implementation Playbooks</h3>
              <p style={{ color: '#555', fontSize: '0.875rem', marginBottom: '1rem' }}>Implementation and validation guides</p>
              <ul style={{ paddingLeft: '1.25rem', color: '#555', fontSize: '0.875rem', lineHeight: 1.8, flex: 1 }}>
                <li>Deployment guides</li>
                <li>Security assessment</li>
                <li>Performance testing</li>
              </ul>
              <Link href="/documentation/playbooks" className={styles['step-link']} style={{ marginTop: '1.25rem', display: 'inline-block' }}>Browse playbooks →</Link>
            </div>

            <div style={{ padding: '2rem', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1rem', color: '#1a1a1a', marginBottom: '0.4rem', fontWeight: 600 }}>Glossary</h3>
              <p style={{ color: '#555', fontSize: '0.875rem', marginBottom: '1rem' }}>Overview of key concepts and terms</p>
              <ul style={{ paddingLeft: '1.25rem', color: '#555', fontSize: '0.875rem', lineHeight: 1.8, flex: 1 }}>
                <li>Healthcare regulations</li>
                <li>AI/ML terminology</li>
                <li>Cloud computing terms</li>
                <li>Security concepts</li>
              </ul>
              <Link href="/documentation/glossary" className={styles['step-link']} style={{ marginTop: '1.25rem', display: 'inline-block' }}>Browse glossary →</Link>
            </div>

          </div>
        </div>
      </section>

    </Main>
  );
}
