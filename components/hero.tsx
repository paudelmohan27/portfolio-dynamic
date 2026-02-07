"use client";

import type React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { ParticleBackground } from "@/components/ui/particle-background";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.5 },
    },
  };

  const socialVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 1,
      },
    },
  };

  const socialItemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center py-20 md:py-32 overflow-hidden"
    >
      <ParticleBackground
        className="opacity-40 dark:opacity-20"
        particleColor="hsl(0 0% 9% / 0.3)"
        lineColor="hsl(0 0% 9% / 0.1)"
        particleCount={100}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background pointer-events-none" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Computer Engineering Student
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4"
            >
              Hi, I'm{" "}
              <span className="text-primary relative">
                Mohan Paudel
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30 rounded-full" />
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-muted-foreground mb-6"
            >
              A beginner web developer passionate about creating interactive and
              user-friendly web experiences.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <Button asChild size="lg" className="group">
                <a
                  href="#projects"
                  onClick={(e) => handleScroll(e, "projects")}
                >
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>

              <Button variant="outline" size="lg" asChild>
                <a href="#cv" onClick={(e) => handleScroll(e, "cv")}>
                  Contact Me
                </a>
              </Button>
            </motion.div>

            <motion.div
              variants={socialVariants}
              className="flex gap-4 mt-8"
            >
              <motion.a
                variants={socialItemVariants}
                href="https://github.com/paudelmohan27"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
                whileHover={{ y: -3 }}
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </motion.a>

              <motion.a
                variants={socialItemVariants}
                href="https://linkedin.com/in/paudelmohan27"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
                whileHover={{ y: -3 }}
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </motion.a>

              <motion.a
                variants={socialItemVariants}
                href="mailto:paudelmohan761@gmail.com"
                className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
                whileHover={{ y: -3 }}
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-transparent blur-xl animate-pulse" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full flex items-center justify-center">
                <div className="absolute inset-2 overflow-hidden rounded-full border-4 border-primary/20">
                  <img
                    src="/mohan.png"
                    alt="Mohan Paudel"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-card rounded-lg shadow-lg p-3 flex items-center justify-center animate-bounce-slow">
                <div className="text-center">
                  <div className="text-primary font-bold text-xl">2+</div>
                  <div className="text-xs text-muted-foreground">
                    Years Coding
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          onClick={(e) => handleScroll(e, "about")}
          className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
          aria-label="Scroll down to about section"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 5V19M12 19L19 12M12 19L5 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
