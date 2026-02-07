"use client"

import type React from "react"

import { useEffect, useRef } from "react"

export function AnimatedGradient({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const canvasEl = canvas

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []
    const particleCount = 20
    const colors = ["#3b82f6", "#8b5cf6", "#ec4899", "#10b981"]

    // Define the Particle class first
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        this.x = Math.random() * canvasEl.width
        this.y = Math.random() * canvasEl.height
        this.size = Math.random() * 100 + 50
        this.speedX = Math.random() * 0.2 - 0.1
        this.speedY = Math.random() * 0.2 - 0.1
        this.color = colors[Math.floor(Math.random() * colors.length)]
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x < 0 || this.x > canvasEl.width) this.speedX *= -1
        if (this.y < 0 || this.y > canvasEl.height) this.speedY *= -1
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
      }
    }

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvasEl.width = window.innerWidth
      canvasEl.height = window.innerHeight
      initParticles()
    }

    function initParticles() {
      particles = []
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }

    function animate() {
      if (!ctx) return
      ctx.clearRect(0, 0, canvasEl.width, canvasEl.height)

      // Create gradient background
      const gradient = ctx.createLinearGradient(
        0,
        0,
        canvasEl.width,
        canvasEl.height
      )
      gradient.addColorStop(0, "rgba(59, 130, 246, 0.01)")
      gradient.addColorStop(0.5, "rgba(139, 92, 246, 0.01)")
      gradient.addColorStop(1, "rgba(236, 72, 153, 0.01)")

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvasEl.width, canvasEl.height)

      // Draw and update particles
      ctx.globalCompositeOperation = "screen"
      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })
      ctx.globalCompositeOperation = "source-over"

      // Apply blur
      ctx.filter = "blur(100px)"
      ctx.drawImage(canvasEl, 0, 0)
      ctx.filter = "none"

      animationFrameId = requestAnimationFrame(animate)
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-30 dark:opacity-20 pointer-events-none"
      />
      {children}
    </div>
  )
}
