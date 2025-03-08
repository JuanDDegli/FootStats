import type React from "react"
import Sidebar from "@/components/sidebar"
import News from "@/components/news"

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="flex flex-col md:flex-row md:py-2 px-2 md:px-16 md:mt-6 max-w-full">
      <section className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 w-full">
        <Sidebar />
        {/* Ajuste o conteúdo para ocupar o espaço restante */}
        <div className="flex-1 max-w-full">{children}</div> {/* Conteúdo principal */}
        <div className="w-[280px]">
          <News />
        </div>
      </section>
    </main>
  )
}
