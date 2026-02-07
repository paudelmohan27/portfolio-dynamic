"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Code, Lightbulb, Layers, HelpCircle, Timer, BarChart, BookOpen, Github, ExternalLink } from "lucide-react"

export default function QuizApp() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-6">
        <img
          src="/quiz-thumbnail.png"
          alt="Educational Resources Quiz Application"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="p-6 text-white">
            <h2 className="text-2xl font-bold">Quiz Application</h2>
            <p className="text-sm opacity-90">Interactive Learning Platform</p>
          </div>
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="features">Features</TabsTrigger>
          <TabsTrigger value="development">Development</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <p className="text-muted-foreground">
                The Quiz Application is an interactive learning platform that offers quizzes across multiple categories
                and difficulty levels. It's designed to make learning engaging through gamification elements, progress
                tracking, and immediate feedback on answers.
              </p>
              <p className="text-muted-foreground mt-4">
                This project demonstrates my ability to create interactive web applications with complex state
                management and user engagement features. The quiz app includes timed questions, score tracking, and
                detailed result analysis to enhance the learning experience.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-2">
                  <HelpCircle className="h-5 w-5 text-primary" />
                  <h3 className="font-medium">Multiple Question Types</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Supports various question formats including multiple choice, true/false, and fill-in-the-blank.
                  Questions are organized by categories and difficulty levels.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-2">
                  <BarChart className="h-5 w-5 text-primary" />
                  <h3 className="font-medium">Performance Analytics</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Detailed performance tracking with statistics on accuracy, time spent, and improvement over time.
                  Visualizes strengths and areas for improvement.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="features">
          <Card>
            <CardContent className="pt-6 space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Key Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <BookOpen className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-medium">Diverse Question Library</span>
                      <p className="text-sm text-muted-foreground">
                        Hundreds of questions across multiple categories including science, history, programming, and
                        general knowledge
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Timer className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-medium">Timed Quizzes</span>
                      <p className="text-sm text-muted-foreground">
                        Configurable time limits for questions with visual countdown and automatic progression
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <BarChart className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-medium">Detailed Analytics</span>
                      <p className="text-sm text-muted-foreground">
                        Performance tracking with visual charts showing progress, accuracy, and improvement areas
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Layers className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-medium">Difficulty Progression</span>
                      <p className="text-sm text-muted-foreground">
                        Adaptive difficulty that adjusts based on user performance to provide appropriate challenge
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-6 flex justify-center gap-4">
                <Button asChild>
                  <a href="https://quiz.paudelmohan.com.np" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Try Quiz App
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a
                    href="https://github.com/hackermohan12/educational-resources"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" /> View Code
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="development">
          <Card>
            <CardContent className="pt-6 space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                  <Code className="h-5 w-5 text-primary" /> Technologies Used
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-3">
                  <div className="bg-muted/50 rounded-md p-2 text-center">HTML5</div>
                  <div className="bg-muted/50 rounded-md p-2 text-center">CSS3</div>
                  <div className="bg-muted/50 rounded-md p-2 text-center">JavaScript</div>
                  <div className="bg-muted/50 rounded-md p-2 text-center">API Integration</div>
                  <div className="bg-muted/50 rounded-md p-2 text-center">LocalStorage</div>
                  <div className="bg-muted/50 rounded-md p-2 text-center">Chart.js</div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-primary" /> Challenges & Solutions
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium">Challenge: Question Management</h4>
                    <p className="text-sm text-muted-foreground">
                      Creating a system to handle different question types, difficulty levels, and categories
                      efficiently.
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      <span className="font-medium">Solution:</span> Developed a modular question architecture with
                      standardized formats and metadata that allows for easy addition of new question types and
                      categories.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">Challenge: User Progress Tracking</h4>
                    <p className="text-sm text-muted-foreground">
                      Implementing a reliable system to track user progress and performance across multiple quiz
                      sessions.
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      <span className="font-medium">Solution:</span> Created a persistent storage system using
                      LocalStorage with data compression techniques to store user progress efficiently, enabling
                      detailed analytics without requiring user accounts.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                  <Layers className="h-5 w-5 text-primary" /> Learning Outcomes
                </h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Improved skills in state management for complex user interactions</li>
                  <li>• Learned techniques for creating engaging educational content</li>
                  <li>• Gained experience in implementing timing mechanisms and progress tracking</li>
                  <li>• Developed methods for data visualization and performance analytics</li>
                  <li>• Enhanced understanding of user experience design for learning applications</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
