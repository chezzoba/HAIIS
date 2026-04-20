'use client';

import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';
import Logo from './Logo';

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
          <Link href="/" className={styles.logo}>
            <Logo size={36} />
            HAIIS
          </Link>
          
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
            <li><Link href="/framework" onClick={() => setIsMenuOpen(false)}>Framework</Link></li>
            <li><Link href="/documentation" onClick={() => setIsMenuOpen(false)}>Documentation</Link></li>
            <li><Link href="/collaborate" onClick={() => setIsMenuOpen(false)}>Collaborate</Link></li>
            <li><Link href="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
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
