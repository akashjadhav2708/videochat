"use client";
import React from 'react';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
     {/* <img src="https://via.placeholder.com/40x40.png?text=VC" alt="Logo" className={styles.logo} /> */}

        <h1 className={styles.title}>Video Chat</h1>
      </div>
    </header>
  );
};

export default Header;
