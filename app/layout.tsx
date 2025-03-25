import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Burger Business | Delicious Gourmet Burgers",
  description:
    "Enjoy premium gourmet burgers made with fresh ingredients. Order online for delivery or pickup. Special promotions and cashback offers available.",
  keywords: ["burger", "gourmet burger", "food delivery", "restaurant", "fast food", "burger delivery"],
  authors: [{ name: "Burger Business" }],
  creator: "Burger Business",
  publisher: "Burger Business",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  metadataBase: new URL("https://www.example.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.example.com",
    title: "Burger Business | Delicious Gourmet Burgers",
    description: "Enjoy premium gourmet burgers made with fresh ingredients. Order online for delivery or pickup.",
    siteName: "Burger Business",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Burger Business - Delicious Gourmet Burgers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Burger Business | Delicious Gourmet Burgers",
    description: "Enjoy premium gourmet burgers made with fresh ingredients. Order online for delivery or pickup.",
    images: ["/twitter-image.jpg"],
    creator: "@burgerbusiness",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  category: "food",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="container mx-auto max-w-7xl px-4">
            <Navigation />
            {children}
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'