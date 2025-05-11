"use client"

import { useRef, type ReactNode } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"

interface ScrollAnimationProps {
  children: ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right"
  delay?: number
  duration?: number
  threshold?: number
  type?: "fade" | "slide" | "scale" | "rotate"
}

export function ScrollAnimation({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 0.5,
  threshold = 0.1,
  type = "fade",
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", `start ${1 - threshold}`],
  })

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }
  const springScrollYProgress = useSpring(scrollYProgress, springConfig)

  const opacity = useTransform(springScrollYProgress, [0, 0.2, 1], [0, 1, 1])

  // Calculate transform values based on direction
  let x = 0
  let y = 0
  let scale = 1
  let rotate = 0

  if (type === "slide") {
    if (direction === "up") y = 50
    if (direction === "down") y = -50
    if (direction === "left") x = 50
    if (direction === "right") x = -50
  } else if (type === "scale") {
    scale = 0.8
  } else if (type === "rotate") {
    rotate = direction === "left" ? -10 : 10
  }

  const translateX = useTransform(springScrollYProgress, [0, 1], [x, 0])
  const translateY = useTransform(springScrollYProgress, [0, 1], [y, 0])
  const scaleValue = useTransform(springScrollYProgress, [0, 1], [scale, 1])
  const rotateValue = useTransform(springScrollYProgress, [0, 1], [rotate, 0])

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      style={{
        opacity,
        x: type === "slide" ? translateX : 0,
        y: type === "slide" ? translateY : 0,
        scale: type === "scale" ? scaleValue : 1,
        rotate: type === "rotate" ? rotateValue : 0,
      }}
      transition={{ delay, duration }}
    >
      {children}
    </motion.div>
  )
}
