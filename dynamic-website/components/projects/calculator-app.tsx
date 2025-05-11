"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Code, Lightbulb, Layers, Calculator, Percent, History, Github, ExternalLink } from "lucide-react"

export default function CalculatorApp() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-6">
        <img
          src="/calculator-app-thumbnail.png"
          alt="Dark themed Calculator Application"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="p-6 text-white">
            <h2 className="text-2xl font-bold">Calculator</h2>
            <p className="text-sm opacity-90">Interactive Mathematical Tool</p>
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
                The Calculator is a web-based application that provides a clean, intuitive interface for performing
                mathematical operations. It supports basic arithmetic, percentage calculations, and memory functions,
                making it suitable for everyday calculations.
              </p>
              <p className="text-muted-foreground mt-4">
                This project demonstrates my ability to create functional web applications with JavaScript. The
                calculator features a responsive design that works across different devices and screen sizes, with a
                focus on usability and accuracy in calculations.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-2">
                  <Calculator className="h-5 w-5 text-primary" />
                  <h3 className="font-medium">Mathematical Operations</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Supports addition, subtraction, multiplication, division, percentage calculations, and memory
                  functions. The calculator maintains a history of calculations for reference.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-2">
                  <History className="h-5 w-5 text-primary" />
                  <h3 className="font-medium">Calculation History</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Keeps track of previous calculations, allowing users to review and reuse past results. The history
                  feature helps users maintain context during complex calculation sequences.
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
                    <Calculator className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-medium">Complete Arithmetic Operations</span>
                      <p className="text-sm text-muted-foreground">
                        Addition, subtraction, multiplication, division with proper order of operations handling
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Percent className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-medium">Percentage Calculations</span>
                      <p className="text-sm text-muted-foreground">
                        Calculate percentages, tax amounts, discounts, and other common percentage-based operations
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <History className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-medium">Calculation History</span>
                      <p className="text-sm text-muted-foreground">
                        View and recall previous calculations to track your work or reuse results
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Layers className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-medium">Responsive Design</span>
                      <p className="text-sm text-muted-foreground">
                        Works seamlessly across desktop and mobile devices with an optimized interface for each
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-6 flex justify-center gap-4">
                <Button asChild>
                  <a href="https://whiteboard.paudelmohan.com.np/Calculator/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Try Calculator
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://github.com/hackermohan12/Calculator" target="_blank" rel="noopener noreferrer">
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
                  <div className="bg-muted/50 rounded-md p-2 text-center">DOM Manipulation</div>
                  <div className="bg-muted/50 rounded-md p-2 text-center">Event Handling</div>
                  <div className="bg-muted/50 rounded-md p-2 text-center">Responsive Design</div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-primary" /> Challenges & Solutions
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium">Challenge: Calculation Logic</h4>
                    <p className="text-sm text-muted-foreground">
                      Implementing proper order of operations and handling edge cases like division by zero or multiple
                      decimal points.
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      <span className="font-medium">Solution:</span> Developed a structured evaluation algorithm that
                      validates input and follows mathematical precedence rules, with comprehensive error handling for
                      invalid operations.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">Challenge: User Interface Design</h4>
                    <p className="text-sm text-muted-foreground">
                      Creating an intuitive, accessible interface that works well on both desktop and mobile devices.
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      <span className="font-medium">Solution:</span> Implemented a responsive design with appropriately
                      sized buttons for touch interfaces, clear visual feedback for operations, and a layout that adapts
                      to different screen sizes.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                  <Layers className="h-5 w-5 text-primary" /> Learning Outcomes
                </h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Improved JavaScript skills, particularly with event handling and mathematical operations</li>
                  <li>• Gained experience in creating responsive user interfaces for different devices</li>
                  <li>• Learned techniques for implementing proper calculation logic and error handling</li>
                  <li>• Enhanced understanding of user experience design for utility applications</li>
                  <li>• Developed better approaches to testing and validating mathematical operations</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
