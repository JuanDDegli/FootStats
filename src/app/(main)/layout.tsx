import type React from "react"
import Sidebar from "@/components/sidebar"
import BottomNav from "@/components/bottomNav"

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="flex flex-1 flex-col bg-white md:flex-row md:py-2 px-2 md:px-16 md:mt-6 max-w-full pb-16 md:pb-0">
      <section className="flex flex-1 flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 w-full">
        {/* Sidebar para Desktop */}
        <div className="hidden md:block">
          <Sidebar />
        </div>
        
        {/* Conteúdo Principal */}
        <div className="flex-1 min-w-0">{children}</div>
      </section>
      
      {/* Barra de Navegação para Mobile */}
      <BottomNav />
    </main>
  )
}