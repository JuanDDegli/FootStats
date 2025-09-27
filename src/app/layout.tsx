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
      {/* CORREÇÃO: 
        1. Adicionamos 'flex flex-col min-h-screen' ao <body>.
           - 'flex flex-col': Organiza os filhos (conteúdo e rodapé) em uma coluna.
           - 'min-h-screen': Garante que o body ocupe pelo menos 100% da altura da tela.
      */}
      <body className="flex flex-col min-h-screen bg-white text-textPrimary">
        {/*
          2. Criamos uma div que envolve o conteúdo principal.
             - 'flex-1' (ou flex-grow): Faz esta div "crescer" e ocupar todo o espaço 
               disponível, empurrando o rodapé para baixo.
        */}
        <div className="flex-1">
          <Navbar />
          {children}
        </div>

        {/* 3. O rodapé permanece no final, dentro do body. */}
        <footer className="w-full text-center py-4 bg-gray-100 text-gray-600">
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