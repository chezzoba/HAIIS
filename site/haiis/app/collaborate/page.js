import Main from '../../components/Main';
import CollaborateForm from './CollaborateForm';
import styles from './page.module.css';

export default function Collaborate() {
  return (
    <Main>

      {/* Hero Section */}
      <section className={styles['collaborate-hero']}>
        <h1>Interested in shaping the framework?</h1>
        <p className={styles.subtitle}>We are seeking early collaborators to help review, evaluate, and refine the framework components for real-world healthcare AI use cases</p>
      </section>

      {/* Who We Want Section */}
      <section id="who-we-want" className={styles['who-section']}>
        <h2>Who We're Looking For</h2>
        <p className={styles['section-description']}>We're seeking partners across the healthcare ecosystem to validate and improve the framework</p>
        
        <div className={styles['who-grid']}>
          <div className={styles['who-card']}>
            <h3>U.S. Hospitals</h3>
            <p>Healthcare systems of any size looking to implement AI solutions</p>
          </div>
          <div className={styles['who-card']}>
            <h3>Pharmaceutical Companies</h3>
            <p>Pharma organizations developing AI for drug discovery and clinical trials</p>
          </div>
          <div className={styles['who-card']}>
            <h3>Healthtech Startups</h3>
            <p>Innovators building AI-powered healthcare products and services</p>
          </div>
          <div className={styles['who-card']}>
            <h3>Education Partners</h3>
            <p>Academic institutions and training organizations for curriculum development</p>
          </div>
        </div>
      </section>

      {/* Collaboration Types Section */}
      <section id="collaboration-types" className={styles['types-section']}>
        <h2>Collaboration Types</h2>
        <p className={styles['section-description']}>There are several ways organizations and practitioners can contribute to framework development</p>
        
        <div className={styles['types-grid']}>
          <div className={styles['type-card']}>
            <h3>Evaluation / Early Adoption</h3>
            <p>Review framework components in the context of real organizational needs, provide feedback on implementation challenges, and help identify gaps, priorities, and practical improvements.</p>
          </div>
          <div className={styles['type-card']}>
            <h3>Education and Curriculum Collaboration</h3>
            <p>Co-develop educational materials, implementation examples, and training pathways that make healthcare AI implementation more accessible to technical teams.</p>
          </div>
          <div className={styles['type-card']}>
            <h3>Implementation Experience Sharing</h3>
            <p>Share lessons learned, non-confidential implementation patterns, and practical observations that may help improve future framework releases.</p>
          </div>
          <div className={styles['type-card']}>
            <h3>Advisory Input</h3>
            <p>Provide subject matter feedback on priorities, scope, and future framework directions.</p>
          </div>
        </div>
      </section>

      {/* Intake Form Section */}
      <section id="intake-form" className={styles['form-section']}>
        <h2>Start Collaborating</h2>
        <p className={styles['section-description']}>Tell us about your organization and how you'd like to engage</p>
        <CollaborateForm />
      </section>

    </Main>
  );
}
