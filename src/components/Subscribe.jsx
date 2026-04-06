import styles from './Subscribe.module.css'

export default function Subscribe() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.label}>
          <span className={styles.line} />
          <span>Stay in the Loop</span>
        </div>
        <h2 className={styles.heading}>Be the first to know.</h2>
        <p className={styles.sub}>
          Get notified about upcoming events, venue drops, and early access tickets.
        </p>
        <div className={styles.embed}>
          <iframe
            src="https://subscribe-forms.beehiiv.com/d7690d73-7c71-43e0-aee8-d7988149ff99"
            className={styles.iframe}
            frameBorder="0"
            scrolling="no"
            title="Subscribe to Flow Down Low"
          />
        </div>
      </div>
    </section>
  )
}
