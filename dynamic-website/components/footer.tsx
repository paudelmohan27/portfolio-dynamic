"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Link from "next/link"
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"
import { ScrollAnimation } from "@/components/ui/scroll-animation"

export default function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  // Handle smooth scroll
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Adjust for navbar height
        behavior: "smooth",
      })
    }
  }

  return (
    <footer className="relative bg-muted/30 pt-16 pb-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* About Column */}
          <ScrollAnimation type="slide" direction="left">
            <div>
              <h3 className="text-lg font-bold mb-4 relative inline-block">
                Mohan Paudel
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary/30 rounded-full"></span>
              </h3>
              <p className="text-muted-foreground mb-4">
                A computer engineering student passionate about web development and creating interactive user
                experiences.
              </p>
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ y: -5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  href="https://github.com/paudelmohan27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </motion.a>
                <motion.a
                  whileHover={{ y: -5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  href="https://linkedin.com/in/paudelmohan27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </motion.a>
                <motion.a
                  whileHover={{ y: -5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  href="mailto:paudelmohan761@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </motion.a>
              </div>
            </div>
          </ScrollAnimation>

          {/* Quick Links */}
          <ScrollAnimation type="slide" direction="up">
            <div>
              <h3 className="text-lg font-bold mb-4 relative inline-block">
                Quick Links
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary/30 rounded-full"></span>
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#home"
                    onClick={(e) => handleScroll(e, "home")}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-3 w-3 transition-transform group-hover:translate-x-1"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    onClick={(e) => handleScroll(e, "about")}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-3 w-3 transition-transform group-hover:translate-x-1"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#projects"
                    onClick={(e) => handleScroll(e, "projects")}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-3 w-3 transition-transform group-hover:translate-x-1"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="#cv"
                    onClick={(e) => handleScroll(e, "cv")}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-3 w-3 transition-transform group-hover:translate-x-1"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                    CV
                  </Link>
                </li>
              </ul>
            </div>
          </ScrollAnimation>

          {/* Contact */}
          <ScrollAnimation type="slide" direction="right">
            <div>
              <h3 className="text-lg font-bold mb-4 relative inline-block">
                Contact
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary/30 rounded-full"></span>
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 mt-1 text-primary/70"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Gaindakot, Nawalpur, Nepal
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 mt-1 text-primary/70"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  paudelmohan761@gmail.com
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 mt-1 text-primary/70"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  +977 9748202957
                </li>
              </ul>
            </div>
          </ScrollAnimation>
        </motion.div>

        <ScrollAnimation
          type="fade"
          delay={0.5}
          className="mt-12 pt-6 border-t border-border/30 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Mohan Paudel. All rights reserved.
          </p>
          <motion.button
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onClick={scrollToTop}
            className="mt-4 md:mt-0 flex items-center text-sm text-muted-foreground hover:text-primary transition-colors group"
            aria-label="Scroll to top"
          >
            Back to top
            <ArrowUp className="ml-1 h-4 w-4 transition-transform group-hover:-translate-y-1" />
          </motion.button>
        </ScrollAnimation>
      </div>
    </footer>
  )
}
