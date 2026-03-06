'use client';

import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from './page.module.css';

export default function Collaborate() {
  const [formData, setFormData] = useState({
    organization: '',
    role: '',
    useCase: '',
    cloudPlatforms: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        organization: '',
        role: '',
        useCase: '',
        cloudPlatforms: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className={styles['collaborate-hero']}>
        <h1>Ready to pilot the framework?</h1>
        <p className={styles.subtitle}>Join our early adopter program and help shape the future of healthcare AI implementation</p>
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
        <p className={styles['section-description']}>Choose how you'd like to engage with the framework</p>
        
        <div className={styles['types-grid']}>
          <div className={styles['type-card']}>
            <h3>Pilot Validation</h3>
            <p>Test framework patterns in your production environment and provide feedback</p>
            <ul>
              <li>Implement framework components</li>
              <li>Share implementation challenges</li>
              <li>Provide real-world validation</li>
            </ul>
          </div>

          <div className={styles['type-card']}>
            <h3>Curriculum Partnership</h3>
            <p>Co-develop training materials and educational programs</p>
            <ul>
              <li>Create course content</li>
              <li>Develop certification programs</li>
              <li>Train-the-trainer initiatives</li>
            </ul>
          </div>

          <div className={styles['type-card']}>
            <h3>Case Study</h3>
            <p>Share your success story and implementation experience</p>
            <ul>
              <li>Document your journey</li>
              <li>Share metrics and outcomes</li>
              <li>Inspire other organizations</li>
            </ul>
          </div>

          <div className={styles['type-card']}>
            <h3>Advisory</h3>
            <p>Help shape future framework releases and priorities</p>
            <ul>
              <li>Provide strategic guidance</li>
              <li>Review new components</li>
              <li>Participate in working groups</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Intake Form Section */}
      <section id="intake-form" className={styles['form-section']}>
        <h2>Start Collaborating</h2>
        <p className={styles['section-description']}>Tell us about your organization and how you'd like to engage</p>
        
        {submitSuccess ? (
          <div className={styles['success-message']}>
            <h3>Thank you for your interest!</h3>
            <p>We've received your collaboration request and will be in touch within 3-5 business days.</p>
            <button 
              onClick={() => setSubmitSuccess(false)}
              className={styles['submit-button']}
            >
              Submit Another Request
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={styles['collaborate-form']}>
            <div className={styles['form-group']}>
              <label htmlFor="organization">
                Organization *
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                required
                placeholder="Your organization name"
              />
            </div>

            <div className={styles['form-group']}>
              <label htmlFor="role">
                Role *
              </label>
              <input
                type="text"
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
                placeholder="Your role/title"
              />
            </div>

            <div className={styles['form-group']}>
              <label htmlFor="useCase">
                Primary Use Case *
              </label>
              <select
                id="useCase"
                name="useCase"
                value={formData.useCase}
                onChange={handleChange}
                required
              >
                <option value="">Select a use case</option>
                <option value="report-writing">Report Writing</option>
                <option value="document-processing">Intelligent Document Processing</option>
                <option value="nlp-querying">Natural Language Database Querying</option>
                <option value="medical-imaging">Medical Imaging Analysis</option>
                <option value="predictive-analytics">Predictive Analytics</option>
                <option value="other">Other (specify in message)</option>
              </select>
            </div>

            <div className={styles['form-group']}>
              <label htmlFor="cloudPlatforms">
                Cloud Platforms
              </label>
              <div className={styles['checkbox-group']}>
                <label className={styles['checkbox-label']}>
                  <input
                    type="checkbox"
                    name="cloudPlatforms"
                    value="aws"
                    checked={formData.cloudPlatforms.includes('aws')}
                    onChange={(e) => {
                      const value = e.target.value;
                      const current = formData.cloudPlatforms.split(',').filter(v => v);
                      const updated = e.target.checked 
                        ? [...current, value].join(',')
                        : current.filter(v => v !== value).join(',');
                      setFormData(prev => ({ ...prev, cloudPlatforms: updated }));
                    }}
                  />
                  AWS
                </label>
                <label className={styles['checkbox-label']}>
                  <input
                    type="checkbox"
                    name="cloudPlatforms"
                    value="azure"
                    checked={formData.cloudPlatforms.includes('azure')}
                    onChange={(e) => {
                      const value = e.target.value;
                      const current = formData.cloudPlatforms.split(',').filter(v => v);
                      const updated = e.target.checked 
                        ? [...current, value].join(',')
                        : current.filter(v => v !== value).join(',');
                      setFormData(prev => ({ ...prev, cloudPlatforms: updated }));
                    }}
                  />
                  Azure
                </label>
                <label className={styles['checkbox-label']}>
                  <input
                    type="checkbox"
                    name="cloudPlatforms"
                    value="gcp"
                    checked={formData.cloudPlatforms.includes('gcp')}
                    onChange={(e) => {
                      const value = e.target.value;
                      const current = formData.cloudPlatforms.split(',').filter(v => v);
                      const updated = e.target.checked 
                        ? [...current, value].join(',')
                        : current.filter(v => v !== value).join(',');
                      setFormData(prev => ({ ...prev, cloudPlatforms: updated }));
                    }}
                  />
                  Google Cloud
                </label>
                <label className={styles['checkbox-label']}>
                  <input
                    type="checkbox"
                    name="cloudPlatforms"
                    value="other"
                    checked={formData.cloudPlatforms.includes('other')}
                    onChange={(e) => {
                      const value = e.target.value;
                      const current = formData.cloudPlatforms.split(',').filter(v => v);
                      const updated = e.target.checked 
                        ? [...current, value].join(',')
                        : current.filter(v => v !== value).join(',');
                      setFormData(prev => ({ ...prev, cloudPlatforms: updated }));
                    }}
                  />
                  Other
                </label>
              </div>
            </div>

            <div className={styles['form-group']}>
              <label htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Tell us about your interest, timeline, or any specific questions..."
              />
            </div>

            <button 
              type="submit" 
              className={styles['submit-button']}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Collaboration Request'}
            </button>
          </form>
        )}
      </section>

      <Footer />
    </>
  );
}