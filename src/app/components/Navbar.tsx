"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function to open and close the sidebar
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // Close menu when a link is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>The Fashionary</div>

        <div
          className={`${styles.hamburger} ${isOpen ? styles.active : ''}`}
          onClick={toggleMenu}
        >
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>

        <div className={`${styles.menu} ${isOpen ? styles.active : ''}`}>
          <Link href="/" className={styles.link} onClick={closeMenu}>Home</Link>
          <Link href="/about" className={styles.link} onClick={closeMenu}>About</Link>
          <Link href="/contact" className={styles.link} onClick={closeMenu}>Contact</Link>
          <button className={styles.signUpButton} onClick={closeMenu}>Sign Up</button>
        </div>
      </div>
    </nav>
  );
}
