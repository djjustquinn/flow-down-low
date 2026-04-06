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
            <a
              href="https://instagram.com/flow.down.low"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.igBtn}
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.403a4.088 4.088 0 011.47.957c.453.453.784.91.957 1.47.163.46.349 1.26.404 2.43.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.055 1.17-.241 1.97-.404 2.43a4.088 4.088 0 01-.957 1.47 4.088 4.088 0 01-1.47.957c-.46.163-1.26.349-2.43.404-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.055-1.97-.241-2.43-.404a4.088 4.088 0 01-1.47-.957 4.088 4.088 0 01-.957-1.47c-.163-.46-.349-1.26-.404-2.43C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.055-1.17.241-1.97.404-2.43a4.088 4.088 0 01.957-1.47A4.088 4.088 0 015.064 2.3c.46-.163 1.26-.349 2.43-.404C8.76 1.838 9.14 1.826 12 1.826zm0-1.663C8.741.5 8.333.514 7.053.573 5.775.63 4.903.823 4.14 1.104a5.751 5.751 0 00-2.08 1.356A5.751 5.751 0 00.704 4.54C.423 5.303.23 6.175.173 7.453.114 8.733.1 9.14.1 12.4s.014 3.668.073 4.948c.057 1.278.25 2.15.531 2.913a5.751 5.751 0 001.356 2.08 5.751 5.751 0 002.08 1.356c.763.281 1.635.474 2.913.531C8.333 24.286 8.741 24.3 12 24.3s3.668-.014 4.948-.073c1.278-.057 2.15-.25 2.913-.531a5.751 5.751 0 002.08-1.356 5.751 5.751 0 001.356-2.08c.281-.763.474-1.635.531-2.913.059-1.28.073-1.688.073-4.948s-.014-3.668-.073-4.948c-.057-1.278-.25-2.15-.531-2.913a5.751 5.751 0 00-1.356-2.08A5.751 5.751 0 0019.86.704C19.097.423 18.225.23 16.947.173 15.667.114 15.259.1 12 .1zM12 6.27a6.13 6.13 0 100 12.26 6.13 6.13 0 000-12.26zm0 10.12a3.99 3.99 0 110-7.98 3.99 3.99 0 010 7.98zm6.406-10.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/>
              </svg>
              Instagram
            </a>
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
