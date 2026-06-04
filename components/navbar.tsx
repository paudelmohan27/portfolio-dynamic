"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Toggle theme
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
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
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="#" onClick={(e) => handleScroll(e, "")} className="font-bold text-xl md:text-2xl group">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 group-hover:from-primary/70 group-hover:to-primary transition-all duration-300">
                Mohan<span className="font-light">Paudel</span>
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden md:flex items-center space-x-1"
          >
            <NavLink href="#" label="Home" onClick={(e) => handleScroll(e, "")} />
            <NavLink href="#about" label="About" onClick={(e) => handleScroll(e, "about")} />
            <NavLink href="#projects" label="Projects" onClick={(e) => handleScroll(e, "projects")} />
            <NavLink href="#cv" label="CV" onClick={(e) => handleScroll(e, "cv")} />
            <NavLink href="#contact" label="Contact" onClick={(e) => handleScroll(e, "contact")} />
            <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.5 }}>
              <Button variant="ghost" size="icon" onClick={toggleTheme} className="ml-2">
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                <span className="sr-only">Toggle theme</span>
              </Button>
            </motion.div>
          </motion.nav>

          {/* Mobile Menu Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center md:hidden"
          >
            <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.5 }}>
              <Button variant="ghost" size="icon" onClick={toggleTheme} className="mr-2">
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                <span className="sr-only">Toggle theme</span>
              </Button>
            </motion.div>
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <X className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Menu className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
              <span className="sr-only">Menu</span>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-b border-border/50"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-3">
              <MobileNavLink href="#" label="Home" onClick={(e) => handleScroll(e, "")} />
              <MobileNavLink href="#about" label="About" onClick={(e) => handleScroll(e, "about")} />
              <MobileNavLink href="#projects" label="Projects" onClick={(e) => handleScroll(e, "projects")} />
              <MobileNavLink href="#cv" label="CV" onClick={(e) => handleScroll(e, "cv")} />
              <MobileNavLink href="#contact" label="Contact" onClick={(e) => handleScroll(e, "contact")} />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

// Desktop Navigation Link
function NavLink({
  href,
  label,
  onClick,
}: { href: string; label: string; onClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="relative px-3 py-2 text-sm font-medium rounded-md hover:text-primary transition-colors group"
    >
      {label}
      <motion.span
        className="absolute bottom-0 left-0 w-full h-0.5 bg-primary origin-left rounded-full"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </Link>
  )
}

// Mobile Navigation Link
function MobileNavLink({
  href,
  label,
  onClick,
}: { href: string; label: string; onClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void }) {
  return (
    <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.3 }}>
      <Link
        href={href}
        onClick={onClick}
        className="block px-3 py-2 text-lg font-medium hover:text-primary transition-colors"
      >
        {label}
      </Link>
    </motion.div>
  )
}
