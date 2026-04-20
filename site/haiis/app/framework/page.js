import Main from '../../components/Main';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

const eyebrow = { color: '#0066cc', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' };
const h2Style = { textAlign: 'left', marginBottom: '1.5rem', fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#1a1a1a' };
const container = { maxWidth: '1100px', margin: '0 auto' };

export default function Framework() {
  const dwidth = 1200;
  const curYear = (new Date()).getFullYear();
  return (
    <Main>

      {/* Hero */}
      <section style={{ background: '#fff', padding: '1.5rem 2rem' }}>
        <div style={container}>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1a1a1a', marginBottom: '1rem' }}>The HAIIS Framework</h1>
          <p style={{ fontSize: '1.15rem', color: '#555', lineHeight: 1.7, maxWidth: '700px' }}>
            A vendor-neutral, compliance-by-design approach to healthcare AI implementation.
          </p>
        </div>
      </section>

      {/* Framework Principles */}
      <section id="principles" style={{ padding: '1.5rem 2rem', background: '#f7f9fc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div style={container}>
          <p style={eyebrow}>Principles</p>
          <h2 style={h2Style}>Framework Principles</h2>
          <div style={{ display: 'flex', borderTop: '1px solid #e2e8f0', borderLeft: '1px solid #e2e8f0', flexWrap: 'wrap' }}>
            {[
              { title: 'Vendor-Neutral', desc: 'Built across AWS, Azure, GCP, and other platforms' },
              { title: 'Compliance-by-Design', desc: 'HIPAA, GxP, and FDA requirements embedded from the start' },
              { title: 'Open-Access', desc: 'Publicly available without restrictive licensing barriers' },
              { title: 'Actionable', desc: 'Patterns and playbooks, not just principles' },
              { title: 'Education-First', desc: 'Training-based approach for widespread adoption' },
            ].map((item, i) => (
              <div key={i} style={{ flex: '1 1 180px', padding: '1.5rem', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
                <div style={{ width: '1.5rem', height: '3px', background: '#0066cc', marginBottom: '0.75rem' }} />
                <h3 style={{ fontSize: '0.95rem', color: '#1a1a1a', marginBottom: '0.4rem', fontWeight: 600 }}>{item.title}</h3>
                <p style={{ color: '#555', fontSize: '0.875rem', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diagram Section */}
      <section className={styles['framework-hero']}>
        <h1>HAIIS Core Pillars</h1>
        <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 2rem' }}>
          The HAIIS framework (HAIF) is organized around five components intended to address common implementation barriers in healthcare AI.
        </p>
        <div className={styles['diagram-container']}>
          <Image
            src="/img/pillarsdiagram.webp"
            alt="Framework Five Pillars Diagram"
            width={dwidth}
            height={dwidth / 2}
            priority
          />
        </div>
      </section>

      {/* Core Components accordion */}
      <section id="components" style={{ padding: '1.5rem 2rem' }}>
        <div style={container}>
          <p style={eyebrow}>Components</p>
          <h2 style={h2Style}>The Core Components</h2>
          <div className={styles['components-accordion']}>

            <details className={styles['component-card']}>
              <summary><h3>Compliance-by-Design Architecture Patterns</h3></summary>
              <div className={styles['component-content']}>
                <h4>Problem</h4>
                <p>Healthcare organizations struggle to implement AI while meeting regulatory requirements like HIPAA, GxP, and FDA standards.</p>
                <h4>Solution Overview</h4>
                <p>Implementation patterns designed to help teams embed HIPAA-, GxP-, and FDA-relevant considerations into system architecture from the outset.</p>
                <h4>Target Users</h4>
                <p>Cloud architects, IT leaders, compliance teams</p>
                <h4>Key Features</h4>
                <ul>
                  <li>Architecture templates for common AI use cases</li>
                  <li>Compliance checklists integrated into design patterns</li>
                  <li>Reference implementations across cloud platforms</li>
                </ul>
                <Link href="/documentation/patterns" className={styles['cta-link']}>Review architecture patterns →</Link>
              </div>
            </details>

            <details className={styles['component-card']}>
              <summary><h3>Security Control Mapping System</h3></summary>
              <div className={styles['component-content']}>
                <h4>Problem</h4>
                <p>Inconsistent security controls across different cloud providers create gaps and compliance risks.</p>
                <h4>Solution Overview</h4>
                <p>Cross-cloud guidance for aligning security controls across AI workloads and healthcare data environments.</p>
                <h4>Target Users</h4>
                <p>Security architects, cloud engineers, compliance officers</p>
                <h4>Key Features</h4>
                <ul>
                  <li>Cross-cloud security control matrices</li>
                  <li>Implementation guides for each cloud platform</li>
                  <li>Security validation checklists</li>
                </ul>
                <Link href="/documentation/security" className={styles['cta-link']}>See multicloud controls →</Link>
              </div>
            </details>

            <details className={styles['component-card']}>
              <summary><h3>Data Governance Protocols</h3></summary>
              <div className={styles['component-content']}>
                <h4>Problem</h4>
                <p>Managing sensitive healthcare data across AI training, inference, and monitoring lacks standardized approaches.</p>
                <h4>Solution Overview</h4>
                <p>Reusable approaches for data handling, access, lineage, and oversight across the AI lifecycle.</p>
                <h4>Target Users</h4>
                <p>Data governance teams, AI engineers, privacy officers</p>
                <h4>Key Features</h4>
                <ul>
                  <li>Data classification frameworks</li>
                  <li>Access control templates</li>
                  <li>Audit and monitoring guides</li>
                </ul>
                <Link href="/documentation/governance" className={styles['cta-link']}>Review governance protocols →</Link>
              </div>
            </details>

            <details className={styles['component-card']}>
              <summary><h3>AI Risk Assessment Methodology</h3></summary>
              <div className={styles['component-content']}>
                <h4>Problem</h4>
                <p>AI introduces unique risks in healthcare that traditional risk frameworks don't adequately address.</p>
                <h4>Solution Overview</h4>
                <p>A structured approach for identifying and mitigating healthcare-specific AI implementation risks.</p>
                <h4>Target Users</h4>
                <p>Risk managers, compliance teams, AI project leads</p>
                <h4>Key Features</h4>
                <ul>
                  <li>Risk assessment worksheets</li>
                  <li>Mitigation strategy templates</li>
                  <li>Healthcare-specific risk catalogs</li>
                </ul>
                <Link href="/documentation#categories" className={styles['cta-link']}>Explore risk methodology →</Link>
              </div>
            </details>

            <details className={styles['component-card']}>
              <summary><h3>Implementation Playbooks</h3></summary>
              <div className={styles['component-content']}>
                <h4>Problem</h4>
                <p>Healthcare organizations need concrete, step-by-step guidance for implementing AI solutions.</p>
                <h4>Solution Overview</h4>
                <p>Step-by-step guides intended to help teams move from concept to controlled deployment.</p>
                <h4>Target Users</h4>
                <p>Project managers, implementation teams, technical leads</p>
                <h4>Key Features</h4>
                <ul>
                  <li>Use case-specific implementation guides</li>
                  <li>Step-by-step deployment checklists</li>
                  <li>Troubleshooting and optimization tips</li>
                </ul>
                <Link href="/documentation/playbooks" className={styles['cta-link']}>Preview implementation playbooks →</Link>
              </div>
            </details>

          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" style={{ padding: '1.5rem 2rem', background: '#f7f9fc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div style={container}>
          <p style={eyebrow}>Roadmap</p>
          <h2 style={h2Style}>Framework Roadmap</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderTop: '1px solid #e2e8f0', borderLeft: '1px solid #e2e8f0' }}>
            {[
              { year: String(curYear), title: 'Foundation', desc: 'Define the initial framework structure, publish concepts, and open collaboration channels' },
              { year: `${curYear + 1}–${curYear + 2}`, title: 'Validation', desc: 'Review and refine framework components through feedback and early implementation discussions' },
              { year: `${curYear + 3}–${curYear + 4}`, title: 'Documentation Expansion', desc: 'Publish implementation guides, templates, and practical examples' },
              { year: `${curYear + 4}+`, title: 'Scaling', desc: 'Support education, partnerships, and continuous refinement based on community input' },
            ].map((step, i) => (
              <div key={i} style={{ padding: '1.75rem', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
                <p style={{ color: '#0066cc', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{step.year}</p>
                <h3 style={{ fontSize: '1rem', color: '#1a1a1a', marginBottom: '0.5rem', fontWeight: 600 }}>{step.title}</h3>
                <p style={{ color: '#555', fontSize: '0.875rem', lineHeight: 1.6, margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </Main>
  );
}
