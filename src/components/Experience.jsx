import styles from './Experience.module.css'

const timeline = [
  { time: '00:00', label: 'Doors Open', desc: 'Arrive. Feel the space. Let the low end settle in.' },
  { time: '00:05', label: 'Opening Set', desc: 'Ambient bass eases the room in. Mats laid. Bodies loosening.' },
  { time: '00:10', label: 'Flow Begins', desc: 'The instructor leads a full bass-matched yoga sequence as the DJ builds the drop.' },
  { time: '00:30', label: 'Peak Energy', desc: 'The set peaks. Movement matches the music. Pure synchrony.' },
  { time: '00:45', label: 'Cool Down', desc: 'The music softens. Poses slow. Liquid DnB carries the final stretch.' },
  { time: '00:55', label: 'Savasana', desc: 'Sub-bass holds the room in silence-as-sound. Pure stillness.' },
  { time: '01:00', label: 'Afterglow', desc: 'Drinks, connection, vinyl. The night continues.' },
]

const genres = [
  'Dubstep', 'Drum & Bass', 'Liquid Funk', 'Neuro', 'Halftime',
  'Future Garage', 'Bass House', 'Riddim', 'Deep DnB', 'Ambient Bass',
]

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.label}>
          <span className={styles.line} />
          <span>The Experience</span>
        </div>

        <h2 className={styles.heading}>An experience unlike anything else.</h2>

        <div className={styles.layout}>
          <div className={styles.timeline}>
            {timeline.map((t, i) => (
              <div key={i} className={styles.step}>
                <div className={styles.stepLeft}>
                  <span className={styles.time}>{t.time}</span>
                  {i < timeline.length - 1 && <span className={styles.connector} />}
                </div>
                <div className={styles.stepRight}>
                  <span className={styles.stepLabel}>{t.label}</span>
                  <p className={styles.stepDesc}>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.aside}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>The Sound</h3>
              <p className={styles.cardBody}>
                No house. No top-40. Flow Down Low is built on bass-first music — genres
                designed to be <em>felt</em> as much as heard. The subwoofer is an instrument.
              </p>
              <div className={styles.tags}>
                {genres.map(g => (
                  <span key={g} className={styles.tag}>{g}</span>
                ))}
              </div>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>The Practice</h3>
              <p className={styles.cardBody}>
                All levels welcome. Sessions are designed for movement over precision —
                vinyasa-inspired flows that respond to the music's arc. No experience necessary.
                Just a body and willingness to move.
              </p>
              <div className={styles.stat}>
                <span className={styles.statNum}>60</span>
                <span className={styles.statLabel}>min session</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>50</span>
                <span className={styles.statLabel}>cap — intentionally small</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
