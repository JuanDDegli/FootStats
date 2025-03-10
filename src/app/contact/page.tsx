"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Send, Github, Linkedin, Mail } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const { name, email, message } = formData
    const whatsappNumber = "+5522992725785"
    const whatsappMessage = `Olá, meu nome é ${name} e o meu email é (${email}). ${message}`
    const encodedMessage = encodeURIComponent(whatsappMessage)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    window.location.href = whatsappUrl

    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setFormData({ name: "", email: "", message: "" })
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-blue-100 shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span>Voltar para Home</span>
          </Link>

        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Hero Section */}
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 relative z-10">Entre em Contato</h1>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl relative z-10">
              Tem alguma dúvida, sugestão ou só quer bater um papo sobre futebol? Estou à disposição!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-blue-50">
              <h2 className="text-xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-move mb-4">
                Envie uma mensagem
              </h2>

              {submitted ? (
                <div className="bg-green-50 border border-green-100 rounded-lg p-4 text-green-700">
                  <p className="font-medium">Mensagem enviada com sucesso!</p>
                  <p className="text-sm mt-1">Obrigado pelo contato. Responderei o mais breve possível.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-3 text-sm font-medium text-green-700 hover:text-green-800"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 text-primary border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Seu nome"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border text-primary  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-3 py-2 border text-primary  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Sua mensagem aqui..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-md hover:opacity-90 transition-opacity"
                  >
                    {isSubmitting ? (
                      <>Enviando...</>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Enviar mensagem via WhatsApp
                      </>
                    )}
                   </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <div className="bg-white rounded-xl shadow-md p-6 border border-blue-50 mb-6">
                <h2 className="text-xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-move mb-4">
                  Informações de contato
                </h2>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <Mail className="h-5 w-5 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">Email</h3>
                      <a href="mailto:juanddegliesposte@gmail.com" className="text-blue-600 hover:underline">
                        juanddegliesposte@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <Github className="h-5 w-5 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">GitHub</h3>
                      <a
                        href="https://github.com/JuanDDegli"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        github.com/JuanDDegli
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <Linkedin className="h-5 w-5 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">LinkedIn</h3>
                      <a
                        href="https://www.linkedin.com/in/juan-diego-d-1b625a211/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        linkedin.com/in/juandegli
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 border border-blue-50">
                <h2 className="text-xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-move mb-4">
                  Resposta rápida
                </h2>
                <p className="text-gray-700 mb-3">
                  Normalmente respondo em até 24 horas. Para assuntos urgentes, considere me contatar diretamente pelo
                  LinkedIn.
                </p>
                <p className="text-gray-700">Estou sempre aberto a novas ideias, sugestões e colaborações!</p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-xl shadow-md p-6 border border-blue-50 mb-8">
            <h2 className="text-xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-move mb-4">
              Perguntas frequentes
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-800 mb-1">O FootStats é um projeto comercial?</h3>
                <p className="text-gray-700">
                  Não, o FootStats é um projeto pessoal desenvolvido por diversão e para praticar habilidades de
                  programação.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-800 mb-1">Posso contribuir com o projeto?</h3>
                <p className="text-gray-700">
                  Claro! Sinta-se à vontade para fazer um fork do repositório no GitHub e enviar suas contribuições.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-800 mb-1">De onde vêm os dados do FootStats?</h3>
                <p className="text-gray-700">
  Os dados são obtidos através de uma API pública de futebol, a{" "}
  <a 
    href="https://www.football-data.org/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
      bg-clip-text text-transparent animate-gradient-move font-bold hidden sm:inline"
  >
    football-data.org
  </a>, que fornece informações sobre jogos, times e ligas.
</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

