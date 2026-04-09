import styles from './Footer.module.css';
import Link from 'next/link';

export default function Footer() {
  const date = new Date();
  const monthName = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date);
  const year = date.getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <Link href="/framework#roadmap">Framework Roadmap</Link>
        <Link href="/privacy">Privacy</Link>
        <Link href="/collaborate#intake-form">Contact</Link>
        <a href="https://github.com/chezzoba/HAIIS" target='_blank' >Contribute</a>
      </div>
      <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
        HAIIS v0.3 Last updated {monthName} {year}
      </p>
      <p>Copyright © {year}. Open source under MIT License.</p>
    </footer>
  );
}
