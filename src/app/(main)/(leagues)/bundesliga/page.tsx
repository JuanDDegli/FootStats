import {
  getMatchesFootball,
  getMatchesFootballFinished,
  getUpcomingMatchesNext3Days,
} from "@/api"
import Status from "@/components/status"

const Bundesliga = async () => {
  try {
    const liveMatches = await getMatchesFootball()
    const finishedMatches = await getMatchesFootballFinished()
    const upcomingMatchesData = await getUpcomingMatchesNext3Days()

    const matchesList = (liveMatches?.matches || []).filter(
      (match) => match.competition?.name === "Bundesliga"
    )
    const matchesListFinished = (finishedMatches?.matches || []).filter(
      (match) => match.competition?.name === "Bundesliga"
    )
    const matchesUpcoming = (upcomingMatchesData?.matches || []).filter(
      (match) =>
        (match.status === "SCHEDULED" || match.status === "TIMED") &&
        match.competition?.name === "Bundesliga"
    )

    return (
      <div>
        <Status
          matchesList={matchesList}
          matchesListfinished={matchesListFinished}
          matchesUpcoming={matchesUpcoming}
          leagueTitle="Bundesliga"
        />
      </div>
    )
  } catch (error) {
    console.error("Error fetching Bundesliga data:", error)
    return (
      <section className="p-4">
        <div className="text-center py-8">
          <h2 className="text-xl font-semibold mb-2">
            Não foi possível carregar as partidas da Bundesliga
          </h2>
          <p className="text-gray-600">Por favor, tente novamente mais tarde</p>
        </div>
      </section>
    )
  }
}

export default Bundesliga