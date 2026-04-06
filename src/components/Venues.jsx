import styles from './Venues.module.css'

const venues = [
  {
    tag: 'Natural Amphitheater',
    title: 'Red Rocks Amphitheatre',
    location: 'Morrison, CO — 20 min from Denver',
    desc: '300 million years of geology as your backdrop. Already home to "Yoga on the Rocks" — we bring the bass.',
    mood: ['iconic', 'elevated', 'outdoor'],
    img: 'https://images.pexels.com/photos/8044956/pexels-photo-8044956.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    tag: 'Warehouse',
    title: 'Mission Ballroom',
    location: 'RiNo — River North Art District',
    desc: 'A 60,000 sq ft industrial warehouse built for sound. Concrete, steel, and sub-bass that hits every wall.',
    mood: ['industrial', 'raw', 'immersive'],
    img: 'https://images.pexels.com/photos/2728557/pexels-photo-2728557.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    tag: 'Immersive Art',
    title: 'Meow Wolf — Convergence Station',
    location: 'RiNo — River North Art District',
    desc: '90,000 sq ft of surreal, interconnected worlds. Flow through luminous corridors with bass bouncing off every surface.',
    mood: ['otherworldly', 'immersive', 'electric'],
    img: 'https://images.pexels.com/photos/6127412/pexels-photo-6127412.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    tag: 'Nature',
    title: 'Denver Botanic Gardens',
    location: 'Cheesman Park',
    desc: 'Twenty-four acres in the heart of the city. Already hosts live music and yoga — we just add the drop.',
    mood: ['grounded', 'lush', 'open-air'],
    img: 'https://images.pexels.com/photos/31661384/pexels-photo-31661384.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
]

export default function Venues() {
  return (
    <section id="venues" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.label}>
          <span className={styles.line} />
          <span>The Venues</span>
        </div>

        <div className={styles.header}>
          <h2 className={styles.heading}>
            The space is<br />part of the art.
          </h2>
          <p className={styles.sub}>
            Flow Down Low is nomadic by design — each event in a unique Denver location,
            never the same space twice in a season. The venue shapes the energy.
          </p>
        </div>

        <div className={styles.grid}>
          {venues.map(v => (
            <div key={v.title} className={styles.card}>
              <div className={styles.cardVisual}>
                <img src={v.img} alt={v.title} className={styles.cardImg} />
                <span className={styles.cardTag}>{v.tag}</span>
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{v.title}</h3>
                <p className={styles.cardLocation}>{v.location}</p>
                <p className={styles.cardDesc}>{v.desc}</p>
                <div className={styles.moods}>
                  {v.mood.map(m => (
                    <span key={m} className={styles.mood}>{m}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <p className={styles.ctaText}>
            Have a Denver space with character? We're looking for our next venue partner.
          </p>
          <a href="#partner" className={styles.ctaBtn}>Talk to Us</a>
        </div>
      </div>
    </section>
  )
}
