import styles from './Footer.module.css'
import LogoImg from './LogoImg'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <LogoImg alt="Flow Down Low" className={styles.logoImg} />
            <p className={styles.tagline}>Yoga. Bass. Extraordinary spaces.</p>
          </div>
          <div className={styles.nav}>
            <a href="#concept">Concept</a>
            <a href="#experience">Experience</a>
            <a href="#venues">Venues</a>
            <a href="#partner">Partner</a>
          </div>
        </div>
        <div className={styles.bottom}>
          <span className={styles.copy}>
            © {new Date().getFullYear()} Flow Down Low. A concept in motion.
          </span>
          <span className={styles.note}>
            Pitch deck — not yet in production
          </span>
        </div>
      </div>
    </footer>
  )
}
