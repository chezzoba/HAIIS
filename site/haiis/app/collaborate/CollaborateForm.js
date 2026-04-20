'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function CollaborateForm() {
  const [formData, setFormData] = useState({
    organization: '',
    email: '',
    role: '',
    useCase: '',
    cloudPlatforms: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (e) => {
    const { value, checked } = e.target;
    const current = formData.cloudPlatforms.split(',').filter(v => v);
    const updated = checked
      ? [...current, value].join(',')
      : current.filter(v => v !== value).join(',');
    setFormData(prev => ({ ...prev, cloudPlatforms: updated }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({ organization: '', email: '', role: '', useCase: '', cloudPlatforms: '', message: '' });
      } else {
        alert('Failed to submit form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className={styles['success-message']}>
        <h3>Thank you for your interest!</h3>
        <p>We've received your collaboration request and will be in touch within 3-5 business days.</p>
        <button onClick={() => setSubmitSuccess(false)} className={styles['submit-button']}>
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles['collaborate-form']}>
      <div className={styles['form-grid']}>
        <div className={styles['form-group']}>
          <label htmlFor="organization">Organization *</label>
          <input type="text" id="organization" name="organization" value={formData.organization} onChange={handleChange} required placeholder="Your organization name" />
        </div>

        <div className={styles['form-group']}>
          <label htmlFor="email">Email *</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="your.email@example.com" />
        </div>

        <div className={styles['form-group']}>
          <label htmlFor="role">Role *</label>
          <input type="text" id="role" name="role" value={formData.role} onChange={handleChange} required placeholder="Your role/title" />
        </div>

        <div className={styles['form-group']}>
          <label htmlFor="useCase">Primary Use Case *</label>
          <select id="useCase" name="useCase" value={formData.useCase} onChange={handleChange} required>
            <option value="">Select a use case</option>
            <option value="report-writing">Report Writing</option>
            <option value="document-processing">Intelligent Document Processing</option>
            <option value="nlp-querying">Natural Language Database Querying</option>
            <option value="medical-imaging">Medical Imaging Analysis</option>
            <option value="predictive-analytics">Predictive Analytics</option>
            <option value="other">Other (specify in message)</option>
          </select>
        </div>

        <div className={`${styles['form-group']} ${styles['full-width']}`}>
          <label>Relevant Cloud Providers</label>
          <div className={styles['checkbox-group']}>
            {[
              { value: 'aws', label: 'AWS' },
              { value: 'azure', label: 'Azure' },
              { value: 'gcp', label: 'Google Cloud' },
              { value: 'other', label: 'Other' },
            ].map(({ value, label }) => (
              <label key={value} className={styles['checkbox-label']}>
                <input type="checkbox" name="cloudPlatforms" value={value} checked={formData.cloudPlatforms.includes(value)} onChange={handleCheckbox} />
                {label}
              </label>
            ))}
          </div>
        </div>

        <div className={`${styles['form-group']} ${styles['full-width']}`}>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="Tell us about your interest, timeline, or any specific questions..." />
        </div>
      </div>

      <button type="submit" className={styles['submit-button']} disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Collaborate with us'}
      </button>
    </form>
  );
}
