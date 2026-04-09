import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './page.module.css';
import publications from './publications.json';

export const metadata = {
  title: 'Compliance by Design Patterns | HAIIS',
  description: 'Directory of publications and resources on compliance by design patterns for healthcare AI implementation.',
};

export default function CompliancePage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>Architecture Patterns</h1>
          <p>A curated directory of publications and resources for implementing compliant healthcare AI systems</p>
        </section>

        <section className={styles.publications}>
          <div className={styles.grid}>
            {publications.map((pub, index) => (
              <a key={index} href={pub.link} target="_blank" rel="noopener noreferrer" className={styles.card}>
                {pub.previewImage && (
                  <img src={pub.previewImage} alt={pub.title} className={styles.previewImage} />
                )}
                <div className={styles.cardBody}>
                  <h3>{pub.title}</h3>
                  <p>{pub.subtitle}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
