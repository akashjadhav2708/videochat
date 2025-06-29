import React from 'react'
import styles from './footer.module.css';


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.footerText}>© 2025 Video Call App. All rights reserved.</p>
        <div className={styles.footerLinks}>
          <a href="/privacy" className={styles.footerLink}>Privacy Policy</a>
          <a href="/terms" className={styles.footerLink}>Terms of Service</a>
        </div>  
        </div>
    </footer>                    
  )
}

export default Footer