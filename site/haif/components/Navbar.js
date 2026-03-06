'use client';

import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true);
        setIsMenuOpen(false);
      } else {
        setIsHidden(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <header className={`${styles.header} ${isHidden ? styles.hidden : ''}`}>
        <nav className={styles.nav}>
          <a href="/" className={styles.logo}>Healthcare AI Framework</a>
          
          <button 
            className={styles.menuBtn}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <span className={isMenuOpen ? styles.open : ''}></span>
            <span className={isMenuOpen ? styles.open : ''}></span>
            <span className={isMenuOpen ? styles.open : ''}></span>
          </button>

          <ul className={`${styles.navLinks} ${isMenuOpen ? styles.show : ''}`}>
            <li><a href="#framework" onClick={() => setIsMenuOpen(false)}>Framework</a></li>
            <li><a href="#use-cases" onClick={() => setIsMenuOpen(false)}>Use Cases</a></li>
            <li><a href="#documentation" onClick={() => setIsMenuOpen(false)}>Documentation</a></li>
            <li><a href="#research" onClick={() => setIsMenuOpen(false)}>Research</a></li>
            <li><a href="#collaborate" onClick={() => setIsMenuOpen(false)}>Collaborate</a></li>
          </ul>
        </nav>
      </header>
      
      {isMenuOpen && (
        <div 
          className={styles.overlay} 
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
}
