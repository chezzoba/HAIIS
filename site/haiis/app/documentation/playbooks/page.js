import Main from '@/components/Main';
import PublicationGrid from '@/components/PublicationGrid';
import styles from './page.module.css';
import publications from './publications.json';

export const metadata = {
  title: 'Implementation Playbooks | HAIIS',
  description: 'Deployment and validation playbooks for standing up healthcare AI infrastructure in regulated environments.',
};

export default function PlaybooksPage() {
  return (
    <Main>
      <section className={styles.hero}>
        <h1>Implementation Playbooks</h1>
        <p>Deployment, validation, and CI/CD guides for regulated healthcare AI infrastructure</p>
      </section>
      <section className={styles.publications}>
        <PublicationGrid publications={publications} />
      </section>
    </Main>
  );
}
