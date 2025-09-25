import {
  getMatchesFootball,
  getMatchesFootballFinished,
  getUpcomingMatchesNext3Days,
} from "@/api"
import Status from "@/components/status"

const GAMES_PER_PAGE = 6

const LigueOne = async ({
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
      (match) => match.competition?.name === "Ligue 1"
    )
    const matchesListfinished = (finishedMatches?.matches || []).filter(
      (match) => match.competition?.name === "Ligue 1"
    )
    const matchesUpcoming = (upcomingMatches?.matches || []).filter(
      (match) =>
        (match.status === "SCHEDULED" || match.status === "TIMED") &&
        match.competition?.name === "Ligue 1"
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
          leagueTitle="Ligue 1"
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </div>
    )
  } catch (error) {
    console.error("Error fetching Ligue 1 data:", error)
    return (
      <section className="p-4">
        <div className="text-center py-8">
          <h2 className="text-xl font-semibold mb-2">Unable to load Ligue 1 matches</h2>
          <p className="text-gray-600">Please try again later</p>
        </div>
      </section>
    )
  }
}

export default LigueOne