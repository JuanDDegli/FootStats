"use client"

import type { matchesType } from "@/types"
import LeagueTable from "./leagueTable"
import Competition from "./competition"
import { useState, useEffect } from "react"
import Loader from "./loader"

const groupMatchesByDate = (matches: matchesType[]) => {
  const grouped: { [key: string]: matchesType[] } = {}

  matches.forEach((match) => {
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

const Status = ({
  matchesList,
  matchesListfinished,
}: { matchesList: matchesType[]; matchesListfinished: matchesType[] }) => {
  const [filter, setFilter] = useState<"all" | "today" | "finished">(() => "all")
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
      {/* Botões de Filtro */}
      <div className="flex gap-4 mb-4 overflow-x-auto pb-2">
        <button
          className={`px-4 py-2 rounded-md text-sm font-bold whitespace-nowrap ${filter === "all" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}`}
          onClick={() => setFilter("all")}
        >
          Todos
        </button>
        <button
          className={`px-4 py-2 rounded-md text-sm font-bold whitespace-nowrap ${filter === "finished" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}`}
          onClick={() => setFilter("finished")}
        >
          Finalizados
        </button>
      </div>

      {/* Lista de Jogos */}
      {isLoading ? (
        <Loader />
      ) : (
        <div className="match-card-transition">
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
                <div key={date}>
                  <h2 className="text-lg font-bold text-slate-800 px-4 py-2 rounded-md">{date}</h2>
                  <div className="space-y-4 mt-4">
                    {matches.map((match) => (
                      <div key={match.id} className="border bg-white rounded-lg shadow-md overflow-hidden h-[192px]">
                        <Competition data={match} />
                        <div className="px-4 pb-4">
                          <LeagueTable data={match} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
          )}
        </div>
      )}
    </div>
  )
}

export default Status

