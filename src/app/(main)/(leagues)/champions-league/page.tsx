import {
  getMatchesFootball,
  getMatchesFootballFinished,
  getUpcomingMatchesNext3Days,
} from "@/api/index"
import Status from "@/components/status"
import type { matchesType } from "@/types"

const GAMES_PER_PAGE = 6

export default async function ChampionsLeague({
  searchParams,
}: {
  searchParams?: { page?: string };
}) {
  try {
    const currentPage = Number(searchParams?.page) || 1
    const getDatas = await getMatchesFootball()
    const getDatasFinished = await getMatchesFootballFinished()
    const getUpcoming = await getUpcomingMatchesNext3Days()

    const matchesDatas = (getDatas?.matches || []).filter(
      (match: matchesType) => match?.competition?.name === "UEFA Champions League" || match?.competition?.code === "CL",
    )
    const matchesDatasFinished = (getDatasFinished?.matches || []).filter(
      (match: matchesType) => match?.competition?.name === "UEFA Champions League" || match?.competition?.code === "CL",
    )
    const matchesUpcoming = (getUpcoming?.matches || []).filter(
      (match: matchesType) => (match.status === "SCHEDULED" || match.status === "TIMED") && (match?.competition?.name === "UEFA Champions League" || match?.competition?.code === "CL"),
    )

    const startIndex = (currentPage - 1) * GAMES_PER_PAGE
    const endIndex = startIndex + GAMES_PER_PAGE
    const paginatedMatches = matchesUpcoming.slice(startIndex, endIndex)

    const totalPages = Math.ceil(matchesUpcoming.length / GAMES_PER_PAGE)

    return (
      <section>
        <Status
          matchesList={matchesDatas}
          matchesListfinished={matchesDatasFinished}
          matchesUpcoming={paginatedMatches}
          leagueTitle="UEFA Champions League"
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </section>
    )
  } catch (error) {
    console.error("Error fetching Champions League data:", error)
    return (
      <section className="p-4">
        <div className="text-center py-8">
          <h2 className="text-xl font-semibold mb-2">Unable to load Champions League matches</h2>
          <p className="text-gray-600">Please try again later</p>
        </div>
      </section>
    )
  }
}