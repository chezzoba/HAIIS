import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './page.module.css';
import glossaryTerms from './terms.json';

export const metadata = {
  title: 'Glossary | HAIIS',
  description: 'Comprehensive glossary of healthcare AI, cloud computing, security, and regulatory terms.',
};

export default function GlossaryPage() {
  // Group terms by category
  const categories = glossaryTerms.reduce((acc, term) => {
    if (!acc[term.category]) {
      acc[term.category] = [];
    }
    acc[term.category].push(term);
    return acc;
  }, {});

  // Sort terms alphabetically within each category
  Object.keys(categories).forEach(category => {
    categories[category].sort((a, b) => a.term.localeCompare(b.term));
  });

  // Create URL-friendly IDs for categories
  const createCategoryId = (category) => {
    return category.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  };

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>Glossary</h1>
          <p>Comprehensive definitions of key terms and concepts in healthcare AI implementation</p>
        </section>

        <section className={styles.contentSection}>
          <div className={styles.intro}>
            <p>
              This glossary provides clear definitions of essential terminology used throughout the HAIIS framework. 
              Terms are organized by category to help you quickly find relevant concepts for your healthcare AI implementation.
            </p>
          </div>

          {/* Table of Contents / Directory */}
          <div className={styles.directory}>
            <h2 className={styles.directoryTitle}>Categories</h2>
            <div className={styles.directoryGrid}>
              {Object.keys(categories).sort().map((category) => (
                <a 
                  key={category} 
                  href={`#${createCategoryId(category)}`}
                  className={styles.directoryLink}
                >
                  {category} ({categories[category].length})
                </a>
              ))}
            </div>
          </div>

          {Object.entries(categories).map(([category, terms]) => (
            <div key={category} id={createCategoryId(category)} className={styles.categorySection}>
              <h2 className={styles.categoryTitle}>{category}</h2>
              <div className={styles.termsList}>
                {terms.map((item, index) => (
                  <div key={index} className={styles.termCard}>
                    <h3 className={styles.termName}>{item.term}</h3>
                    <p className={styles.termDefinition}>{item.definition}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className={styles.notes}>
          <h2>Additional Resources</h2>
          <div className={styles.noteCards}>
            <div className={styles.noteCard}>
              <h3>Regulatory Guidance</h3>
              <p>
                For official definitions and detailed regulatory requirements, consult the{' '}
                <a href="https://www.hhs.gov/hipaa/index.html" target="_blank" rel="noopener noreferrer">HHS HIPAA website</a>,{' '}
                <a href="https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-and-machine-learning-aiml-enabled-medical-devices" target="_blank" rel="noopener noreferrer">FDA guidance documents</a>, 
                and relevant state healthcare privacy laws.
              </p>
            </div>
            <div className={styles.noteCard}>
              <h3>Cloud Provider Documentation</h3>
              <p>
                <a href="https://aws.amazon.com/compliance/hipaa-compliance/" target="_blank" rel="noopener noreferrer">AWS</a>,{' '}
                <a href="https://learn.microsoft.com/en-us/azure/compliance/offerings/offering-hipaa-us" target="_blank" rel="noopener noreferrer">Azure</a>, and{' '}
                <a href="https://cloud.google.com/security/compliance/hipaa" target="_blank" rel="noopener noreferrer">GCP</a> each provide comprehensive documentation on their security and compliance 
                services referenced throughout this glossary.
              </p>
            </div>
            <div className={styles.noteCard}>
              <h3>Industry Standards</h3>
              <p>
                Many terms align with industry standards from{' '}
                <a href="https://www.nist.gov/cybersecurity" target="_blank" rel="noopener noreferrer">NIST</a>,{' '}
                <a href="https://www.iso.org/standard/27001" target="_blank" rel="noopener noreferrer">ISO</a>, and other standards bodies. 
                Refer to these organizations for authoritative technical definitions.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
