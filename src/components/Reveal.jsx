import useReveal from '../hooks/useReveal'

export default function Reveal({ children, delay = 0, className = '' }) {
  const [ref, visible] = useReveal(0.12)

  const delayClass = delay ? `reveal-delay-${delay}` : ''

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'visible' : ''} ${delayClass} ${className}`}
    >
      {children}
    </div>
  )
}
