import { useState } from 'react'
import styles from './Partner.module.css'

const opportunities = [
  {
    type: 'Venue Partner',
    desc: 'Have a space with character? Rooftops, warehouses, galleries, parks — we want to activate it.',
    fit: ['Unique visual aesthetic', 'Capacity 30–200', 'Sound system or open to rental', 'Open to off-hours activation'],
  },
  {
    type: 'Business Partner',
    desc: 'Looking to co-own a brand that sits at the intersection of wellness, culture, and nightlife?',
    fit: ['Events & hospitality background', 'Wellness or music industry connection', 'Network in target city', 'Capital & operations capacity'],
  },
  {
    type: 'Brand Sponsor',
    desc: 'Reach a health-conscious, culture-driven, 25–40 demographic with genuine affinity.',
    fit: ['Beverages & CPG', 'Activewear & lifestyle', 'Wellness tech', 'Music & audio brands'],
  },
]

export default function Partner() {
  const [active, setActive] = useState(0)
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', type: '', message: '' })

  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    try {
      const res = await fetch('https://formspree.io/f/xqegwrey', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setSent(true)
      } else {
        setError('Something went wrong. Please try again.')
      }
    } catch {
      setError('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="partner" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.label}>
          <span className={styles.line} />
          <span>Partner</span>
        </div>

        <div className={styles.topRow}>
          <h2 className={styles.heading}>
            Let's build this<br />
            <span className={styles.accent}>together.</span>
          </h2>
          <p className={styles.sub}>
            Flow Down Low is a concept seeking its first co-creators — venues, partners,
            sponsors, and believers who see what this can become.
          </p>
        </div>

        <div className={styles.oppGrid}>
          {opportunities.map((o, i) => (
            <div
              key={o.type}
              className={`${styles.opp} ${active === i ? styles.oppActive : ''}`}
              onClick={() => { setActive(i); setForm(f => ({ ...f, type: o.type })) }}
            >
              <span className={styles.oppNum}>0{i + 1}</span>
              <h3 className={styles.oppType}>{o.type}</h3>
              <p className={styles.oppDesc}>{o.desc}</p>
              {active === i && (
                <ul className={styles.oppFit}>
                  {o.fit.map(f => (
                    <li key={f}>
                      <span className={styles.check}>✓</span> {f}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className={styles.formWrap}>
          <div className={styles.formLabel}>Send us a message</div>
          {sent ? (
            <div className={styles.thankYou}>
              <span className={styles.thankIcon}>◈</span>
              <h3>We got you.</h3>
              <p>Thanks for reaching out — we'll be in touch soon.</p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label>Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    required
                  />
                </div>
                <div className={styles.field}>
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    required
                  />
                </div>
              </div>
              <div className={styles.field}>
                <label>I'm interested as a...</label>
                <select
                  value={form.type}
                  onChange={e => setForm(f => ({ ...f, type: e.target.value }))}
                  required
                >
                  <option value="">Select...</option>
                  <option>Venue Partner</option>
                  <option>Business Partner</option>
                  <option>Brand Sponsor</option>
                  <option>Just curious</option>
                </select>
              </div>
              <div className={styles.field}>
                <label>Tell us more</label>
                <textarea
                  rows={4}
                  placeholder="What excites you about this? What do you bring to the table?"
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  required
                />
              </div>
              <button type="submit" className={styles.submit}>Send It</button>
              {error && <p className={styles.error}>{error}</p>}
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
