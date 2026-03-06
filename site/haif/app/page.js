import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <h1>Healthcare AI Framework</h1>
        <h2>Secure, compliant, scalable AI implementations in the cloud</h2>
        <div className="hero-cta">
          <a href="#quickstart" role="button">Start Quickstart →</a>
          <a href="#framework" role="button" className="secondary">Explore Framework →</a>
        </div>
        <p className="hero-tagline">
          Free and open-access • Compliance-by-design • Proven in regulated environments
        </p>
      </section>

      {/* Section 1: The Problem */}
      <section id="problem">
        <h2>Why Healthcare AI Implementation Fails</h2>
        <div className="grid-3">
          <div className="card">
            <h3>Regulatory Complexity</h3>
            <p>Navigating HIPAA, GxP, and FDA requirements without clear technical guidance</p>
          </div>
          <div className="card">
            <h3>Multicloud Security Gaps</h3>
            <p>Inconsistent security controls across different cloud providers</p>
          </div>
          <div className="card">
            <h3>Data Governance Uncertainty</h3>
            <p>Lack of standardized approaches for managing sensitive healthcare data in AI systems</p>
          </div>
        </div>
      </section>

      {/* Section 2: The Framework */}
      <section id="framework">
        <h2>The Core Components</h2>
        <div className="grid-4">
          <div className="card">
            <h3>Compliance-by-Design Architecture Patterns</h3>
            <p>Embed HIPAA/GxP directly into AI blueprints</p>
            <a href="#patterns">Learn More →</a>
          </div>
          <div className="card">
            <h3>Security Controls & Data Governance</h3>
            <p>Consistent security controls across all cloud providers with secure data governance for AI lifecycle</p>
            <a href="#security">Learn More →</a>
          </div>
          <div className="card">
            <h3>AI Risk Assessment Methodology</h3>
            <p>Healthcare-specific risk evaluation</p>
            <a href="#risk">Learn More →</a>
          </div>
          <div className="card">
            <h3>Implementation Playbooks</h3>
            <p>Step-by-step deployment guides</p>
            <a href="#playbooks">Learn More →</a>
          </div>
        </div>
      </section>

      {/* Section 3: Who It's For */}
      <section id="audience">
        <h2>Trusted by Healthcare Leaders</h2>
        <div className="grid-4">
          <div className="card">
            <h3>Hospital CIOs & CTOs</h3>
            <p>Strategic AI adoption for healthcare systems</p>
          </div>
          <div className="card">
            <h3>Pharma IT Architects</h3>
            <p>Compliant AI solutions for drug development</p>
          </div>
          <div className="card">
            <h3>Healthtech Founders</h3>
            <p>Build secure, scalable AI products</p>
          </div>
          <div className="card">
            <h3>Compliance & Governance Teams</h3>
            <p>Risk management and regulatory alignment</p>
          </div>
        </div>
      </section>

      {/* Section 5: How to Start */}
      <section id="quickstart">
        <h2>Your Next Step</h2>
        <div className="grid-3">
          <div className="card">
            <h3>📖 Read Quickstart</h3>
            <p>15-minute guide to get started with the framework</p>
            <a href="#documentation" role="button">Start Reading</a>
          </div>
          <div className="card">
            <h3>💡 Browse Use Cases</h3>
            <p>See real-world implementations and success stories</p>
            <a href="#use-cases" role="button">View Use Cases</a>
          </div>
          <div className="card">
            <h3>🤝 Join Collaboration</h3>
            <p>Become an early adopter and shape the framework</p>
            <a href="#collaborate" role="button">Join Waitlist</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
