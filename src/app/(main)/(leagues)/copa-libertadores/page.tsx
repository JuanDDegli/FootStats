import {
  getMatchesFootball,
  getMatchesFootballFinished,
  getUpcomingMatchesNext3Days,
} from "@/api"
import Status from "@/components/status"

const CopaLibertadores = async () => {
  try {
    const liveMatches = await getMatchesFootball()
    const finishedMatches = await getMatchesFootballFinished()
    const upcomingMatches = await getUpcomingMatchesNext3Days()

    const matchesList = (liveMatches?.matches || []).filter(
      (match) => match.competition?.name === "Copa Libertadores"
    )
    const matchesListfinished = (finishedMatches?.matches || []).filter(
      (match) => match.competition?.name === "Copa Libertadores"
    )
    const matchesUpcoming = (upcomingMatches?.matches || []).filter(
      (match) =>
        (match.status === "SCHEDULED" || match.status === "TIMED") &&
        match.competition?.name === "Copa Libertadores"
    )

    return (
      <div>
        <Status
          matchesList={matchesList}
          matchesListfinished={matchesListfinished}
          matchesUpcoming={matchesUpcoming}
          leagueTitle="Copa Libertadores"
        />
      </div>
    )
  } catch (error) {
    console.error("Error fetching Copa Libertadores data:", error)
    return (
      <section className="p-4">
        <div className="text-center py-8">
          <h2 className="text-xl font-semibold mb-2">Unable to load Copa Libertadores matches</h2>
          <p className="text-gray-600">Please try again later</p>
        </div>
      </section>
    )
  }
}

export default CopaLibertadores