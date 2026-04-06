import styles from './Venues.module.css'
import Reveal from './Reveal'

const venues = [
  {
    tag: 'Park Pavilion',
    title: 'Cheesman Park Pavilion',
    location: 'Capitol Hill — Central Denver',
    desc: 'A neoclassical pavilion surrounded by open lawns and mountain views. Sunset sessions with the city skyline as your backdrop.',
    mood: ['open-air', 'historic', 'serene'],
    img: 'https://images.pexels.com/photos/210374/pexels-photo-210374.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    tag: 'Nature',
    title: 'Denver Botanic Gardens',
    location: 'Cheesman Park — York Street',
    desc: 'Twenty-four acres in the heart of the city. Already hosts live music and yoga — we just add the drop.',
    mood: ['grounded', 'lush', 'open-air'],
    img: 'https://images.pexels.com/photos/7174102/pexels-photo-7174102.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    tag: 'Rooftop',
    title: 'Denver Rooftop',
    location: 'Downtown Denver',
    desc: 'Above the noise, under the stars. Yoga at golden hour with 360-degree skyline views and bass you can feel in your chest.',
    mood: ['elevated', 'urban', 'golden-hour'],
    img: 'https://images.pexels.com/photos/366283/pexels-photo-366283.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    tag: 'Planetarium',
    title: 'Fiske Planetarium',
    location: 'University of Colorado Boulder',
    desc: 'Flow under a 65-foot dome of projected stars. The most immersive ceiling in Colorado becomes your savasana sky.',
    mood: ['cosmic', 'immersive', 'intimate'],
    img: 'https://images.pexels.com/photos/12568979/pexels-photo-12568979.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
]

export default function Venues() {
  return (
    <section id="venues" className={styles.section}>
      <div className={styles.inner}>
        <Reveal>
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
        </Reveal>

        <div className={styles.grid}>
          {venues.map((v, i) => (
            <Reveal key={v.title} delay={i < 3 ? i + 1 : 3}>
            <div className={styles.card}>
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
            </Reveal>
          ))}
        </div>

        <Reveal>
        <div className={styles.cta}>
          <p className={styles.ctaText}>
            Have a Denver space with character? We're looking for our next venue partner.
          </p>
          <a href="#partner" className={styles.ctaBtn}>Talk to Us</a>
        </div>
        </Reveal>
      </div>
    </section>
  )
}
