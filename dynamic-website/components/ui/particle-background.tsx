"use client"

import { useEffect, useRef } from "react"

interface ParticleBackgroundProps {
  className?: string
  particleColor?: string
  particleSize?: number
  particleCount?: number
  lineColor?: string
  lineWidth?: number
  speed?: number
  connectDistance?: number
}

export function ParticleBackground({
  className = "",
  particleColor = "rgba(255, 255, 255, 0.5)",
  particleSize = 1.5,
  particleCount = 80,
  lineColor = "rgba(255, 255, 255, 0.2)",
  lineWidth = 0.5,
  speed = 0.5,
  connectDistance = 120,
}: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []

    // Define the Particle class first
    class Particle {
      x: number
      y: number
      directionX: number
      directionY: number
      size: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.directionX = Math.random() * speed * 2 - speed
        this.directionY = Math.random() * speed * 2 - speed
        this.size = Math.random() * particleSize + 0.5
      }

      update() {
        if (this.x > canvas.width || this.x < 0) {
          this.directionX = -this.directionX
        }
        if (this.y > canvas.height || this.y < 0) {
          this.directionY = -this.directionY
        }

        this.x += this.directionX
        this.y += this.directionY
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = particleColor
        ctx.fill()
      }
    }

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    function initParticles() {
      particles = []
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }

    function connect() {
      if (!ctx) return
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x
          const dy = particles[a].y - particles[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectDistance) {
            ctx.strokeStyle = lineColor
            ctx.lineWidth = lineWidth
            ctx.beginPath()
            ctx.moveTo(particles[a].x, particles[a].y)
            ctx.lineTo(particles[b].x, particles[b].y)
            ctx.stroke()
          }
        }
      }
    }

    function animate() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      connect()

      animationFrameId = requestAnimationFrame(animate)
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [particleColor, particleSize, particleCount, lineColor, lineWidth, speed, connectDistance])

  return <canvas ref={canvasRef} className={`absolute inset-0 w-full h-full pointer-events-none ${className}`} />
}
