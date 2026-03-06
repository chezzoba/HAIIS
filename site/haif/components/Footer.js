import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <a href="#roadmap">Framework Roadmap</a>
        <a href="#updates">Updates</a>
        <a href="#newsletter">Newsletter</a>
        <a href="#privacy">Privacy</a>
        <a href="#contact">Contact</a>
      </div>
      <p>Copyright © {(new Date()).getFullYear()}. Open source under MIT License.</p>
    </footer>
  );
}
