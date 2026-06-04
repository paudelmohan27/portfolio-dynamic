import type { Metadata } from "next"
import type { ReactNode } from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "Mohan Paudel - Portfolio",
  description:
    "Personal portfolio of Mohan Paudel, a computer engineering student and web developer specializing in interactive web applications and responsive design.",

  keywords: [
    "Mohan Paudel",
    "web developer",
    "frontend developer",
    "computer engineering",
    "portfolio",
    "Nepal",
    "interactive web",
    "responsive design",
  ],

  authors: [{ name: "Mohan Paudel", url: "https://paudelmohan.com.np" }],
  creator: "Mohan Paudel",
  publisher: "Mohan Paudel",

  metadataBase: new URL("https://paudelmohan.com.np"),

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  openGraph: {
    title: "Mohan Paudel - Portfolio",
    description:
      "Personal portfolio of Mohan Paudel, a computer engineering student and web developer from Nepal.",
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
    description:
      "Personal portfolio of Mohan Paudel, a computer engineering student and web developer from Nepal.",
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

  generator: "v0.dev",
}

export const viewport = {
  themeColor: "#3b82f6",
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google AdSense (non-metadata, must stay here) */}
        <meta
          name="google-adsense-account"
          content="ca-pub-3883388900627889"
        />
      </head>
      <body className={`${inter.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
