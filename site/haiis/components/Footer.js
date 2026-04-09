import styles from './Footer.module.css';
import Link from 'next/link';
import CitationBlock from './CitationBlock';
import { version } from '../package.json';

export default function Footer() {
  const date = new Date();
  const monthName = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date);
  const year = date.getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.links}>
            <Link href="/framework#roadmap">Roadmap</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/collaborate#intake-form">Contact</Link>
            <a href="https://github.com/chezzoba/HAIIS" target='_blank'>Contribute</a>
          </div>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
            HAIIS v{version} Last updated {monthName} {year}
          </p>
          <p>Copyright © {year}. Open source under MIT License.</p>
        </div>
        <div className={styles.right}>
          <CitationBlock version={version} month={monthName} year={year} />
        </div>
      </div>
    </footer>
  );
}
