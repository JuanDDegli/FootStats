"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Trophy, ClubIcon as Football, Newspaper, Code, Github, ArrowLeft, ChevronUp } from "lucide-react"

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("features")
  const [showScrollTop, setShowScrollTop] = useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
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
        <div className="max-w-4xl mx-auto">
          {/* Hero Section with Animation */}
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 mb-8">
            <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 opacity-10">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-3.5v-7l6 3.5-6 3.5z" />
              </svg>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4 relative z-10">Sobre o FootStats</h1>

            <p className="text-lg md:text-xl opacity-90 max-w-2xl relative z-10">
              👋 E aí! Bem-vindo ao meu projeto pessoal de futebol e código!
            </p>
          </div>

          {/* Introduction Card with Improved Design */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-8 transform transition-all hover:shadow-lg border border-blue-50">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative w-40 h-40 rounded-full overflow-hidden bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1">
                  <div className="absolute inset-1 bg-white rounded-full flex items-center justify-center">
                    <div className="relative w-full h-40">
                      <Image src="/imgs/image-PROFILE.png" alt="foto" layout="fill" objectFit="cover" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-2/3">
                <p className="text-lg text-gray-800 mb-4">
                  Este é um projeto pessoal que criei por{" "}
                  <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-move font-bold">
                    pura diversão e amor ao futebol!
                  </span>
                </p>
                <p className="mb-4 text-gray-700">
                  Desenvolvi com <strong>React</strong>, <strong>Next.js</strong>, <strong>Tailwind CSS</strong> e com a API <strong>Football-Data.org</strong> para
                  acompanhar os resultados das minhas ligas favoritas enquanto pratico minhas habilidades de
                  programação.
                </p>
                <p className="text-gray-700">
                  Não é um projeto profissional, mas sim algo que reflete minha paixão por futebol e tecnologia! 😄
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Tabs */}
          <div className="mb-8">
            <div className="flex border-b border-gray-200 mb-6">
              <button
                onClick={() => setActiveTab("features")}
                className={`px-4 py-2 font-semibold text-sm transition-colors ${
                  activeTab === "features"
                    ? "border-b-2 border-blue-500 text-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Recursos
              </button>
              <button
                onClick={() => setActiveTab("tech")}
                className={`px-4 py-2 font-semibold text-sm transition-colors ${
                  activeTab === "tech"
                    ? "border-b-2 border-blue-500 text-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Tecnologias
              </button>
              <button
                onClick={() => setActiveTab("why")}
                className={`px-4 py-2 font-semibold text-sm transition-colors ${
                  activeTab === "why" ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Por quê?
              </button>
            </div>

            {/* Features Tab */}
            <div className={activeTab === "features" ? "block" : "hidden"}>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-move mb-6">
                O que você vai encontrar por aqui?
              </h2>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 transition-all hover:shadow-md hover:border-blue-100">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                      <Trophy className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-move">
                      Resultados de jogos
                    </h3>
                    <p className="text-gray-600">
                      Acompanhe os resultados das principais ligas de futebol em tempo real, sem complicação.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 transition-all hover:shadow-md hover:border-blue-100">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                      <Football className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-move">
                      Ligas populares
                    </h3>
                    <p className="text-gray-600">
                      Premier League, La Liga, Bundesliga e outras ligas internacionais que estão sempre no meu radar.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 transition-all hover:shadow-md hover:border-blue-100">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                      <Newspaper className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-move">
                      Notícias do futebol
                    </h3>
                    <p className="text-gray-600">
                      Encontre notícias fresquinhas e interessantes sobre o mundo do futebol, com destaque para as
                      últimas atualizações.
                    </p>
                  </div>
                </div>
              </div>

              {/* Preview Section */}
              <div className="bg-blue-100 rounded-xl p-6 border border-gray-100">
                <h3 className="font-semibold text-lg mb-4 text-gray-800">Prévia do Dashboard</h3>
                <div className="aspect-video relative rounded-lg overflow-hidden border border-gray-200 bg-white">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src="/imgs/image.png"
                      alt="Dashboard Preview"
                      width={800}
                      height={400}
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Technologies Tab */}
            <div className={activeTab === "tech" ? "block" : "hidden"}>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-move mb-6">
                Tecnologias que usei
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-all">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <Code className="h-5 w-5 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-blue-500 text-lg mb-2">Frontend</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                          <span className="text-gray-700">
                            <strong>React</strong> - Para componentes reativos e UI dinâmica
                          </span>
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                          <span className="text-gray-700">
                            <strong>Next.js</strong> - Para renderização rápida e otimização
                          </span>
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                          <span className="text-gray-700">
                            <strong>Tailwind CSS</strong> - Para estilização eficiente
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-all">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <svg className="h-5 w-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M10 20.5c-5.2 0-9.5-4.3-9.5-9.5s4.3-9.5 9.5-9.5c4.1 0 7.7 2.6 8.9 6.5h-3.1c-1.1-2.2-3.4-3.5-5.8-3.5-3.6 0-6.5 2.9-6.5 6.5s2.9 6.5 6.5 6.5c2.4 0 4.7-1.3 5.8-3.5h3.1c-1.2 3.9-4.8 6.5-8.9 6.5z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-blue-500 text-lg mb-2">Dados & APIs</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                          <span className="text-gray-700">
                            <strong>APIs de Futebol</strong> - Para dados atualizados
                          </span>
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                          <span className="text-gray-700">
                            <strong>Fetch API</strong> - Para requisições HTTP
                          </span>
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                          <span className="text-gray-700">
                            <strong>JSON</strong> - Para processamento de dados
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tech Stack Visualization */}
              <div className="mt-6 bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-semibold text-lg mb-4 text-gray-800">Meu Stack Tecnológico</h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {["React", "Next.js", "Tailwind CSS", "JavaScript", "TypeScript", "HTML5", "CSS3", "Git"].map(
                    (tech) => (
                      <span key={tech} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>

            {/* Why Tab */}
            <div className={activeTab === "why" ? "block" : "hidden"}>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-move mb-6">
                Por que criei isso?
              </h2>

              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="w-full md:w-1/3">
                    <div className="aspect-square relative rounded-lg overflow-hidden bg-blue-50 flex items-center justify-center">
                      <span className="text-6xl">🚀</span>
                    </div>
                  </div>

                  <div className="w-full md:w-2/3">
                    <p className="text-lg text-gray-800 mb-4">
                      Porque unir programação e futebol é o melhor dos dois mundos!
                    </p>
                    <p className="mb-4 text-gray-700">Este projeto me permite:</p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start">
                        <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2 mt-0.5">
                          ✓
                        </span>
                        <span className="text-gray-700">
                          Praticar minhas habilidades de frontend com tecnologias modernas
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2 mt-0.5">
                          ✓
                        </span>
                        <span className="text-gray-700">
                          Acompanhar os resultados e notícias das minhas ligas favoritas
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2 mt-0.5">
                          ✓
                        </span>
                        <span className="text-gray-700">Ter um projeto bacana para mostrar no meu GitHub</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2 mt-0.5">
                          ✓
                        </span>
                        <span className="text-gray-700">Experimentar novas técnicas de design e desenvolvimento</span>
                      </li>
                    </ul>
                    <p className="text-gray-700">
                      No final das contas, é um projeto que me diverte e me mantém aprendendo!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">Gostou do projeto?</h2>
            <p className="mb-6 max-w-lg mx-auto">
              Confira o código no GitHub ou entre em contato para trocar ideias sobre futebol e programação!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://github.com/JuanDDegli/FootStats"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-white text-blue-600 px-6 py-3 text-sm font-medium hover:bg-opacity-60 transition-colors"
              >
                <Github className="h-4 w-4" />
                Ver no GitHub
              </a>

              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-white  hover:bg-opacity-60 border border-white border-opacity-20 px-6 py-3 text-sm font-medium text-blue-600 transition-colors"
              >
                Dizer oi 👋
              </a>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center text-sm text-gray-500">
            <p>
              Este projeto não tem nenhuma afiliação oficial com qualquer liga ou organização de futebol. É apenas um
              projeto pessoal feito por diversão.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 p-3 rounded-full bg-blue-600 text-white shadow-lg transition-all ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <ChevronUp className="h-5 w-5" />
      </button>
    </div>
  )
}

