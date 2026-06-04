"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Code, Lightbulb, Layers, Github, ExternalLink, Timer, CheckSquare, BarChart, Calendar } from "lucide-react"

export default function StudyTracker() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-6">
        <img
          src="/study-tracker-thumbnail.png"
          alt="Study Tracker Application Dashboard"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="p-6 text-white">
            <h2 className="text-2xl font-bold">Study Tracker</h2>
            <p className="text-sm opacity-90">Organize, Track, and Optimize Your Learning</p>
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
                Study Tracker is a complete web application designed to help students, developers, and learners manage
                their study sessions, track study time, organize courses, and monitor progress over time.
              </p>
              <p className="text-muted-foreground mt-4">
                This project focuses on providing an elegant dashboard that displays time spent studying, current tasks,
                and calendar scheduling, empowering users to optimize their study habits with clean, actionable data.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-2">
                  <Timer className="h-5 w-5 text-primary" />
                  <h3 className="font-medium">Pomodoro & Session Timer</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Includes integrated timers to structure study sessions (including Pomodoro techniques) and record study times accurately.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-2">
                  <BarChart className="h-5 w-5 text-primary" />
                  <h3 className="font-medium">Progress Analytics</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Displays intuitive visual statistics and charts outlining daily, weekly, and subject-level study time progress.
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
                    <Timer className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-medium">Study Session Timers</span>
                      <p className="text-sm text-muted-foreground">
                        Pomodoro and stopwatch timers to easily log study hours for each subject
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-medium">Task Management (To-Do)</span>
                      <p className="text-sm text-muted-foreground">
                        Keep track of assignments, reading lists, and topics with priority levels and checklists
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Calendar className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-medium">Subject Calendars</span>
                      <p className="text-sm text-muted-foreground">
                        Schedule upcoming tests, revision sessions, and homework deadlines efficiently
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <BarChart className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-medium">Interactive Charts</span>
                      <p className="text-sm text-muted-foreground">
                        Visualize subject distribution and study trends to identify areas needing more attention
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-6 flex justify-center gap-4">
                <Button asChild>
                  <a href="https://tracker.paudelmohan.com.np/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Try Study Tracker
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://github.com/paudelmohan27/StudyTracker" target="_blank" rel="noopener noreferrer">
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
                  <div className="bg-muted/50 rounded-md p-2 text-center">React.js</div>
                  <div className="bg-muted/50 rounded-md p-2 text-center">CSS3 / Tailwind</div>
                  <div className="bg-muted/50 rounded-md p-2 text-center">JavaScript (ES6+)</div>
                  <div className="bg-muted/50 rounded-md p-2 text-center">Charts / Recharts</div>
                  <div className="bg-muted/50 rounded-md p-2 text-center">LocalStorage API</div>
                  <div className="bg-muted/50 rounded-md p-2 text-center">Responsive Design</div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-primary" /> Key Details
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium">Challenge: State Management & Persistence</h4>
                    <p className="text-sm text-muted-foreground">
                      Keeping logs, timer statistics, and schedules persistent across sessions so users don't lose data.
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      <span className="font-medium">Approach:</span> Designed a robust LocalStorage schema syncing state hook in React to automatically back up and restore progress.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">Challenge: Real-time Timer Sync</h4>
                    <p className="text-sm text-muted-foreground">
                      Handling background timer logic to avoid throttling issues when switching browser tabs.
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      <span className="font-medium">Approach:</span> Calibrated timer durations against actual system timestamps (`Date.now()`) rather than counting raw intervals, assuring accuracy.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
