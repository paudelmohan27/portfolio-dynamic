"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Download, Code, Palette, Globe } from "lucide-react"
import { ScrollAnimation } from "@/components/ui/scroll-animation"
import { AnimatedGradient } from "@/components/ui/animated-gradient"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })



  return (
    <AnimatedGradient className="py-20">
      <section id="about" className="relative py-20">
        <div className="container px-4 md:px-6">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <ScrollAnimation type="fade" className="mb-6 text-center">
              <div className="inline-flex items-center justify-center">
                <div className="h-px w-8 bg-primary/50"></div>
                <h2 className="text-3xl font-bold px-4">About Me</h2>
                <div className="h-px w-8 bg-primary/50"></div>
              </div>
            </ScrollAnimation>

            <div className="space-y-6">
              <ScrollAnimation type="slide" direction="up" delay={0.1}>
                <p className="text-muted-foreground">
                  Hello! I'm Mohan Paudel, a passionate beginner web developer based in Nepal. I'm on a journey to learn
                  and master web development technologies, with a focus on creating interactive and user-friendly
                  experiences.
                </p>
              </ScrollAnimation>

              <ScrollAnimation type="slide" direction="up" delay={0.2}>
                <p className="text-muted-foreground">
                  I enjoy solving problems through code and am constantly expanding my knowledge in HTML, CSS,
                  JavaScript, and various web frameworks. My goal is to build applications that are not only functional
                  but also accessible and enjoyable to use.
                </p>
              </ScrollAnimation>

              <ScrollAnimation type="slide" direction="up" delay={0.3}>
                <p className="text-muted-foreground">
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                  or learning about web design principles.
                </p>
              </ScrollAnimation>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              <ScrollAnimation type="scale" delay={0.4}>
                <div className="bg-card rounded-lg p-6 shadow-sm border border-border/50 hover:border-primary/20 transition-colors hover:shadow-md group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
                      <Code className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-medium">Web Development</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Building responsive websites and web applications using modern HTML, CSS, and JavaScript.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation type="scale" delay={0.5}>
                <div className="bg-card rounded-lg p-6 shadow-sm border border-border/50 hover:border-primary/20 transition-colors hover:shadow-md group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
                      <Palette className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-medium">UI Development</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Creating intuitive user interfaces with a focus on usability and accessibility.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation type="scale" delay={0.6}>
                <div className="bg-card rounded-lg p-6 shadow-sm border border-border/50 hover:border-primary/20 transition-colors hover:shadow-md group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
                      <Globe className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-medium">Web Applications</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Developing interactive web applications with features like calculators, whiteboards, and quizzes.
                  </p>
                </div>
              </ScrollAnimation>
            </div>

            <ScrollAnimation type="fade" delay={0.7} className="mt-10 flex justify-center">
              <Button variant="outline" asChild className="group">
                <a href="/Mohan_CV.pdf" download="Mohan_CV.pdf">
                  <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" /> Download CV
                </a>
              </Button>
            </ScrollAnimation>
          </motion.div>
        </div>
      </section>
    </AnimatedGradient>
  )
}
