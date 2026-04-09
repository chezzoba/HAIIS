import Main from '@/components/Main';
import PublicationGrid from '@/components/PublicationGrid';
import styles from './page.module.css';
import publications from './publications.json';

export const metadata = {
  title: 'Data Governance Protocols | HAIIS',
  description: 'Publications and resources on data governance protocols for healthcare AI implementation.',
};

export default function GovernancePage() {
  return (
    <Main>
      <section className={styles.hero}>
        <h1>Data Governance Protocols</h1>
        <p>Data governance for healthcare AI systems</p>
      </section>
      <section className={styles.publications}>
        <PublicationGrid publications={publications} />
      </section>
    </Main>
  );
}
