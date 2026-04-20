import Main from '../../components/Main';
import CollaborateForm from './CollaborateForm';
import styles from './page.module.css';

const eyebrow = { color: '#0066cc', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' };
const h2Style = { textAlign: 'left', marginBottom: '1.5rem', fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#1a1a1a' };
const container = { maxWidth: '1100px', margin: '0 auto' };

export default function Collaborate() {
  return (
    <Main>

      {/* Hero Section */}
      <section style={{ background: '#fff', padding: '1.5rem 2rem' }}>
        <div style={container}>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1a1a1a', marginBottom: '1rem' }}>Interested in shaping the framework?</h1>
          <p style={{ fontSize: '1.15rem', color: '#555', lineHeight: 1.7, maxWidth: '700px' }}>
            We are seeking early collaborators to help review, evaluate, and refine the framework components for real-world healthcare AI use cases
          </p>
        </div>
      </section>

      {/* Who We're Looking For */}
      <section id="who-we-want" style={{ padding: '1.5rem 2rem', background: '#f7f9fc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div style={container}>
          <p style={eyebrow}>Partners</p>
          <h2 style={h2Style}>Who We're Looking For</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', borderTop: '1px solid #e2e8f0', borderLeft: '1px solid #e2e8f0' }}>
            {[
              { title: 'U.S. Hospitals', desc: 'Healthcare systems of any size looking to implement AI solutions' },
              { title: 'Pharmaceutical Companies', desc: 'Pharma organizations developing AI for drug discovery and clinical trials' },
              { title: 'Healthtech Startups', desc: 'Innovators building AI-powered healthcare products and services' },
              { title: 'Education Partners', desc: 'Academic institutions and training organizations for curriculum development' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '2rem', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
                <div style={{ width: '2rem', height: '3px', background: '#0066cc', marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1rem', color: '#1a1a1a', marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ color: '#555', lineHeight: 1.6, margin: 0, fontSize: '0.95rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Types */}
      <section id="collaboration-types" style={{ padding: '1.5rem 2rem', background: '#fff' }}>
        <div style={container}>
          <p style={eyebrow}>How to Engage</p>
          <h2 style={h2Style}>Collaboration Types</h2>
          <div style={{ borderTop: '1px solid #e2e8f0' }}>
            {[
              { n: '01', title: 'Evaluation / Early Adoption', desc: 'Review framework components in the context of real organizational needs, provide feedback on implementation challenges, and help identify gaps, priorities, and practical improvements.' },
              { n: '02', title: 'Education and Curriculum Collaboration', desc: 'Co-develop educational materials, implementation examples, and training pathways that make healthcare AI implementation more accessible to technical teams.' },
              { n: '03', title: 'Implementation Experience Sharing', desc: 'Share lessons learned, non-confidential implementation patterns, and practical observations that may help improve future framework releases.' },
              { n: '04', title: 'Advisory Input', desc: 'Provide subject matter feedback on priorities, scope, and future framework directions.' },
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
        </div>
      </section>

      {/* Intake Form */}
      <section id="intake-form" style={{ padding: '1.5rem 2rem', background: '#f7f9fc', borderTop: '1px solid #e2e8f0' }}>
        <div style={container}>
          <p style={eyebrow}>Get Started</p>
          <h2 style={h2Style}>Start Collaborating</h2>
          <p style={{ color: '#555', marginBottom: '2rem', fontSize: '0.95rem' }}>Tell us about your organization and how you'd like to engage</p>
          <CollaborateForm />
        </div>
      </section>

    </Main>
  );
}
