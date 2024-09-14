import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import Header from "./header"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "MZ Smart",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray`}>
        <Header />
        <main className="w-full p-10">
          {children}
        </main>
      </body>
    </html>
  )
}
