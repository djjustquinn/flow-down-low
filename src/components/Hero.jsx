import styles from './Hero.module.css'
import LogoImg from './LogoImg'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.bg}>
        <div className={styles.orb1} />
        <div className={styles.orb2} />
        <div className={styles.grid} />
      </div>

      <div className={styles.content}>
        <LogoImg alt="Flow Down Low" className={styles.logoImg} />
        <p className={styles.eyebrow}>An immersive experience</p>
        <p className={styles.tagline}>
          Yoga in extraordinary places.<br />
          Bass music that moves the room.
        </p>
        <div className={styles.actions}>
          <a href="#concept" className={styles.btnPrimary}>Discover the Concept</a>
          <a href="#partner" className={styles.btnGhost}>Partner With Us</a>
        </div>
      </div>

      <div className={styles.scroll}>
        <span className={styles.scrollLine} />
        <span className={styles.scrollLabel}>Scroll</span>
      </div>

      <div className={styles.waveBar}>
        {Array.from({ length: 32 }).map((_, i) => (
          <div
            key={i}
            className={styles.bar}
            style={{ animationDelay: `${(i * 0.07).toFixed(2)}s` }}
          />
        ))}
      </div>
    </section>
  )
}
