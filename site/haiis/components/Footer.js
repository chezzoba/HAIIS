import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <a href="/framework#roadmap">Framework Roadmap</a>
        <a href="/about#evolution">Updates</a>
        <a href="/privacy">Privacy</a>
        <a href="/collaborate">Contact</a>
        <a href="https://github.com/chezzoba/HAIIS" target='_blank' >Contribute</a>
      </div>
      <p>Copyright © {(new Date()).getFullYear()}. Open source under MIT License.</p>
    </footer>
  );
}
