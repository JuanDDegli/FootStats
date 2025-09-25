// components/Pagination.tsx
"use client" // É um componente cliente porque precisa de interatividade

import { useRouter, usePathname, useSearchParams } from "next/navigation"

const Pagination = ({ totalPages }: { totalPages: number }) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const currentPage = Number(searchParams.get("page")) || 1

  const createPageURL = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams)
    params.set("page", pageNumber.toString())
    return `${pathname}?${params.toString()}`
  }

  return (
    <div className="flex items-center justify-center space-x-2 py-4">
      {/* Botão para a página anterior */}
      <button
        onClick={() => router.push(createPageURL(currentPage - 1))}
        disabled={currentPage <= 1}
        className="px-4 py-2 border rounded-md disabled:opacity-50"
      >
        Anterior
      </button>

      {/* Exemplo de botões de página */}
      {Array.from({ length: totalPages }, (_, i) => (
        <a
          key={i + 1}
          href={createPageURL(i + 1)}
          className={`px-4 py-2 border rounded-md ${
            currentPage === i + 1 ? "bg-gray-300" : ""
          }`}
        >
          {i + 1}
        </a>
      ))}

      {/* Botão para a próxima página */}
      <button
        onClick={() => router.push(createPageURL(currentPage + 1))}
        disabled={currentPage >= totalPages}
        className="px-4 py-2 border rounded-md disabled:opacity-50"
      >
        Próximo
      </button>
    </div>
  )
}

export default Pagination