import {
  getMatchesFootball,
  getMatchesFootballFinished,
  getUpcomingMatchesNext3Days,
} from "@/api"
import Status from "@/components/status"

const GAMES_PER_PAGE = 6

const Brasileirao = async ({
  searchParams,
}: {
  searchParams: { page?: string }
}) => {
  try {
    const currentPage = Number(searchParams.page) || 1
    const liveMatches = await getMatchesFootball()
    const finishedMatches = await getMatchesFootballFinished()
    const upcomingMatches = await getUpcomingMatchesNext3Days()

    const matchesList = (liveMatches?.matches || []).filter(
      (match) => match.competition?.name === "Campeonato Brasileiro Série A"
    )
    const matchesListfinished = (finishedMatches?.matches || []).filter(
      (match) => match.competition?.name === "Campeonato Brasileiro Série A"
    )
    const matchesUpcoming = (upcomingMatches?.matches || []).filter(
      (match) =>
        (match.status === "SCHEDULED" || match.status === "TIMED") &&
        match.competition?.name === "Campeonato Brasileiro Série A"
    )

    const startIndex = (currentPage - 1) * GAMES_PER_PAGE
    const endIndex = startIndex + GAMES_PER_PAGE
    const paginatedMatches = matchesUpcoming.slice(startIndex, endIndex)

    const totalPages = Math.ceil(matchesUpcoming.length / GAMES_PER_PAGE)

    return (
      <div>
        <Status
          matchesList={matchesList}
          matchesListfinished={matchesListfinished}
          matchesUpcoming={paginatedMatches}
          leagueTitle="Brasileirão"
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </div>
    )
  } catch (error) {
    console.error("Error fetching Brasileirão data:", error)
    return (
      <section className="p-4">
        <div className="text-center py-8">
          <h2 className="text-xl font-semibold mb-2">Unable to load Brasileirão matches</h2>
          <p className="text-gray-600">Please try again later</p>
        </div>
      </section>
    )
  }
}

export default Brasileirao