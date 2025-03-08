"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-white border-b-2 border-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-4 top-0 left-0 w-full z-50 backdrop-blur-m">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        {/* Logo and site name */}
        <Link href="/" className="flex items-center space-x-2">
          <img
            width="40"
            height="40"
            src="https://img.icons8.com/nolan/64/football.png"
            alt="football"
            className="w-10 h-10"
          />
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
                    bg-clip-text text-transparent animate-gradient-move text-xl font-bold hidden sm:inline ">FootStats</span>
        </Link>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/home" className="text-[#6A5ACD] font-semibold hover:text-gray-300 transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-[#6A5ACD] font-semibold hover:text-gray-300 transition duration-300">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-[#6A5ACD] font-semibold      hover:text-gray-300 transition duration-300">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button className="md:hidden text-[#6A5ACD] focus:outline-none" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden font-semibold">
          <ul className="flex flex-col space-y-4 mt-4 px-4">
            <li>
              <Link
                href="/"
                className="text-[#6A5ACD] hover:text-gray-400 transition duration-300 block"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-[#6A5ACD] hover:text-purple-400 transition duration-300 block"
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-[#6A5ACD] hover:text-gray-300 transition duration-300 block"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar

