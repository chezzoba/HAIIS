import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './page.module.css';
import publications from './publications.json';

export const metadata = {
  title: 'Data Governance Protocols | HAIIS',
  description: 'Publications and resources on data governance protocols for healthcare AI implementation.',
};

export default function GovernancePage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>Data Governance Protocols</h1>
          <p>Publications and resources on data governance protocols for healthcare AI systems</p>
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
