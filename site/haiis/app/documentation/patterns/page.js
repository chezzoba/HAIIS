import Main from '@/components/Main';
import PublicationGrid from '@/components/PublicationGrid';
import styles from './page.module.css';
import publications from './publications.json';

export const metadata = {
  title: 'Compliance by Design Patterns | HAIIS',
  description: 'Reference architectures for deploying compliant healthcare AI on AWS, Azure, and GCP, covering HIPAA, GxP, and FDA-regulated workloads.',
};

export default function CompliancePage() {
  return (
    <Main>
      <section className={styles.hero}>
        <h1>Architecture Patterns</h1>
        <p>Reference architectures for compliant AI workloads on AWS, Azure, and GCP</p>
      </section>
      <section className={styles.publications}>
        <PublicationGrid publications={publications} />
      </section>
    </Main>
  );
}
