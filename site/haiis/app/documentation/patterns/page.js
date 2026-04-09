import Main from '@/components/Main';
import PublicationGrid from '@/components/PublicationGrid';
import styles from './page.module.css';
import publications from './publications.json';

export const metadata = {
  title: 'Compliance by Design Patterns | HAIIS',
  description: 'Directory of publications and resources on compliance by design patterns for healthcare AI implementation.',
};

export default function CompliancePage() {
  return (
    <Main>
      <section className={styles.hero}>
        <h1>Architecture Patterns</h1>
        <p>Published architectural patterns of compliant healthcare AI systems on the cloud</p>
      </section>
      <section className={styles.publications}>
        <PublicationGrid publications={publications} />
      </section>
    </Main>
  );
}
