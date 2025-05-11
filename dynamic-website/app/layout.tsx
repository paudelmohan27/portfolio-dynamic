import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: "Mohan Paudel - Portfolio",
  description:
    "Personal portfolio of Mohan Paudel, a computer engineering student and web developer specializing in interactive web applications and responsive design.",
  keywords: [
    "web developer",
    "portfolio",
    "Mohan Paudel",
    "computer engineering",
    "frontend developer",
    "Nepal",
    "interactive web",
    "responsive design",
  ],
  authors: [{ name: "Mohan Paudel", url: "https://paudelmohan.com.np" }],
  creator: "Mohan Paudel",
  publisher: "Mohan Paudel",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://paudelmohan.com.np"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mohan Paudel - Portfolio",
    description: "Personal portfolio of Mohan Paudel, a computer engineering student and web developer from Nepal.",
    url: "https://paudelmohan.com.np",
    siteName: "Mohan Paudel Portfolio",
    images: [
      {
        url: "/mohan.png",
        width: 1000,
        height: 1000,
        alt: "Mohan Paudel",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohan Paudel - Portfolio",
    description: "Personal portfolio of Mohan Paudel, a computer engineering student and web developer from Nepal.",
    images: ["/mohan.png"],
    creator: "@mohanpaudel",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
