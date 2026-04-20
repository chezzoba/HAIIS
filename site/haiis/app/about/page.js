import Main from '../../components/Main';
import styles from './page.module.css';
import Link from 'next/link';

const eyebrow = { color: '#0066cc', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' };
const h2Style = { textAlign: 'left', marginBottom: '1.5rem', fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#1a1a1a' };
const container = { maxWidth: '1100px', margin: '0 auto' };

export default function About() {
  return (
    <Main>

      {/* Hero Section */}
      <section style={{ background: '#fff', padding: '1.5rem 2rem' }}>
        <div style={container}>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1a1a1a', marginBottom: '1rem' }}>About the Framework</h1>
          <p style={{ fontSize: '1.15rem', color: '#555', lineHeight: 1.7, maxWidth: '1200px' }}>
            How we're bridging the gap between policy and practice in healthcare AI
          </p>
        </div>
      </section>

      {/* Project Status */}
      <section id="status" style={{ padding: '1.5rem 2rem', background: '#f7f9fc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div style={container}>
          <p style={eyebrow}>Status</p>
          <h2 style={h2Style}>Project Status</h2>
          <p style={{ color: '#555', lineHeight: 1.8, maxWidth: '760px' }}>
            HAIIS is an early-stage, open-access framework initiative focused on practical implementation guidance for healthcare AI. The project is currently in its foundation phase, with initial framework components, documentation, and collaboration pathways being developed for public release.
          </p>
        </div>
      </section>

      {/* The Problem We're Solving */}
      <section id="origin" style={{ padding: '1.5rem 2rem', background: '#fff' }}>
        <div style={container}>
          <p style={eyebrow}>The Problem</p>
          <h2 style={h2Style}>The Problem We're Solving</h2>
          <p style={{ color: '#555', lineHeight: 1.8, maxWidth: '760px', marginBottom: '2rem' }}>
            Healthcare AI Implementation Standards (HAIIS) was created to address a recurring implementation gap: many organizations understand the policy and compliance requirements, but lack concrete technical guidance for putting them into practice across real systems and cloud environments.
          </p>

          <div style={{ borderTop: '1px solid #e2e8f0' }}>
            {[
              { n: '01', title: 'The Regulatory Gap', desc: 'HIPAA, GxP, and FDA requirements were documented in policy documents but rarely translated into actionable technical patterns. Organizations knew what to comply with, but not how to implement it.' },
              { n: '02', title: 'Security Inconsistency', desc: "Each cloud platform had different security controls, creating gaps when organizations used multiple providers. There was no unified approach to securing AI workloads across AWS, Azure, and GCP." },
              { n: '03', title: 'Data Governance Challenges', desc: "Sensitive healthcare data required special handling throughout the AI lifecycle, but existing frameworks didn't address the unique needs of training, inference, and monitoring AI models." },
              { n: '04', title: 'Lack of Actionable Guidance', desc: 'Most available resources were high-level principles without concrete implementation steps. Organizations needed playbooks, not just policy documents.' },
            ].map((item) => (
              <div key={item.n} style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', padding: '1.5rem 0', borderBottom: '1px solid #e2e8f0' }}>
                <span style={{ fontSize: '1.5rem', fontWeight: 700, color: '#d0d8e4', flexShrink: 0, minWidth: '2.5rem' }}>{item.n}</span>
                <div>
                  <h3 style={{ fontSize: '1rem', color: '#1a1a1a', marginBottom: '0.4rem' }}>{item.title}</h3>
                  <p style={{ color: '#555', lineHeight: 1.7, margin: 0, fontSize: '0.95rem' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '2rem', borderLeft: '3px solid #0066cc', paddingLeft: '1.5rem', paddingTop: '0.5rem', paddingBottom: '0.5rem' }}>
            <h3 style={{ fontSize: '1rem', color: '#1a1a1a', marginBottom: '0.5rem' }}>Our Approach</h3>
            <p style={{ color: '#555', lineHeight: 1.7, margin: 0, fontSize: '0.95rem' }}>
              This initiative is informed by implementation challenges observed in regulated healthcare and life sciences environments, including issues related to compliance architecture, multicloud security, data governance, and AI risk management. HAIIS aims to translate those recurring challenges into practical, reusable patterns and documentation.
            </p>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section id="founder" style={{ padding: '1.5rem 2rem', background: '#f7f9fc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div style={container}>
          <p style={eyebrow}>Founder</p>
          <h2 style={h2Style}>The Founder</h2>
          <p style={{ color: '#555', lineHeight: 1.8, maxWidth: '760px' }}>
            HAIIS is being developed by Kaizad Wadia, a Cloud and AI architect with experience in regulated healthcare environments and multicloud implementation. The initiative reflects a broader goal: making practical healthcare AI implementation guidance more accessible across organizations.
          </p>
        </div>
      </section>

      {/* Scope */}
      <section id="scope" style={{ padding: '1.5rem 2rem', background: '#fff' }}>
        <div style={container}>
          <p style={eyebrow}>Scope</p>
          <h2 style={h2Style}>What HAIIS is (and is not)</h2>
          <p style={{ color: '#555', lineHeight: 1.8, maxWidth: '760px' }}>
            HAIIS is not a regulatory authority, certification body, or substitute for legal or compliance review. It is an open-access implementation framework intended to help organizations operationalize healthcare AI more consistently and responsibly.
          </p>
        </div>
      </section>

      {/* Guiding Principles */}
      <section id="principles" style={{ padding: '1.5rem 2rem', background: '#f7f9fc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div style={container}>
          <p style={eyebrow}>Principles</p>
          <h2 style={h2Style}>Our Guiding Principles</h2>
          <div className="grid-2col" style={{ borderTop: '1px solid #e2e8f0', borderLeft: '1px solid #e2e8f0' }}>
            {[
              { title: 'Problem-First Approach', desc: 'Every component starts with a concrete healthcare AI implementation challenge' },
              { title: 'Regulatory by Design', desc: 'Compliance requirements are embedded into technical patterns from the start' },
              { title: 'Vendor Neutral', desc: 'Patterns work across clouds and other platforms with consistent security' },
              { title: 'Open and Accessible', desc: 'Freely available to all healthcare organizations, with no licensing barriers' },
            ].map((p, i) => (
              <div key={i} style={{ padding: '2rem', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
                <div style={{ width: '2rem', height: '3px', background: '#0066cc', marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1rem', color: '#1a1a1a', marginBottom: '0.5rem' }}>{p.title}</h3>
                <p style={{ color: '#555', lineHeight: 1.6, margin: 0, fontSize: '0.95rem' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community CTA */}
      <section id="community" style={{ background: '#f7f9fc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', padding: '3rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <p style={eyebrow}>Community</p>
          <h2 style={{ ...h2Style, textAlign: 'center' }}>Built for the Healthcare Community</h2>
          <p style={{ color: '#555', lineHeight: 1.8, marginBottom: '1rem' }}>
            The framework is intended to evolve through practical feedback, implementation experience, and collaboration across the healthcare ecosystem.
          </p>
          <p style={{ color: '#555', lineHeight: 1.8, marginBottom: '2rem' }}>
            Our approach is: identify common challenges, develop practical solutions, document them clearly, and make them available to everyone. The framework grows through real-world implementation and community feedback.
          </p>
          <Link href="/collaborate" role="button">Join and Collaborate →</Link>
        </div>
      </section>

    </Main>
  );
}
