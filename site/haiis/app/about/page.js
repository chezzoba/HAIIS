import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from './page.module.css';

export default function About() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className={styles['about-hero']}>
        <h1>About the Framework</h1>
        <p className={styles['hero-subtitle']}>How we're bridging the gap between policy and practice in healthcare AI</p>
      </section>

      {/* Origin Story Section */}
      <section id="origin" className={styles['origin-section']}>
        <h2>The Problem We're Solving</h2>
        <div className={styles['origin-content']}>
          <p>
            The Healthcare AI Implementation Standards was born from a simple observation: healthcare organizations 
            were struggling to implement AI not because of technical limitations, but because of the 
            complex intersection of regulatory requirements, security concerns, and multi-cloud realities.
          </p>
          
          <div className={styles['problem-list']}>
            <div className={styles['problem-item']}>
              <span className={styles['problem-icon']}>⚠️</span>
              <div>
                <h3>The Regulatory Gap</h3>
                <p>HIPAA, GxP, and FDA requirements were documented in policy documents but rarely translated into actionable technical patterns. Organizations knew <em>what</em> to comply with, but not <em>how</em> to implement it.</p>
              </div>
            </div>

            <div className={styles['problem-item']}>
              <span className={styles['problem-icon']}>🔒</span>
              <div>
                <h3>Security Inconsistency</h3>
                <p>Each cloud platform had different security controls, creating gaps when organizations used multiple providers. There was no unified approach to securing AI workloads across AWS, Azure, and GCP.</p>
              </div>
            </div>

            <div className={styles['problem-item']}>
              <span className={styles['problem-icon']}>📊</span>
              <div>
                <h3>Data Governance Challenges</h3>
                <p>Sensitive healthcare data required special handling throughout the AI lifecycle, but existing frameworks didn't address the unique needs of training, inference, and monitoring AI models.</p>
              </div>
            </div>

            <div className={styles['problem-item']}>
              <span className={styles['problem-icon']}>🎯</span>
              <div>
                <h3>Lack of Actionable Guidance</h3>
                <p>Most available resources were high-level principles without concrete implementation steps. Organizations needed playbooks, not just policy documents.</p>
              </div>
            </div>
          </div>

          <div className={styles['solution-statement']}>
            <h3>Our Approach</h3>
            <p>
              We started by documenting real-world implementation challenges from healthcare organizations, 
              then worked backward to create patterns that address regulatory requirements directly in the 
              technical architecture. The framework emerged from solving concrete problems like  
              report writing automation, medical imaging analysis, and natural language processing for 
              healthcare data.
            </p>
          </div>
        </div>
      </section>

      <section id="evolution">
        <h2>Evolution Plan</h2>
        <div className={styles.timeline}>
          <div className={styles['timeline-item']}>
            <div className={styles['timeline-marker']}>0-18 mo</div>
            <div className={styles['timeline-content']}>
              <h3>Foundation Phase</h3>
              <p>Publish core patterns and validate with 2-3 healthcare organizations</p>
            </div>
          </div>
          <div className={styles['timeline-item']}>
            <div className={styles['timeline-marker']}>18-36 mo</div>
            <div className={styles['timeline-content']}>
              <h3>Scaling Phase</h3>
              <p>Launch train-the-trainer program and comprehensive documentation</p>
            </div>
          </div>
          <div className={styles['timeline-item']}>
            <div className={styles['timeline-marker']}>36-42 mo</div>
            <div className={styles['timeline-content']}>
              <h3>Partnership Phase</h3>
              <p>Establish curriculum partnerships with educational institutions</p>
            </div>
          </div>
          <div className={styles['timeline-item']}>
            <div className={styles['timeline-marker']}>42-48 mo</div>
            <div className={styles['timeline-content']}>
              <h3>Maturity Phase</h3>
              <p>Launch certification program and establish industry working group</p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section id="principles" className={styles['principles-section']}>
        <h2>Our Guiding Principles</h2>
        <div className={styles['principles-grid']}>
          <div className={styles['principle-card']}>
            <h3>Problem-First Approach</h3>
            <p>Every component starts with a concrete healthcare AI implementation challenge</p>
          </div>

          <div className={styles['principle-card']}>
            <h3>Regulatory by Design</h3>
            <p>Compliance requirements are embedded into technical patterns from the start</p>
          </div>

          <div className={styles['principle-card']}>
            <h3>Cloud Agnostic</h3>
            <p>Patterns work across AWS, Azure, GCP, and other platforms with consistent security</p>
          </div>

          <div className={styles['principle-card']}>
            <h3>Open and Accessible</h3>
            <p>Freely available to all healthcare organizations, with no licensing barriers</p>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className={styles['community-section']}>
        <h2>Built for the Healthcare Community</h2>
        <div className={styles['community-content']}>
          <p>
            The framework isn't a theoretical exercise but rather a collection of patterns that have been 
            tested and refined through collaboration with healthcare organizations, cloud architects, 
            compliance teams, and AI practitioners.
          </p>
          <p>
            Our approach is: identify common challenges, develop practical solutions, 
            document them clearly, and make them available to everyone. The framework grows through 
            real-world implementation and community feedback.
          </p>
          <div className={styles['cta-container']}>
            <a href="/collaborate" className={styles['community-cta']}>Join the Collaboration →</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}