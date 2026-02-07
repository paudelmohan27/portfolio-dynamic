"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Code, Lightbulb, Layers, Github, ExternalLink, BookOpen, Timer, BarChart } from "lucide-react"

export default function IdCardGenerator() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-6">
        <img src="/idcardthumbnail.jpg" alt="ID Card Generator" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="p-6 text-white">
            <h2 className="text-2xl font-bold">ID Card Generator</h2>
            <p className="text-sm opacity-90">Create clean, consistent ID cards fast</p>
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
                ID Card Generator is a web app for producing consistent ID cards from user-provided details. It focuses
                on speed, clarity, and a clean layout so IDs look professional without extra manual formatting.
              </p>
              <p className="text-muted-foreground mt-4">
                This project showcases my ability to build practical tools with a focused user flow, from input to a
                ready-to-use card design.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <h3 className="font-medium">Structured Input</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  A clear form-based workflow makes it easy to enter details and keep card data organized.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-2">
                  <BarChart className="h-5 w-5 text-primary" />
                  <h3 className="font-medium">Consistent Output</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Produces consistent layouts so cards look uniform and ready for sharing or printing.
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
                      <span className="font-medium">Fast Card Creation</span>
                      <p className="text-sm text-muted-foreground">
                        A streamlined flow for building ID cards quickly from user inputs.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Layers className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-medium">Clean Layout</span>
                      <p className="text-sm text-muted-foreground">
                        Focused visual hierarchy that keeps essential information readable and prominent.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <BookOpen className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-medium">Practical Output</span>
                      <p className="text-sm text-muted-foreground">
                        Cards are formatted for easy sharing or printing with minimal manual tweaks.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-6 flex justify-center gap-4">
                <Button asChild>
                  <a href="https://idcard.paudelmohan.com.np" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://github.com/paudelmohan27/idcardv2" target="_blank" rel="noopener noreferrer">
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
                  <Code className="h-5 w-5 text-primary" /> Focus Areas
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-3">
                  <div className="bg-muted/50 rounded-md p-2 text-center">UI Layout</div>
                  <div className="bg-muted/50 rounded-md p-2 text-center">Form UX</div>
                  <div className="bg-muted/50 rounded-md p-2 text-center">Consistency</div>
                  <div className="bg-muted/50 rounded-md p-2 text-center">Responsive Design</div>
                  <div className="bg-muted/50 rounded-md p-2 text-center">Accessibility</div>
                  <div className="bg-muted/50 rounded-md p-2 text-center">Deployment</div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-primary" /> Highlights
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium">Challenge: Keeping layouts consistent</h4>
                    <p className="text-sm text-muted-foreground">
                      Ensuring that each card maintains a clean, readable structure regardless of input length.
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      <span className="font-medium">Approach:</span> Designed a flexible layout that preserves spacing,
                      typography, and alignment across cards.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">Challenge: Streamlining the input flow</h4>
                    <p className="text-sm text-muted-foreground">
                      Reducing friction so users can create cards quickly without confusion.
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      <span className="font-medium">Approach:</span> Organized fields logically and kept actions clear
                      and focused on card generation.
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
