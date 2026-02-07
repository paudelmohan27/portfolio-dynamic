"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Code, Lightbulb, Layers, Pencil, Type, Share2, Users, Github, ExternalLink } from "lucide-react"

export default function WhiteboardApp() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-6">
        <img
          src="/whiteboard-thumbnail.png"
          alt="Interactive Whiteboard Application with drawing tools"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="p-6 text-white">
            <h2 className="text-2xl font-bold">Interactive Whiteboard</h2>
            <p className="text-sm opacity-90">Collaborative Digital Canvas</p>
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
                The Interactive Whiteboard is a digital canvas application that enables users to draw, write, and
                collaborate in real-time. It's designed to facilitate online teaching, remote brainstorming sessions,
                and creative collaboration regardless of physical location.
              </p>
              <p className="text-muted-foreground mt-4">
                This project demonstrates my ability to work with interactive web technologies like the Canvas API and
                implement real-time functionality. The whiteboard supports multiple drawing tools, text insertion, and
                sharing capabilities to enhance collaborative experiences.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-2">
                  <Pencil className="h-5 w-5 text-primary" />
                  <h3 className="font-medium">Drawing Tools</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Multiple pen types, colors, and thicknesses for versatile drawing and diagramming. Includes freehand
                  drawing, straight lines, shapes, and highlighter tools.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-2">
                  <Share2 className="h-5 w-5 text-primary" />
                  <h3 className="font-medium">Sharing Capabilities</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Export drawings as images, share via link, and collaborate in real-time with multiple users on the
                  same canvas. Includes session management and permission controls.
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
                    <Pencil className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-medium">Advanced Drawing Tools</span>
                      <p className="text-sm text-muted-foreground">
                        Multiple pen types, erasers, shapes, and color options with pressure sensitivity support
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Type className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-medium">Text and Typography</span>
                      <p className="text-sm text-muted-foreground">
                        Add text boxes with formatting options, font selection, and resizable text elements
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-medium">Real-time Collaboration</span>
                      <p className="text-sm text-muted-foreground">
                        Multiple users can draw on the same canvas simultaneously with cursor position tracking
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Share2 className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-medium">Export and Sharing</span>
                      <p className="text-sm text-muted-foreground">
                        Save as PNG/JPG, generate shareable links, and embed options for websites
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-6 flex justify-center gap-4">
                <Button asChild>
                  <a href="https://whiteboard.paudelmohan.com.np" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Try Whiteboard
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a
                    href="https://github.com/hackermohan12/hackermohan12.github.io"
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
                  <div className="bg-muted/50 rounded-md p-2 text-center">HTML5 Canvas</div>
                  <div className="bg-muted/50 rounded-md p-2 text-center">JavaScript</div>
                  <div className="bg-muted/50 rounded-md p-2 text-center">CSS3</div>
                  <div className="bg-muted/50 rounded-md p-2 text-center">WebSockets</div>
                  <div className="bg-muted/50 rounded-md p-2 text-center">Responsive Design</div>
                  <div className="bg-muted/50 rounded-md p-2 text-center">LocalStorage</div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-primary" /> Challenges & Solutions
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium">Challenge: Drawing Performance</h4>
                    <p className="text-sm text-muted-foreground">
                      Ensuring smooth drawing experience even with complex strokes and multiple users.
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      <span className="font-medium">Solution:</span> Implemented canvas optimization techniques like
                      path batching, requestAnimationFrame for rendering, and efficient event handling to maintain high
                      performance.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">Challenge: Real-time Synchronization</h4>
                    <p className="text-sm text-muted-foreground">
                      Keeping multiple users' canvases in sync without conflicts or performance issues.
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      <span className="font-medium">Solution:</span> Developed an efficient data transfer protocol that
                      only sends stroke data instead of entire canvas states, reducing bandwidth and improving
                      responsiveness.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                  <Layers className="h-5 w-5 text-primary" /> Learning Outcomes
                </h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Gained deep understanding of HTML5 Canvas API and its optimization techniques</li>
                  <li>• Learned about real-time data synchronization between multiple clients</li>
                  <li>• Improved skills in event handling for mouse and touch interactions</li>
                  <li>• Developed techniques for managing complex user interfaces with multiple tools</li>
                  <li>• Enhanced knowledge of collaborative web application architecture</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
