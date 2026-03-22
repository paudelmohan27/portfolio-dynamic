"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Clock, Calendar, ThumbsUp, Code, Lightbulb, Layers, Github, ExternalLink } from "lucide-react"

export default function CricVerse() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-6">
        <img
          src="/cricket-insight-thumbnail.png"
          alt="CricVerse Website"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="p-6 text-white">
            <h2 className="text-2xl font-bold">CricVerse</h2>
            <p className="text-sm opacity-90">Your Ultimate Cricket Destination</p>
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
                CricVerse is a feature-rich cricket platform delivering live scores, ICC rankings, match schedules, and
                real-time updates for cricket fans in Nepal and around the world. The site integrates the Cricbuzz
                RapidAPI to serve fresh, accurate data across all major tournaments and series.
              </p>
              <p className="text-muted-foreground mt-4">
                Built with vanilla HTML, CSS, and JavaScript, CricVerse showcases my ability to architect a
                data-driven, responsive website from scratch — including API key security via GitHub Actions secrets,
                smart polling strategies to stay within free-tier limits, and a clean UI optimized for all devices.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <h3 className="font-medium">Live Scores</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Real-time cricket scores powered by the Cricbuzz RapidAPI, with auto-refresh logic tuned to minimize
                  API calls while keeping scores current for fans following live matches.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <h3 className="font-medium">ICC Rankings & Schedules</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Up-to-date ICC rankings for all formats alongside a comprehensive match schedule, helping fans track
                  upcoming fixtures across international and domestic tournaments.
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
                    <ThumbsUp className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-medium">Live score updates</span>
                      <p className="text-sm text-muted-foreground">
                        Real-time cricket scores via Cricbuzz RapidAPI with optimized auto-refresh
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <ThumbsUp className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-medium">ICC rankings</span>
                      <p className="text-sm text-muted-foreground">
                        Current Test, ODI, and T20I rankings for teams and players pulled directly from the API
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <ThumbsUp className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-medium">Match schedules</span>
                      <p className="text-sm text-muted-foreground">
                        Upcoming fixtures with venue, date, and team information across all major tournaments
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <ThumbsUp className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-medium">Mobile-responsive design</span>
                      <p className="text-sm text-muted-foreground">
                        Fully responsive layout optimized for all screen sizes with a mobile-first approach
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-6 flex justify-center gap-4">
                <Button asChild>
                  <a href="https://mohanpaudel761.com.np/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Visit Live Site
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://github.com/hackermohan12/ipl-project-" target="_blank" rel="noopener noreferrer">
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
                  <div className="bg-muted/50 rounded-md p-2 text-center">Cricbuzz RapidAPI</div>
                  <div className="bg-muted/50 rounded-md p-2 text-center">GitHub Actions</div>
                  <div className="bg-muted/50 rounded-md p-2 text-center">Responsive Design</div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-primary" /> Challenges & Solutions
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium">Challenge: API Key Security</h4>
                    <p className="text-sm text-muted-foreground">
                      Keeping the Cricbuzz RapidAPI key safe in a client-side project without exposing it in the
                      repository.
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      <span className="font-medium">Solution:</span> Secured the API key using GitHub Actions secrets,
                      injecting it at build/deploy time so it never appears in the source code.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">Challenge: Free-Tier API Limits</h4>
                    <p className="text-sm text-muted-foreground">
                      Staying within the monthly request quota of the free RapidAPI tier while still delivering timely
                      score updates.
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      <span className="font-medium">Solution:</span> Implemented smart polling with longer intervals
                      during non-live periods and faster refresh only when a live match is detected, significantly
                      reducing unnecessary API calls.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                  <Layers className="h-5 w-5 text-primary" /> Learning Outcomes
                </h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Gained hands-on experience integrating and migrating between third-party APIs</li>
                  <li>• Learned to secure sensitive credentials using CI/CD secrets</li>
                  <li>• Improved skills in responsive design and performance optimization</li>
                  <li>• Developed strategies for managing API rate limits in production</li>
                  <li>• Strengthened understanding of real-time data handling in vanilla JavaScript</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
