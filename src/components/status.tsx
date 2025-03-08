"use client"

import type React from "react"

import type { matchesType } from "@/types"
import LeagueTable from "./leagueTable"
import Competition from "./competition"
import { useState, useEffect } from "react"
import Loader from "./loader"
import { motion } from "framer-motion"
import { CheckCircle, ListFilter } from "lucide-react"

const groupMatchesByDate = (matches: matchesType[]) => {
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

type FilterOption = "all" | "finished"

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

const Status = ({
  matchesList,
  matchesListfinished,
}: { matchesList: matchesType[]; matchesListfinished: matchesType[] }) => {
  const [filter, setFilter] = useState<FilterOption>(() => "all")
  const [isLoading, setIsLoading] = useState(false)

  const allMatches = [...matchesList, ...matchesListfinished]

  // Simulate loading state when changing filters
  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800) // Increased to 800ms for a more noticeable loading effect
    return () => clearTimeout(timer)
  }, [filter]) // Added filter as a dependency to trigger loading on filter change

  // Filtramos os jogos conforme o estado selecionado
  const filteredMatches = allMatches.filter((match) => {
    const matchDate = new Date(match.utcDate)
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(today.getDate() + 1)

    if (filter === "finished") {
      return match.status === "FINISHED"
    }
    return true
  })

  const groupedMatches = groupMatchesByDate(filteredMatches)

  return (
    <div className="space-y-6 w-full">
      {/* Filter Buttons */}
      <div className="sticky z-10 bg-slate-50 pt-3 pb-4 px-2 -mx-2 rounded-lg shadow-sm">
        <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-hide">
          <FilterButton
            active={filter === "all"}
            onClick={() => setFilter("all")}
            icon={<ListFilter className="w-4 h-4" />}
            label="Todos"
          />
          <FilterButton
            active={filter === "finished"}
            onClick={() => setFilter("finished")}
            icon={<CheckCircle className="w-4 h-4" />}
            label="Finalizados"
          />
        </div>
      </div>

      {/* Match List */}
      {isLoading ? (
        <Loader />
      ) : (
        <motion.div
          className="match-card-transition"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {filteredMatches.length === 0 ? (
            <div className="text-center text-gray-600 mt-6">
              <p className="text-lg font-semibold">Nenhum jogo disponível no momento.</p>
              <p className="text-sm">Volte mais tarde para conferir novas partidas.</p>
            </div>
          ) : (
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
          )}
        </motion.div>
      )}
    </div>
  )
}

export default Status

