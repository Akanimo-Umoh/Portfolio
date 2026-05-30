import type { Metadata } from "next"
import { Playfair_Display, DM_Mono, DM_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const fontSerif = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-serif",
})

const fontMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-mono",
})

const fontSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Akanimo Umoh | Frontend Developer",
  description:
    "Frontend developer building fast, accessible, and obsessively refined interfaces. Based in Abuja, Nigeria.",
  openGraph: {
    title: "Akanimo Umoh | Frontend Developer",
    description:
      "Frontend developer building fast, accessible, and obsessively refined interfaces.",
    url: "https://akanimo-umoh.vercel.app",
    siteName: "Akanimo Umoh",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akanimo Umoh | Frontend Developer",
    description:
      "Frontend developer building fast, accessible, and obsessively refined interfaces.",
    creator: "@umoh____",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fontSerif.variable} ${fontMono.variable} ${fontSans.variable} font-sans antialiased`}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
