import { getMatchesFootball, getMatchesFootballFinished } from "@/api/index"
import Status from "@/components/status"
import type { matchesType } from "@/types"

export default async function ChampionsLeague() {
  try {
    const getDatas = await getMatchesFootball()
    const getDatasFinished = await getMatchesFootballFinished()

    // Ensure we have valid data with fallbacks
    const matchesDatas = getDatas?.matches || []
    const matchesDatasFinished = getDatasFinished?.matches || []

    // Filtrar apenas jogos da Champions League
    const championsMatches = matchesDatas.filter(
      (match: matchesType) => match?.competition?.name === "UEFA Champions League" || match?.competition?.code === "CL",
    )

    const championsMatchesFinished = matchesDatasFinished.filter(
      (match: matchesType) => match?.competition?.name === "UEFA Champions League" || match?.competition?.code === "CL",
    )

    return (
      <section>
        <Status
          matchesList={championsMatches}
          matchesListfinished={championsMatchesFinished}
          leagueTitle="UEFA Champions League"
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

