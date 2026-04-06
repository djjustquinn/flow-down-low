import styles from './Concept.module.css'

export default function Concept() {
  return (
    <section id="concept" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.label}>
          <span className={styles.line} />
          <span>The Concept</span>
        </div>

        <div className={styles.split}>
          <div className={styles.left}>
            <h2 className={styles.heading}>
              Not a gym class.<br />
              Not a rave.<br />
              <em>Something new.</em>
            </h2>
          </div>
          <div className={styles.right}>
            <p className={styles.body}>
              Flow Down Low brings together the intentional movement of yoga with
              the raw energy of live bass music — dubstep, drum & bass, liquid
              funk — performed by a curated DJ in a venue that's anything but ordinary.
            </p>
            <p className={styles.body}>
              Think rooftops at golden hour. Underground warehouses. Museum courtyards
              after dark. Every event is a one-of-a-kind sensory experience designed
              to shake the body loose and settle the mind.
            </p>
            <blockquote className={styles.quote}>
              "Move with intention. Feel the bass. Find your flow."
            </blockquote>
          </div>
        </div>

        <div className={styles.pillars}>
          {[
            {
              icon: '◈',
              title: 'Intentional Movement',
              body: 'Yoga sequences designed to match musical energy — build, peak, release.',
            },
            {
              icon: '◉',
              title: 'Live Bass Music',
              body: 'A resident DJ curates the sonic journey from warm-up through savasana.',
            },
            {
              icon: '◬',
              title: 'Extraordinary Spaces',
              body: 'Rooftops, galleries, warehouses, parks — the venue is part of the experience.',
            },
            {
              icon: '◍',
              title: 'Community First',
              body: 'Small cap events. No posers. Real people finding real connection.',
            },
          ].map(p => (
            <div key={p.title} className={styles.pillar}>
              <span className={styles.pillarIcon}>{p.icon}</span>
              <h3 className={styles.pillarTitle}>{p.title}</h3>
              <p className={styles.pillarBody}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
