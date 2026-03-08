import styles from './Footer.module.css';

export default function Footer() {
  const date = new Date();
  const options = { month: 'long' };
  const monthName = new Intl.DateTimeFormat('en-US', options).format(date);
  const year = date.getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <a href="/framework#roadmap">Framework Roadmap</a>
        <a href="/about#status">Updates</a>
        <a href="/privacy">Privacy</a>
        <a href="/collaborate">Contact</a>
        <a href="https://github.com/chezzoba/HAIIS" target='_blank' >Contribute</a>
      </div>
      <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
        HAIIS v0.2 Last updated {monthName} {year}
      </p>
      <p>Copyright © {year}. Open source under MIT License.</p>
    </footer>
  );
}
