import type React from "react"
import Sidebar from "@/components/sidebar"
import News from "@/components/news"

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
        <div className="flex-1 bg-slate-200 p-6 rounded-lg shadow-sm max-w-full">{children}</div>
        <div className="w-full md:w-[280px]">
          <News />
        </div>
      </section>
    </main>
  )
}