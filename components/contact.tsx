"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { ScrollAnimation } from "@/components/ui/scroll-animation"
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react"

// Define form validation schema using Zod
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactFormValues = z.infer<typeof contactFormSchema>

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true)
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "",
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
          from_name: "Portfolio Contact Form",
        }),
      })

      const result = await response.json()

      if (result.success) {
        toast({
          title: "Message Sent Successfully! 🚀",
          description: `Thank you ${data.name}, your message has been delivered. Mohan will reach out to you soon.`,
        })
        reset()
      } else {
        throw new Error(result.message || "Submission failed")
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Oops! Something went wrong.",
        description: "Failed to send the message. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <ScrollAnimation type="fade" className="mb-12 text-center">
          <div className="inline-flex items-center justify-center">
            <div className="h-px w-8 bg-primary/50"></div>
            <h2 className="text-3xl font-bold px-4">Contact Me</h2>
            <div className="h-px w-8 bg-primary/50"></div>
          </div>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Have a question, want to collaborate, or just say hello? Drop a message below!
          </p>
        </ScrollAnimation>

        <div className="grid md:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Info Side */}
          <div className="md:col-span-2 space-y-6">
            <ScrollAnimation type="slide" direction="left">
              <div className="space-y-6">
                <div className="bg-card rounded-lg p-6 shadow-sm border border-border/50 hover:border-primary/20 transition-all duration-300">
                  <h3 className="font-semibold text-lg mb-4">Contact Information</h3>
                  
                  <div className="space-y-4">
                    <a 
                      href="mailto:paudelmohan761@gmail.com" 
                      className="flex items-start gap-4 group text-muted-foreground hover:text-primary transition-colors"
                    >
                      <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors mt-0.5">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-semibold">Email</p>
                        <p className="text-sm">paudelmohan761@gmail.com</p>
                      </div>
                    </a>

                    <a 
                      href="tel:+9779748202957" 
                      className="flex items-start gap-4 group text-muted-foreground hover:text-primary transition-colors"
                    >
                      <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors mt-0.5">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-semibold">Phone</p>
                        <p className="text-sm">+977 9748202957</p>
                      </div>
                    </a>

                    <div className="flex items-start gap-4 group text-muted-foreground">
                      <div className="bg-primary/10 p-3 rounded-lg mt-0.5">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-semibold">Location</p>
                        <p className="text-sm">Gaindakot, Nawalpur, Nepal</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary/5 to-primary/0 border border-border/50 rounded-lg p-6">
                  <h4 className="font-semibold mb-2">Open to Opportunities</h4>
                  <p className="text-sm text-muted-foreground">
                    As a computer engineering student, I am looking for internships or junior frontend/web developer roles. Feel free to connect!
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          {/* Form Side */}
          <div className="md:col-span-3">
            <ScrollAnimation type="slide" direction="right">
              <Card className="border border-border/50 hover:border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                  <CardDescription>Mohan will reply as soon as possible.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          Your Name
                        </label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          {...register("name")}
                          className={errors.name ? "border-destructive focus-visible:ring-destructive" : ""}
                        />
                        {errors.name && (
                          <p className="text-xs text-destructive font-medium">{errors.name.message}</p>
                        )}
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          {...register("email")}
                          className={errors.email ? "border-destructive focus-visible:ring-destructive" : ""}
                        />
                        {errors.email && (
                          <p className="text-xs text-destructive font-medium">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        placeholder="Collaboration / Project Opportunity"
                        {...register("subject")}
                        className={errors.subject ? "border-destructive focus-visible:ring-destructive" : ""}
                      />
                      {errors.subject && (
                        <p className="text-xs text-destructive font-medium">{errors.subject.message}</p>
                      )}
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        rows={5}
                        placeholder="Hi Mohan, I would love to discuss a project with you..."
                        {...register("message")}
                        className={errors.message ? "border-destructive focus-visible:ring-destructive" : ""}
                      />
                      {errors.message && (
                        <p className="text-xs text-destructive font-medium">{errors.message.message}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <Button type="submit" disabled={isSubmitting} className="w-full flex items-center justify-center gap-2 group">
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  )
}
