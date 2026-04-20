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
            Guides, reference architectures, and control mappings for teams building AI systems that handle protected health data
          </p>
        </div>
      </section>

      {/* Implementation Guide */}
      <section id="guide" style={{ padding: '1.5rem 2rem', background: '#f7f9fc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div style={container}>
          <p style={eyebrow}>Guide</p>
          <h2 style={h2Style}>Implementation Guide</h2>
          <p style={{ color: '#555', marginBottom: '2rem', fontSize: '0.95rem', maxWidth: '640px' }}>
            A six-step path from use-case scoping through production deployment
          </p>
          <div style={{ borderTop: '1px solid #e2e8f0' }}>
            {[
              { n: '01', title: 'Assess your AI use case', desc: 'Pin down the clinical workflow, data types (PHI, imaging, genomics), and which regulations apply (HIPAA, FDA SaMD, state AI laws)' },
              { n: '02', title: 'Select compliance pattern', desc: 'Pick an architecture pattern that matches your regulatory profile: HIPAA-only, GxP, or FDA-regulated' },
              { n: '03', title: 'Map security controls', desc: 'Use the cross-cloud control mappings to identify the specific services you need on AWS, Azure, or GCP' },
              { n: '04', title: 'Apply governance protocols', desc: 'Set up data classification, access policies, lineage tracking, and retention rules for PHI and training data' },
              { n: '05', title: 'Run risk assessment', desc: 'Score AI-specific risks (bias, drift, adversarial inputs, hallucination) alongside standard infrastructure risks' },
              { n: '06', title: 'Deploy via playbook', desc: 'Use a deployment playbook to stand up infrastructure, run validation checks, and promote to production' },
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
              <p style={{ color: '#555', fontSize: '0.875rem', marginBottom: '1rem' }}>Reference architectures for HIPAA, GxP, and FDA-regulated AI workloads</p>
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
              <p style={{ color: '#555', fontSize: '0.875rem', marginBottom: '1rem' }}>AWS, Azure, and GCP service mappings for PHI protection, model security, and compliance</p>
              <ul style={{ paddingLeft: '1.25rem', color: '#555', fontSize: '0.875rem', lineHeight: 1.8, flex: 1 }}>
                <li>AWS → Azure → GCP equivalents</li>
                <li>PHI encryption and access controls</li>
                <li>AI-specific guardrails and monitoring</li>
              </ul>
              <Link href="/documentation/security" className={styles['step-link']} style={{ marginTop: '1.25rem', display: 'inline-block' }}>Browse security controls →</Link>
            </div>

            <div style={{ padding: '2rem', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1rem', color: '#1a1a1a', marginBottom: '0.4rem', fontWeight: 600 }}>Governance Templates</h3>
              <p style={{ color: '#555', fontSize: '0.875rem', marginBottom: '1rem' }}>Classification schemes, access policies, lineage tracking, and retention rules for PHI</p>
              <ul style={{ paddingLeft: '1.25rem', color: '#555', fontSize: '0.875rem', lineHeight: 1.8, flex: 1 }}>
                <li>PHI data classification</li>
                <li>Role-based access policies</li>
                <li>Audit and lineage tracking</li>
                <li>Retention and lifecycle rules</li>
              </ul>
              <Link href="/documentation/governance" className={styles['step-link']} style={{ marginTop: '1.25rem', display: 'inline-block' }}>Browse governance →</Link>
            </div>

            <div style={{ padding: '2rem', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1rem', color: '#1a1a1a', marginBottom: '0.4rem', fontWeight: 600 }}>Risk Worksheets</h3>
              <p style={{ color: '#555', fontSize: '0.875rem', marginBottom: '1rem' }}>Bias scoring, clinical risk catalogs, and mitigation planning worksheets</p>
              <ul style={{ paddingLeft: '1.25rem', color: '#555', fontSize: '0.875rem', lineHeight: 1.8, flex: 1 }}>
                <li>Bias and fairness scoring</li>
                <li>Clinical risk catalogs</li>
                <li>Mitigation planning templates</li>
                <li>Pre-deployment checklists</li>
              </ul>
              <span className={styles['coming-soon']} style={{ marginTop: '1.25rem' }}>Coming soon</span>
            </div>

            <div style={{ padding: '2rem', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1rem', color: '#1a1a1a', marginBottom: '0.4rem', fontWeight: 600 }}>Implementation Playbooks</h3>
              <p style={{ color: '#555', fontSize: '0.875rem', marginBottom: '1rem' }}>End-to-end deployment and validation guides for regulated environments</p>
              <ul style={{ paddingLeft: '1.25rem', color: '#555', fontSize: '0.875rem', lineHeight: 1.8, flex: 1 }}>
                <li>CI/CD for regulated infra</li>
                <li>Security validation steps</li>
                <li>Load and compliance testing</li>
              </ul>
              <Link href="/documentation/playbooks" className={styles['step-link']} style={{ marginTop: '1.25rem', display: 'inline-block' }}>Browse playbooks →</Link>
            </div>

            <div style={{ padding: '2rem', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1rem', color: '#1a1a1a', marginBottom: '0.4rem', fontWeight: 600 }}>Glossary</h3>
              <p style={{ color: '#555', fontSize: '0.875rem', marginBottom: '1rem' }}>Definitions of regulatory, AI/ML, cloud, and security terms used across this site</p>
              <ul style={{ paddingLeft: '1.25rem', color: '#555', fontSize: '0.875rem', lineHeight: 1.8, flex: 1 }}>
                <li>HIPAA, FDA, GxP terms</li>
                <li>ML/LLM terminology</li>
                <li>Cloud infrastructure concepts</li>
                <li>Security and compliance terms</li>
              </ul>
              <Link href="/documentation/glossary" className={styles['step-link']} style={{ marginTop: '1.25rem', display: 'inline-block' }}>Browse glossary →</Link>
            </div>

          </div>
        </div>
      </section>

    </Main>
  );
}
