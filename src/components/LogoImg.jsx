import { useEffect, useRef } from 'react'

// Strips the grey/white checkerboard background from the logo PNG
// by zeroing out pixels that are grey (r ≈ g ≈ b) and above a brightness floor.
// The logo itself is blue-tinted, so grey pixels are safe to remove.
export default function LogoImg({ className, alt }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const img = new Image()
    img.onload = () => {
      const canvas = canvasRef.current
      if (!canvas) return
      canvas.width = img.naturalWidth
      canvas.height = img.naturalHeight
      const ctx = canvas.getContext('2d')
      ctx.drawImage(img, 0, 0)

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const d = imageData.data
      const w = canvas.width, h = canvas.height

      // Grey = low colour saturation. Logo is blue-tinted so this is safe.
      const isBackground = (r, g, b, a) => {
        if (a === 0) return false
        const max = Math.max(r, g, b)
        const sat = max === 0 ? 0 : (max - Math.min(r, g, b)) / max
        return sat < 0.2 && (r + g + b) / 3 > 40
      }

      // Flood-fill from every grey pixel on the image border outward
      const visited = new Uint8Array(w * h)
      const queue = []

      const tryEnqueue = (x, y) => {
        if (x < 0 || x >= w || y < 0 || y >= h) return
        const idx = y * w + x
        if (visited[idx]) return
        visited[idx] = 1
        const pi = idx * 4
        if (isBackground(d[pi], d[pi + 1], d[pi + 2], d[pi + 3])) queue.push(idx)
      }

      for (let x = 0; x < w; x++) { tryEnqueue(x, 0); tryEnqueue(x, h - 1) }
      for (let y = 0; y < h; y++) { tryEnqueue(0, y); tryEnqueue(w - 1, y) }

      while (queue.length) {
        const idx = queue.pop()
        d[idx * 4 + 3] = 0 // erase
        const x = idx % w, y = (idx / w) | 0
        tryEnqueue(x - 1, y); tryEnqueue(x + 1, y)
        tryEnqueue(x, y - 1); tryEnqueue(x, y + 1)
      }

      // Second pass: remove low-saturation pixels not reachable from the edge.
      // These are checkerboard squares tinted by the logo's glow (sat 0.20–0.34).
      // Real logo elements are strongly blue (sat > 0.45), so this is safe.
      for (let i = 0; i < d.length; i += 4) {
        if (d[i + 3] === 0) continue
        const r = d[i], g = d[i + 1], b = d[i + 2]
        const max = Math.max(r, g, b)
        const sat = max === 0 ? 0 : (max - Math.min(r, g, b)) / max
        const brightness = (r + g + b) / 3
        if (sat < 0.38 && brightness > 35) d[i + 3] = 0
      }

      ctx.putImageData(imageData, 0, 0)
    }
    img.src = '/logo.png'
  }, [])

  return <canvas ref={canvasRef} className={className} role="img" aria-label={alt} />
}
