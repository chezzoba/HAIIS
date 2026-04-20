import Main from '../components/Main';
import Link from 'next/link';

export default function Home() {
  return (
    <Main>

      {/* Hero Section */}
      <section className="hero">
        <h1>Healthcare AI Implementation Standards</h1>
        <h2>Practical, open-access guidance for secure and compliant healthcare AI implementation</h2>
        <p style={{ marginTop: '1rem', fontSize: '1.1rem', maxWidth: '800px', margin: '1rem auto' }}>
          A vendor-neutral framework to help healthcare organizations implement AI with stronger compliance, governance, security, and risk management.
        </p>
        <div className="hero-cta">
          <Link href="/collaborate" role="button">Work with us →</Link>
          <Link href="/framework" role="button" className="secondary">Explore Framework →</Link>
        </div>
        <p className="hero-tagline">
          Open-access • Compliance-by-design • Informed by work in regulated life science environments
        </p>
      </section>

      {/* Why this exists: founder/operator rationale */}
      <section id="rationale" style={{ background: '#f7f9fc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', padding: '2rem 2rem' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
          <span style={{ fontSize: '4rem', lineHeight: 1, color: '#0066cc', opacity: 0.25, fontFamily: 'Georgia, serif', flexShrink: 0, marginTop: '-0.5rem' }}>"</span>
          <div>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#2d3748', fontStyle: 'italic', margin: 0 }}>
              Healthcare and Life Sciences organizations run into the same wall: they understand the
              requirements, but have no concrete technical patterns for putting them into practice in
              real-world environments. We aim to close that gap
              with reusable architecture, controls, and deployment guidance built from actual
              implementations in regulated settings.
            </p>
            <p style={{ marginTop: '1rem', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0066cc', margin: '1rem 0 0' }}>The HAIIS Philosophy</p>
          </div>
        </div>
      </section>

      {/* Section 1: The Problem, editorial layout */}
      <section id="problem">
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <p style={{ color: '#0066cc', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>The Problem</p>
          <h2 style={{ textAlign: 'left', marginBottom: '1.5rem', fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>Why Healthcare AI Implementation Fails</h2>
        </div>
        <div className="problem-editorial">
          <div className="problem-lead">
            <h3>Regulatory Complexity</h3>
            <p>
              HIPAA, GxP, and FDA requirements are well-documented in policy, in addition to
              more philosophical frameworks that provide high-level guidance, but rarely
              translated into actionable technical patterns. Teams know <em>what</em> to do.
              They struggle with <em>how</em> to do it.
            </p>
          </div>
          <div className="problem-small">
            <h3>Multicloud Security Gaps</h3>
            <p>Each cloud provider has different controls. Without a unified approach, AI workloads across AWS, Azure, and GCP accumulate inconsistencies that become liabilities.</p>
          </div>
          <div className="problem-small">
            <h3>Data Governance Uncertainty</h3>
            <p>Sensitive healthcare data needs special handling across training, inference, and monitoring, but existing guidance doesn't address the AI lifecycle practically.</p>
          </div>
        </div>
      </section>

      {/* Section 2: The Framework */}
      <section id="framework" style={{ background: '#f7f9fc', padding: '1.5rem 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
          <p style={{ color: '#0066cc', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Framework</p>
          <h2 style={{ textAlign: 'left', marginBottom: '2rem', fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>The Core Components</h2>
          <div className="grid-3col" style={{ gap: '0' }}>
            {[
              { title: 'Architecture Patterns', desc: 'Reusable AI blueprints drawn from real life sciences deployments, with compliance considerations embedded from the start.', href: '/documentation/patterns', cta: 'Review patterns →', available: true },
              { title: 'Security Control Mapping', desc: 'Cross-cloud security control guidance for aligning AI workloads across AWS, Azure, and GCP.', href: '/documentation/security', cta: 'See security controls →', available: true },
              { title: 'Data Governance Protocols', desc: 'Reusable approaches for data handling, access, lineage, and oversight across the full AI lifecycle.', href: '/documentation/governance', cta: 'Review governance protocols →', available: true },
              { title: 'AI Risk Assessment', desc: 'Healthcare-specific risk evaluation designed for the unique failure modes of AI in regulated environments.', href: null, cta: 'Coming soon', available: false },
              { title: 'Implementation Playbooks', desc: 'Step-by-step deployment guides that take teams from architecture decision to controlled rollout.', href: '/documentation/playbooks', cta: 'Preview playbooks →', available: true },
            ].map((item, i) => (
              <div key={i} style={{
                padding: '2rem',
                borderTop: '1px solid #e2e8f0',
                borderRight: (i % 3 !== 2) ? '1px solid #e2e8f0' : 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
              }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#999', letterSpacing: '0.05em' }}>0{i + 1}</span>
                <h3 style={{ fontSize: '1.1rem', color: '#1a1a1a', margin: 0 }}>{item.title}</h3>
                <p style={{ color: '#555', lineHeight: 1.6, fontSize: '0.95rem', margin: 0, flex: 1 }}>{item.desc}</p>
                {item.available
                  ? <Link href={item.href} style={{ color: '#0066cc', fontWeight: 500, fontSize: '0.9rem', marginTop: '0.5rem' }}>{item.cta}</Link>
                  : <span style={{ color: '#aaa', fontStyle: 'italic', fontSize: '0.9rem', marginTop: '0.5rem' }}>{item.cta}</span>
                }
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Get Involved */}
      <section id="quickstart" style={{ padding: '1rem 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
          <p style={{ color: '#0066cc', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Get Involved</p>
          <h2 style={{ textAlign: 'left', marginBottom: '2rem', fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>Where to go next</h2>
        <div className="split-2col">
          <div style={{
            background: '#0d1b2a',
            padding: '3rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
            <div>
              <p style={{ color: '#a8c8f0', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>Documentation</p>
              <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem', lineHeight: 1.3 }}>Everything you need to start building</h3>
              <p style={{ color: '#c8d8ee', lineHeight: 1.7, fontSize: '0.95rem' }}>
                Architecture patterns, security controls, governance protocols, and implementation playbooks, all in one place.
              </p>
            </div>
            <Link href="/documentation" role="button" style={{ marginTop: '2rem', alignSelf: 'flex-start', background: '#0066cc', border: 'none' }}>Browse the documentation →</Link>
          </div>
          <div style={{
            background: '#f0f7ff',
            padding: '3rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
            <div>
              <p style={{ color: '#0066cc', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>Collaborate</p>
              <h3 style={{ color: '#1a1a1a', fontSize: '1.5rem', marginBottom: '1rem', lineHeight: 1.3 }}>Help shape what gets built next</h3>
              <p style={{ color: '#444', lineHeight: 1.7, fontSize: '0.95rem' }}>
                HAIIS is built through community input. Share your implementation experience, flag gaps, or contribute patterns from your own work.
              </p>
            </div>
            <Link href="/collaborate" role="button" style={{ marginTop: '2rem', alignSelf: 'flex-start' }}>Start collaborating →</Link>
          </div>
        </div>
        </div>
      </section>

      {/* Section 3: Who It's For */}
      <section id="audience" style={{ padding: '1.5rem 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
          <p style={{ color: '#0066cc', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Practitioners</p>
          <h2 style={{ textAlign: 'left', marginBottom: '2rem', fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>Who this framework is for</h2>
          <div className="grid-3col" style={{ gap: '0', borderTop: '1px solid #e2e8f0' }}>
            {[
              { label: 'Hospitals & Health Systems', desc: 'Teams evaluating or deploying AI in regulated clinical and operational environments who need architecture guidance, not just policy checklists.' },
              { label: 'Pharma & Life Sciences', desc: 'Implementation patterns for compliant AI workflows in research, documentation, and regulated data environments where audit trails matter.' },
              { label: 'Healthtech & Medical Device Builders', desc: 'Practical guidance for secure, governed AI deployment in healthcare products where regulatory scrutiny is part of the product lifecycle.' },
            ].map((item, i) => (
              <div key={i} style={{
                padding: '2rem',
                borderRight: i < 2 ? '1px solid #e2e8f0' : 'none',
                borderBottom: '1px solid #e2e8f0',
              }}>
                <div style={{ width: '2rem', height: '3px', background: '#0066cc', marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1rem', color: '#1a1a1a', marginBottom: '0.75rem' }}>{item.label}</h3>
                <p style={{ color: '#555', lineHeight: 1.6, fontSize: '0.9rem', margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </Main>
  );
}
