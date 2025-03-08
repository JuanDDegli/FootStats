import type React from "react"
import Sidebar from "@/components/sidebar"
import News from "@/components/news"

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="flex flex-col md:flex-row md:py-2 px-2 md:px-16 md:mt-6">
      <section className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 w-full">
        <Sidebar />
        {/* Ajuste para ocupar o máximo de espaço disponível e adicionar espaçamento */}
        <div className="flex-1 max-w-[calc(100%-320px)]">{children}</div> {/* Espaço calculado para as sidebars */}
        <div className="w-[280px]">
          <News />
        </div>
      </section>
    </main>
  )
}
