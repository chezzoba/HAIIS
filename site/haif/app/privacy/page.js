import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from './page.module.css';

export default function Privacy() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className={styles['privacy-hero']}>
        <h1>Privacy Policy</h1>
        <p className={styles.subtitle}>How we handle your information on the Healthcare AI Framework website</p>
      </section>

      {/* Privacy Content */}
      <section className={styles['privacy-content']}>
        <div className={styles['privacy-section']}>
          <h2>Information We Collect</h2>
          <p>
            The Healthcare AI Framework website is designed to be privacy-respecting. We collect minimal information:
          </p>
          <ul>
            <li><strong>Collaboration form submissions:</strong> When you submit the collaboration form, we collect the information you provide (organization, role, use case, cloud platforms, message)</li>
            <li><strong>Basic analytics:</strong> We use privacy-focused analytics that don't collect personal data</li>
            <li><strong>No cookies:</strong> We don't use tracking cookies or third-party analytics that collect personal information</li>
          </ul>
        </div>

        <div className={styles['privacy-section']}>
          <h2>How We Use Your Information</h2>
          <p>
            Information collected through the collaboration form is used solely to:
          </p>
          <ul>
            <li>Respond to your collaboration inquiry</li>
            <li>Understand interest in different framework components</li>
            <li>Improve the framework based on community needs</li>
            <li>We never sell or share your information with third parties</li>
          </ul>
        </div>

        <div className={styles['privacy-section']}>
          <h2>Data Security</h2>
          <p>
            We take reasonable measures to protect any information you provide:
          </p>
          <ul>
            <li>Form submissions are stored securely</li>
            <li>We use HTTPS encryption for all data transmission</li>
            <li>We regularly review our security practices</li>
            <li>We don't store sensitive personal information beyond what's necessary</li>
          </ul>
        </div>

        <div className={styles['privacy-section']}>
          <h2>Third-Party Services</h2>
          <p>
            We use minimal third-party services:
          </p>
          <ul>
            <li><strong>Hosting:</strong> The website is hosted on standard cloud infrastructure</li>
            <li><strong>Analytics:</strong> We use privacy-focused analytics that respect Do Not Track signals</li>
            <li><strong>No advertising:</strong> We don't use advertising networks or tracking pixels</li>
          </ul>
        </div>

        <div className={styles['privacy-section']}>
          <h2>Your Rights</h2>
          <p>
            You have the right to:
          </p>
          <ul>
            <li>Request access to any information we have about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt out of communications at any time</li>
          </ul>
          <p>
            To exercise these rights, contact us through the collaboration form.
          </p>
        </div>

        <div className={styles['privacy-section']}>
          <h2>Framework Content</h2>
          <p>
            The Healthcare AI Framework itself:
          </p>
          <ul>
            <li>Is open source under the MIT License</li>
            <li>Doesn't collect or process healthcare data</li>
            <li>Provides patterns for organizations to implement their own compliant solutions</li>
            <li>Doesn't include any tracking or data collection mechanisms</li>
          </ul>
        </div>

        <div className={styles['privacy-section']}>
          <h2>Changes to This Policy</h2>
          <p>
            We may update this privacy policy occasionally. We'll post any changes on this page with an updated revision date.
          </p>
          <p className={styles['last-updated']}>
            Last updated: March 2026
          </p>
        </div>

        <div className={styles['privacy-section']}>
          <h2>Contact</h2>
          <p>
            If you have questions about this privacy policy or how we handle your information, please use the collaboration form on the website.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}