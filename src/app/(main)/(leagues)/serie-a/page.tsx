import { filterLeague } from "@/api"
import Status from "@/components/status"

const SerieA = async () => {
  try {
    const getSerieA = await filterLeague("Serie A")
    const matchesList = Array.isArray(getSerieA) ? getSerieA : []

    return (
      <div>
        <Status matchesList={matchesList} matchesListfinished={[]} leagueTitle="Serie A" />
      </div>
    )
  } catch (error) {
    console.error("Error fetching Serie A data:", error)
    return (
      <section className="p-4">
        <div className="text-center py-8">
          <h2 className="text-xl font-semibold mb-2">Unable to load Serie A matches</h2>
          <p className="text-gray-600">Please try again later</p>
        </div>
      </section>
    )
  }
}

export default SerieA

