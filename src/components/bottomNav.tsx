"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
// 1. Importe o novo ícone 'Newspaper'
import { Home, Shield, Newspaper } from "lucide-react"

const navItems = [
  { href: "/", label: "Jogos", icon: Home },
  { href: "/leagues", label: "Ligas", icon: Shield },
  // 2. Substitua o item "Tabelas" por "Notícias"
  { href: "/news", label: "Notícias", icon: Newspaper },
]

const BottomNav = () => {
  const pathname = usePathname()

  // Não mostrar em páginas que não são de futebol (ex: about, contact)
  if (pathname.startsWith('/about') || pathname.startsWith('/contact')) {
    return null;
  }

  return (
    <nav className="md:hidden fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200">
      <div className="grid h-full max-w-lg grid-cols-3 mx-auto font-medium">
        {navItems.map((item) => {
          const isActive = (pathname === "/" && item.href === "/") || (item.href !== "/" && pathname.startsWith(item.href));
          const Icon = item.icon

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                inline-flex flex-col items-center justify-center px-5
                hover:bg-gray-50 group transition-colors
                ${isActive ? "text-blue-600" : "text-gray-500"}
              `}
            >
              <Icon className="w-5 h-5 mb-1" />
              <span className="text-xs">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

export default BottomNav