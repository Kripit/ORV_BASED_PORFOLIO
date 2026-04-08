import { useEffect, useRef } from 'react'

const mediaByVariant = {
  home: { video: '/assets/orv-live-wallpaper.mp4', poster: '/assets/orv-wallpaper.png' },
  about: { video: '/assets/orv-live-wallpaper.mp4', poster: '/assets/orv-wallpaper-2.jpg' },
  projects: { video: '/assets/alt-live-wallpaper.mp4', poster: '/assets/orv-wallpaper-2.jpg' },
  resume: { video: '/assets/alt-live-wallpaper.mp4', poster: '/assets/orv-wallpaper.png' },
}

export default function ParticleBackground({ variant = 'home' }) {
  const canvasRef = useRef(null)
  const media = mediaByVariant[variant] || mediaByVariant.home

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    let animationId = 0

    const particleArray = []
    for (let i = 0; i < 70; i++) {
      particleArray.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.7 + 0.3,
        speedX: (Math.random() - 0.5) * 0.25,
        speedY: (Math.random() - 0.5) * 0.25,
        opacity: Math.random() * 0.45 + 0.2,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.strokeStyle = 'rgba(0, 212, 255, 0.1)'
      ctx.lineWidth = 1

      particleArray.forEach((particle, index) => {
        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        ctx.fillStyle = `rgba(0, 212, 255, ${particle.opacity})`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        for (let j = index + 1; j < particleArray.length; j++) {
          const dx = particleArray[j].x - particle.x
          const dy = particleArray[j].y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(particleArray[j].x, particleArray[j].y)
            ctx.stroke()
          }
        }
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <>
      <video
        className="fixed inset-0 -z-30 h-full w-full object-cover pointer-events-none"
        src={media.video}
        autoPlay
        muted
        loop
        playsInline
        poster={media.poster}
        style={{ filter: 'brightness(0.82) saturate(1.14) contrast(1.04)' }}
      />

      <div className="fixed inset-0 -z-20 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(0,212,255,0.18),transparent_45%),radial-gradient(circle_at_80%_85%,rgba(220,20,60,0.2),transparent_42%),linear-gradient(180deg,rgba(4,7,24,0.34),rgba(4,7,24,0.58))]" />
      <canvas ref={canvasRef} className="fixed inset-0 -z-10 pointer-events-none" />
    </>
  )
}
