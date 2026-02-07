"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Clock, Calendar, ThumbsUp, Code, Lightbulb, Layers, Github, ExternalLink } from "lucide-react"

export default function CricketInsight() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-6">
        <img
          src="/cricket-insight-thumbnail.png"
          alt="Cricket Insight Nepal Website"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="p-6 text-white">
            <h2 className="text-2xl font-bold">Cricket Insight Nepal</h2>
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
                Cricket Insight Nepal is a comprehensive cricket news and scores platform focused on providing updates,
                match schedules, and information for cricket fans in Nepal and beyond. The website serves as a
                destination for cricket-related content, with coverage of IPL and other tournaments.
              </p>
              <p className="text-muted-foreground mt-4">
                As my first major web project, Cricket Insight Nepal demonstrates my ability to create a content-rich
                website that serves a specific audience. The site features responsive design principles to ensure a
                great experience across all devices, from mobile phones to desktop computers.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <h3 className="font-medium">Live Updates</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Real-time cricket scores and match updates for fans, with ball-by-ball commentary for important
                  matches and tournaments. The live updates section is one of the most visited areas of the site.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <h3 className="font-medium">Match Schedules</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Comprehensive calendar of upcoming matches with venue information, start times, and team lineups when
                  available. Users can filter matches by tournament, team, or date range.
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
                        Real-time cricket scores with automatic refreshing
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <ThumbsUp className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-medium">IPL section with team information</span>
                      <p className="text-sm text-muted-foreground">
                        Dedicated pages for each IPL team with player profiles, team statistics, and match history
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <ThumbsUp className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-medium">Blog section with cricket news</span>
                      <p className="text-sm text-muted-foreground">
                        Regular articles covering match previews, reviews, player interviews, and cricket analysis
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <ThumbsUp className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-medium">Mobile-responsive design</span>
                      <p className="text-sm text-muted-foreground">
                        Optimized viewing experience across all devices with a mobile-first approach
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-6 flex justify-center gap-4">
                <Button asChild>
                  <a href="https://mohanpaudel761.com.np" target="_blank" rel="noopener noreferrer">
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
                  <div className="bg-muted/50 rounded-md p-2 text-center">Responsive Design</div>
                  <div className="bg-muted/50 rounded-md p-2 text-center">API Integration</div>
                  <div className="bg-muted/50 rounded-md p-2 text-center">Content Management</div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-primary" /> Challenges & Solutions
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium">Challenge: Data Management</h4>
                    <p className="text-sm text-muted-foreground">
                      Managing and updating large amounts of cricket data, including scores, player stats, and match
                      schedules.
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      <span className="font-medium">Solution:</span> Implemented a structured data management system
                      with automated updates for live scores and a user-friendly admin interface for content management.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">Challenge: Mobile Responsiveness</h4>
                    <p className="text-sm text-muted-foreground">
                      Creating a consistent experience across various screen sizes while maintaining data-rich tables
                      and statistics.
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      <span className="font-medium">Solution:</span> Adopted a mobile-first approach with responsive
                      tables, collapsible sections, and optimized images for different screen sizes.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                  <Layers className="h-5 w-5 text-primary" /> Learning Outcomes
                </h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Gained experience in creating and maintaining a content-heavy website</li>
                  <li>• Improved skills in responsive design and cross-browser compatibility</li>
                  <li>• Learned about API integration for live data</li>
                  <li>• Developed a better understanding of user experience design</li>
                  <li>• Enhanced problem-solving skills through addressing real-world challenges</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
