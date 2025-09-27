// src/app/(main)/layout.tsx

import type React from "react"
import Sidebar from "@/components/sidebar"

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="flex flex-col bg-white md:flex-row md:py-2 px-2 md:px-16 md:mt-6 max-w-full">
      <section className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 w-full">
        <div className="hidden md:block">
          <Sidebar />
        </div>
        <div className="flex-1 min-w-0">{children}</div>
      </section>
    </main>
  )
}