import type React from "react"
import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import "./globals.css"

export const metadata: Metadata = {
  title: "FootStats - Football Match Information",
  description: "Get the latest football match information across different leagues",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-[#ffffff] text-textPrimary">
        <Navbar />
        {children}
        <footer className="w-full text-center py-4 bg-gray-100 text-gray-600 mt-8">
          Design by{" "}
          <span
            className="font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
                    bg-clip-text text-transparent animate-gradient-move"
          >
            Juan Degli
          </span>
        </footer>
      </body>
    </html>
  )
}

