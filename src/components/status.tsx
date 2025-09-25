// components/status.tsx
"use client"

import type React from "react"
import type { matchesType } from "@/types"
import LeagueTable from "./leagueTable"
import Competition from "./competition"
import { useState, useEffect } from "react"
import Loader from "./loader"
import { motion } from "framer-motion"
import { ArrowDownRightIcon, CheckCircle, ListFilter, Trophy } from "lucide-react"
import { useRouter, usePathname, useSearchParams } from "next/navigation"
import Sidebar from "./sidebar"

// Função para remover duplicatas de um array de partidas
const removeDuplicates = (matches: matchesType[]) => {
  const map = new Map();
  for (const match of matches) {
    if (match && match.id) {
      map.set(match.id, match);
    }
  }
  return Array.from(map.values());
};

const groupMatchesByDate = (matches: matchesType[]) => {
  if (!Array.isArray(matches) || matches.length === 0) return {}

  const grouped: { [key: string]: matchesType[] } = {}

  matches.forEach((match) => {
    if (!match || !match.utcDate) return
    const date = new Date(match.utcDate)
    const today = new Date()
    const yesterday = new Date(today)
    yesterday.setDate(today.getDate() - 1)
    const tomorrow = new Date(today)
    tomorrow.setDate(today.getDate() + 1)

    let dateLabel = date.toLocaleDateString("pt-BR", { weekday: "long", day: "2-digit", month: "long" })

    if (date.toDateString() === today.toDateString()) {
      dateLabel = "Hoje"
    } else if (date.toDateString() === yesterday.toDateString()) {
      dateLabel = "Ontem"
    }

    if (!grouped[dateLabel]) grouped[dateLabel] = []
    grouped[dateLabel].push(match)
  })

  return grouped
}

type FilterOption = "today" | "finished" | "upcoming"

interface FilterButtonProps {
  active: boolean
  onClick: () => void
  icon: React.ReactNode
  label: string
}

const FilterButton = ({ active, onClick, icon, label }: FilterButtonProps) => {
  return (
    <button
      className={`
        relative flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold whitespace-nowrap
        transition-all duration-200 ease-in-out
        ${
          active
            ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md"
            : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
        }
        focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50
      `}
      onClick={onClick}
    >
      {icon}
      {label}
      {active && (
        <motion.div
          layoutId="activeFilterIndicator"
          className="absolute-bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-transparent rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </button>
  )
}

const Pagination = ({
  totalPages,
  currentPage,
}: {
  totalPages: number
  currentPage: number
}) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const createPageURL = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("page", pageNumber.toString())
    return `${pathname}?${params.toString()}`
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      router.push(createPageURL(currentPage + 1))
    }
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      router.push(createPageURL(currentPage - 1))
    }
  }

  return (
    <div className="flex items-center justify-center space-x-2 py-4">
      <button
        onClick={handlePreviousPage}
        disabled={currentPage <= 1}
        className="px-4 py-2 border text-slate-800 rounded-md disabled:opacity-50 transition-colors hover:bg-gradient-to-r from-blue-500 to-purple-500 hover:text-white shadow-md"
      >
        Anterior
      </button>

      <div className="flex items-center space-x-1">
        <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 shadow-md text-white rounded-md font-bold">{currentPage}</span>
        <span className="text-gray-500">de</span>
        <span className="px-4 py-2 border rounded-md font-bold">
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            {totalPages}
          </span>
        </span>
      </div>

      <button
        onClick={handleNextPage}
        disabled={currentPage >= totalPages}
        className="px-4 py-2 text-slate-800 border rounded-md disabled:opacity-50 transition-colors hover:bg-gradient-to-r from-blue-500 to-purple-500 hover:text-white shadow-md"
      >
        Próximo
      </button>
    </div>
  )
}

interface StatusProps {
  matchesList: matchesType[]
  matchesListfinished: matchesType[]
  matchesUpcoming: matchesType[]
  leagueTitle?: string
  currentPage?: number
  totalPages?: number
}

const Status = ({
  matchesList = [],
  matchesListfinished = [],
  matchesUpcoming = [],
  leagueTitle = "",
  currentPage = 1,
  totalPages = 1,
}: StatusProps) => {
  const [filter, setFilter] = useState<FilterOption>("today")
  const [isLoading, setIsLoading] = useState(false)
  const [leaguesOpen, setLeaguesOpen] = useState(false)

  const safeMatchesList = Array.isArray(matchesList) ? matchesList : []
  const safeMatchesListFinished = Array.isArray(matchesListfinished) ? matchesListfinished : []
  const safeMatchesUpcoming = Array.isArray(matchesUpcoming) ? matchesUpcoming : []
  
  // Combina todas as listas em uma só e remove as duplicatas
  const allMatchesCombined = removeDuplicates([
    ...safeMatchesList, 
    ...safeMatchesListFinished, 
    ...safeMatchesUpcoming
  ]);

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)
    return () => clearTimeout(timer)
  }, [filter])

  const filteredMatches = (() => {
    const today = new Date().toDateString();
    switch (filter) {
      case "finished":
        return safeMatchesListFinished.filter((match) => match.status === "FINISHED");
      case "upcoming":
        return safeMatchesUpcoming;
      case "today":
        return allMatchesCombined.filter((match) => {
          if (!match || !match.utcDate) return false;
          return new Date(match.utcDate).toDateString() === today;
        });
      default:
        return allMatchesCombined.filter((match) => {
          if (!match || !match.utcDate) return false;
          return new Date(match.utcDate).toDateString() === today;
        });
    }
  })();

  const groupedMatches = groupMatchesByDate(filteredMatches)

  return (
    <div className="space-y-6 w-full">
      {/* Título da Liga */}
      {leagueTitle && (
        <div className="mb-4">
          <h1 className="text-2xl font-bold text-slate-800">{leagueTitle}</h1>
        </div>
      )}

      {/* Botões de filtro */}
      <div className="sticky z-10 bg-slate-50 pt-3 pb-4 px-2 rounded-lg shadow-sm">
        <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-hide">
          {/* Botão de Ligas para Mobile */}
          <div className="md:hidden">
            <FilterButton
              active={leaguesOpen}
              onClick={() => setLeaguesOpen(!leaguesOpen)}
              icon={<Trophy className="w-4 h-4" />}
              label="Ligas"
            />
          </div>
          <FilterButton
            active={filter === "today"}
            onClick={() => setFilter("today")}
            icon={<ListFilter className="w-4 h-4" />}
            label="Jogos do Dia"
          />
          <FilterButton
            active={filter === "finished"}
            onClick={() => setFilter("finished")}
            icon={<CheckCircle className="w-4 h-4" />}
            label="Finalizados"
          />
          <FilterButton
            active={filter === "upcoming"}
            onClick={() => setFilter("upcoming")}
            icon={<ArrowDownRightIcon className="w-4 h-4" />}
            label="Próximos"
          />
        </div>

        {/* Dropdown de Ligas */}
        {leaguesOpen && (
          <div className="md:hidden mt-4 animate-fade-in-down">
            <Sidebar />
          </div>
        )}
      </div>

      {/* Lista de jogos */}
      {isLoading ? (
        <Loader />
      ) : (
        <motion.div
          className="match-card-transition"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {!filteredMatches.length ? (
            <div className="text-center text-gray-600 mt-6">
              <p className="text-lg font-semibold">Nenhum jogo disponível no momento.</p>
              <p className="text-sm">Volte mais tarde para conferir novas partidas.</p>
            </div>
          ) : Object.entries(groupedMatches).length > 0 ? (
            Object.entries(groupedMatches)
              .sort(([dateA], [dateB]) => {
                const parsedDateA = new Date(
                  dateA === "Hoje"
                    ? new Date()
                    : dateA === "Ontem"
                      ? new Date(new Date().setDate(new Date().getDate() - 1))
                      : new Date(dateA),
                )
                const parsedDateB = new Date(
                  dateB === "Hoje"
                    ? new Date()
                    : dateB === "Ontem"
                      ? new Date(new Date().setDate(new Date().getDate() - 1))
                      : new Date(dateB),
                )
                return parsedDateB.getTime() - parsedDateA.getTime()
              })
              .map(([date, matches]) => (
                <motion.div
                  key={date}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-lg font-bold text-slate-800 px-4 py-2 rounded-md">{date}</h2>
                  <div className="space-y-4 mt-4">
                    {matches.map((match) => (
                      <motion.div
                        key={match.id}
                        className="border bg-white rounded-lg shadow-md overflow-hidden h-[192px]"
                        initial={{ scale: 0.98, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Competition data={match} />
                        <div className="px-4 pb-4">
                          <LeagueTable data={match} />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))
          ) : (
            <div className="text-center text-gray-600 mt-6">
              <p className="text-lg font-semibold">Não há jogos para exibir neste período.</p>
            </div>
          )}
        </motion.div>
      )}

      {/* A paginação agora só é mostrada para a aba "Próximos" */}
      {filter === "upcoming" && totalPages > 1 && (
        <div className="flex justify-center mt-6">
          <Pagination totalPages={totalPages} currentPage={currentPage} />
        </div>
      )}
    </div>
  )
}

export default Status