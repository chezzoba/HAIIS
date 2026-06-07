import Link from 'next/link';
import Main from '@/components/Main';
import PublicationGrid from '@/components/PublicationGrid';
import styles from './page.module.css';
import publications from './publications.json';

export const metadata = {
  title: 'Data Governance Protocols',
  description: 'Data classification, access control, lineage tracking, and retention policies for healthcare AI systems handling PHI.',
  alternates: { canonical: 'https://haiis.org/documentation/governance' },
  openGraph: {
    title: 'Data Governance Protocols | HAIIS',
    description: 'Data classification, access control, lineage tracking, and retention policies for healthcare AI systems handling PHI.',
    url: 'https://haiis.org/documentation/governance',
    type: 'website',
  },
};

export default function GovernancePage() {
  return (
    <Main>
      <section className={styles.hero}>
        <Link href="/documentation" className={styles.backLink}>
          ← Documentation
        </Link>
        <h1>Data Governance Protocols</h1>
        <p>Classification, access control, lineage, and retention policies for PHI and training data</p>
      </section>
      <section className={styles.publications}>
        <PublicationGrid publications={publications} basePath="/documentation/governance" />
      </section>
    </Main>
  );
}
