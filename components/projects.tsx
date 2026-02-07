"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import CricketInsight from "@/components/projects/cricket-insight"
import WhiteboardApp from "@/components/projects/whiteboard-app"
import CalculatorApp from "@/components/projects/calculator-app"
import QuizApp from "@/components/projects/quiz-app"
import IdCardGenerator from "@/components/projects/id-card-generator"
import { ScrollAnimation } from "@/components/ui/scroll-animation"

// Project data
const projectsData = [
  {
    id: 1,
    title: "Cricket Insight Nepal",
    description:
      "A comprehensive cricket news and scores platform focused on providing real-time updates, match schedules, and in-depth information for cricket enthusiasts in Nepal and beyond.",
    image: "/cricket-insight-thumbnail.png",
    tags: ["Web", "HTML", "CSS", "JavaScript", "Responsive Design"],
    liveUrl: "https://mohanpaudel761.com.np",
    githubUrl: "https://github.com/hackermohan12/ipl-project-",
    category: "web",
    component: <CricketInsight />,
  },
  {
    id: 2,
    title: "Interactive Whiteboard",
    description:
      "A collaborative digital whiteboard application that allows users to draw, add text, and share ideas in real-time. Perfect for online teaching, brainstorming sessions, and remote collaboration.",
    image: "/whiteboard-thumbnail.png",
    tags: ["Web", "JavaScript", "Canvas API", "Drawing Tools"],
    liveUrl: "https://whiteboard.paudelmohan.com.np",
    githubUrl: "https://github.com/hackermohan12/hackermohan12.github.io",
    category: "web",
    component: <WhiteboardApp />,
  },
  {
    id: 3,
    title: "Calculator",
    description:
      "A sleek, dark-themed calculator application with a clean interface that supports basic arithmetic operations, percentage calculations, and memory functions for everyday calculations.",
    image: "/calculator-app-thumbnail.png",
    tags: ["Web", "JavaScript", "HTML", "CSS", "Math Operations"],
    liveUrl: "https://whiteboard.paudelmohan.com.np/Calculator/",
    githubUrl: "https://github.com/hackermohan12/Calculator",
    category: "web",
    component: <CalculatorApp />,
  },
  {
    id: 4,
    title: "Educational Resources",
    description:
      "An interactive educational platform with a collection of learning resources and tools for students. Features a clean, modern interface with easy navigation and categorized content.",
    image: "/quiz-thumbnail.png",
    tags: ["Web", "JavaScript", "HTML", "CSS", "Educational Content"],
    liveUrl: "https://quiz.paudelmohan.com.np",
    githubUrl: "https://github.com/hackermohan12/educational-resources",
    category: "web",
    component: <QuizApp />,
  },
  {
    id: 5,
    title: "ID Card Generator",
    description:
      "A fast, clean ID card generator that turns user details into consistent, printable ID card layouts with a focused, simple workflow.",
    image: "/idcardthumbnail.jpg",
    tags: ["Web", "JavaScript", "UI", "Responsive Design"],
    liveUrl: "https://idcard.paudelmohan.com.np",
    githubUrl: "https://github.com/paudelmohan27/idcardv2",
    category: "web",
    component: <IdCardGenerator />,
  },
]

const categories = [
  { id: "all", name: "All" },
  { id: "web", name: "Web" },
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [activeProject, setActiveProject] = useState<number | null>(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const filteredProjects =
    activeCategory === "all" ? projectsData : projectsData.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <ScrollAnimation type="fade" className="mb-4">
            <div className="inline-flex items-center justify-center">
              <div className="h-px w-8 bg-primary/50"></div>
              <h2 className="text-3xl font-bold px-4">My Projects</h2>
              <div className="h-px w-8 bg-primary/50"></div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation type="slide" direction="up">
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here are some of the projects I've been working on as I learn web development. Each project represents a
              step in my learning journey and showcases different skills I've acquired along the way.
            </p>
          </ScrollAnimation>

          <ScrollAnimation type="fade" delay={0.3} className="mt-8">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  onClick={() => setActiveCategory(category.id)}
                  className="m-1 transition-all duration-300"
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </ScrollAnimation>
        </motion.div>

        <AnimatePresence mode="wait">
          {activeProject !== null ? (
            <motion.div
              key="project-detail"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto mb-8"
            >
              <Button variant="outline" onClick={() => setActiveProject(null)} className="mb-6 group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
                Back to Projects
              </Button>

              {projectsData.find((p) => p.id === activeProject)?.component}
            </motion.div>
          ) : (
            <motion.div
              key="project-grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project, index) => (
                <ScrollAnimation key={project.id} type="scale" delay={index * 0.1} className="flex">
                  <Card className="overflow-hidden flex flex-col h-full border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg group">
                    <div
                      className="relative overflow-hidden aspect-video cursor-pointer"
                      onClick={() => setActiveProject(project.id)}
                    >
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 text-white">
                          <h3 className="text-lg font-bold">{project.title}</h3>
                        </div>
                      </div>
                    </div>

                    <CardContent className="flex-grow p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tags.map((tag, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="font-normal bg-primary/10 hover:bg-primary/20"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <h3
                        className="text-xl font-bold mb-2 cursor-pointer group-hover:text-primary transition-colors"
                        onClick={() => setActiveProject(project.id)}
                      >
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground">{project.description}</p>
                    </CardContent>

                    <CardFooter className="p-6 pt-0 flex gap-2">
                      <Button variant="outline" size="sm" asChild className="group">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4 group-hover:animate-spin" /> Code
                        </a>
                      </Button>
                      <Button size="sm" asChild className="group">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />{" "}
                          Live Demo
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </ScrollAnimation>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
