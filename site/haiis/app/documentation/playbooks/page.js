import Main from '@/components/Main';
import PublicationGrid from '@/components/PublicationGrid';
import styles from './page.module.css';
import publications from './publications.json';

export const metadata = {
  title: 'Implementation Playbooks | HAIIS',
  description: 'Step-by-step implementation playbooks for healthcare AI deployment.',
};

export default function PlaybooksPage() {
  return (
    <Main>
      <section className={styles.hero}>
        <h1>Implementation Playbooks</h1>
        <p>Step-by-step guides for deploying compliant healthcare AI systems</p>
      </section>
      <section className={styles.publications}>
        <PublicationGrid publications={publications} />
      </section>
    </Main>
  );
}
