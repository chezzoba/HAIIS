import Main from '../components/Main';
import Link from 'next/link';
import styles from './not-found.module.css';

export const metadata = {
  title: '404 – Page Not Found | HAIIS',
};

export default function NotFound() {
  return (
    <Main>
      <section className={styles['not-found-hero']}>
        <div className={styles['not-found-code']}>404</div>
        <h1>Page not found</h1>
        <p>
          The page you're looking for doesn't exist or may have moved.
        </p>
        <div className={styles['not-found-links']}>
          <Link href="/" role="button">Go home →</Link>
          <Link href="/documentation" role="button" className="secondary">Browse documentation →</Link>
        </div>
      </section>

      <section className={styles['not-found-suggestions']}>
        <p className={styles['not-found-label']}>You might be looking for</p>
        <div className={styles['not-found-grid']}>
          {[
            { title: 'Framework', href: '/framework', desc: 'Overview of the HAIIS framework and its components.' },
            { title: 'Architecture Patterns', href: '/documentation/patterns', desc: 'Reusable AI blueprints for regulated healthcare environments.' },
            { title: 'Security Controls', href: '/documentation/security', desc: 'Cross-cloud security control mapping for AI workloads.' },
            { title: 'Governance Protocols', href: '/documentation/governance', desc: 'Data handling, access, and oversight across the AI lifecycle.' },
            { title: 'Implementation Playbooks', href: '/documentation/playbooks', desc: 'Step-by-step deployment guides for controlled rollout.' },
            { title: 'Collaborate', href: '/collaborate', desc: 'Share your experience or contribute patterns to HAIIS.' },
          ].map((item) => (
            <Link key={item.href} href={item.href} className={styles['not-found-card']}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </Main>
  );
}
