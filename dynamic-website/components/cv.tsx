"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Download, Phone, Mail, MapPin, Code, Globe, Trophy } from "lucide-react"
import { ScrollAnimation } from "@/components/ui/scroll_animation"

export default function CV() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Function to generate and download CV
  const downloadCV = () => {
    // Create a simple text version of the CV data
    const cvData = `
MOHAN PAUDEL
Computer Engineering Student
--------------------------

CONTACT
Phone: 9748202957
Email: paudelmohan761@gmail.com
Location: Gaindakot, Nawalpur, Nepal

EDUCATION
Pulchowk Engineering - Computer Engineering (Running)
Prerana College - Higher Secondary Education (2022-2024)

SKILLS
- Web Designing
- Hosting
- Competitive Programming

PROJECTS
- Cricket Insight Nepal: A comprehensive cricket news and scores platform
- Interactive Whiteboard: A collaborative digital canvas application
- Calculator Application: A sleek calculator with arithmetic operations
    `

    // Create a Blob with the CV data
    const blob = new Blob([cvData], { type: "text/plain" })

    // Create a URL for the Blob
    const url = URL.createObjectURL(blob)

    // Create a link element
    const link = document.createElement("a")
    link.href = url
    link.download = "mohan-paudel-cv.txt"

    // Append the link to the body
    document.body.appendChild(link)

    // Click the link to trigger the download
    link.click()

    // Clean up
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  return (
    <section id="cv" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <ScrollAnimation type="fade" className="mb-12 text-center">
          <div className="inline-flex items-center justify-center">
            <div className="h-px w-8 bg-primary/50"></div>
            <h2 className="text-3xl font-bold px-4">Curriculum Vitae</h2>
            <div className="h-px w-8 bg-primary/50"></div>
          </div>
        </ScrollAnimation>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-card rounded-lg shadow-lg overflow-hidden border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-xl"
        >
          <div className="bg-gradient-to-r from-primary to-primary/70 p-6 text-primary-foreground">
            <ScrollAnimation type="slide" direction="down">
              <h2 className="text-3xl font-bold">Mohan Paudel</h2>
              <p className="text-xl opacity-90">Computer Engineering Student</p>
            </ScrollAnimation>
          </div>

          <div className="grid md:grid-cols-3 gap-6 p-6">
            {/* Left Column - Contact & Skills */}
            <div className="space-y-6">
              <ScrollAnimation type="slide" direction="left">
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary" /> Contact
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2 group">
                      <Phone className="h-4 w-4 mt-0.5 text-muted-foreground group-hover:text-primary transition-colors" />
                      <span>9748202957</span>
                    </li>
                    <li className="flex items-start gap-2 group">
                      <Mail className="h-4 w-4 mt-0.5 text-muted-foreground group-hover:text-primary transition-colors" />
                      <span>paudelmohan761@gmail.com</span>
                    </li>
                    <li className="flex items-start gap-2 group">
                      <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground group-hover:text-primary transition-colors" />
                      <span>Gaindakot, Nawalpur, Nepal</span>
                    </li>
                  </ul>
                </div>
              </ScrollAnimation>

              <ScrollAnimation type="slide" direction="left" delay={0.1}>
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Globe className="h-4 w-4 text-primary" /> Languages
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="group">
                      <div className="flex justify-between items-center mb-1">
                        <span className="group-hover:text-primary transition-colors">Nepali</span>
                        <span className="text-xs text-muted-foreground">Native</span>
                      </div>
                      <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-primary rounded-full"
                          initial={{ width: 0 }}
                          animate={inView ? { width: "100%" } : { width: 0 }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                      </div>
                    </li>
                    <li className="group">
                      <div className="flex justify-between items-center mb-1">
                        <span className="group-hover:text-primary transition-colors">English</span>
                        <span className="text-xs text-muted-foreground">Fluent</span>
                      </div>
                      <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-primary rounded-full"
                          initial={{ width: 0 }}
                          animate={inView ? { width: "85%" } : { width: 0 }}
                          transition={{ duration: 1, delay: 0.6 }}
                        />
                      </div>
                    </li>
                  </ul>
                </div>
              </ScrollAnimation>

              <ScrollAnimation type="slide" direction="left" delay={0.2}>
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Code className="h-4 w-4 text-primary" /> Computer Skills
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2 group">
                      <div className="h-2 w-2 rounded-full bg-primary group-hover:animate-pulse"></div>
                      <span className="group-hover:text-primary transition-colors">Web Designing</span>
                    </li>
                    <li className="flex items-center gap-2 group">
                      <div className="h-2 w-2 rounded-full bg-primary group-hover:animate-pulse"></div>
                      <span className="group-hover:text-primary transition-colors">Hosting</span>
                    </li>
                    <li className="flex items-center gap-2 group">
                      <div className="h-2 w-2 rounded-full bg-primary group-hover:animate-pulse"></div>
                      <span className="group-hover:text-primary transition-colors">Competitive Programming</span>
                    </li>
                  </ul>
                </div>
              </ScrollAnimation>

              <ScrollAnimation type="slide" direction="left" delay={0.3}>
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Trophy className="h-4 w-4 text-primary" /> Extracurricular Activities
                  </h3>
                  <p className="text-sm group-hover:text-primary transition-colors">Plays Cricket, Chess, etc.</p>
                </div>
              </ScrollAnimation>
            </div>

            {/* Right Column - Profile, Education */}
            <div className="md:col-span-2 space-y-6">
              <ScrollAnimation type="slide" direction="right">
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
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
                      className="mr-1 h-4 w-4 text-primary"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    Profile
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    I consider myself a responsible and orderly person. I am looking forward to my first work
                    experience. As a Computer Engineering student, I am passionate about technology and developing
                    practical solutions to real-world problems.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation type="slide" direction="right" delay={0.1}>
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
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
                      className="mr-1 h-4 w-4 text-primary"
                    >
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c3 3 9 3 12 0v-5" />
                    </svg>
                    Education
                  </h3>
                  <div className="space-y-4">
                    <div className="group">
                      <div className="flex justify-between">
                        <h4 className="font-medium group-hover:text-primary transition-colors">Pulchowk Engineering</h4>
                        <span className="text-xs text-muted-foreground">Present</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Computer Engineering (Running)</p>
                    </div>
                    <div className="group">
                      <div className="flex justify-between">
                        <h4 className="font-medium group-hover:text-primary transition-colors">Prerana College</h4>
                        <span className="text-xs text-muted-foreground">2022-2024</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Higher Secondary Education</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation type="slide" direction="right" delay={0.2}>
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
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
                      className="mr-1 h-4 w-4 text-primary"
                    >
                      <path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" />
                      <path d="m22 19-3-3-3 3" />
                      <path d="M19 16v7" />
                      <path d="M2 8h20" />
                      <path d="M2 12h8" />
                      <path d="M2 16h5" />
                    </svg>
                    Projects
                  </h3>
                  <div className="space-y-3">
                    <div className="group">
                      <h4 className="font-medium group-hover:text-primary transition-colors">Cricket Insight Nepal</h4>
                      <p className="text-sm text-muted-foreground">
                        A comprehensive cricket news and scores platform providing real-time updates and match
                        information.
                      </p>
                    </div>
                    <div className="group">
                      <h4 className="font-medium group-hover:text-primary transition-colors">Interactive Whiteboard</h4>
                      <p className="text-sm text-muted-foreground">
                        A collaborative digital canvas application for drawing and sharing ideas in real-time.
                      </p>
                    </div>
                    <div className="group">
                      <h4 className="font-medium group-hover:text-primary transition-colors">Calculator Application</h4>
                      <p className="text-sm text-muted-foreground">
                        A sleek, dark-themed calculator with support for basic arithmetic and percentage calculations.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>

          <div className="p-6 bg-muted/30 flex justify-center border-t border-border/50">
            <Button onClick={downloadCV} className="group">
              <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" /> Download CV
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
