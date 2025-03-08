import { filterLeague } from "@/api"
import Status from "@/components/status"

const LaLiga = async () => {
  try {
    const getLaLiga = await filterLeague("Primera Division")
    const matchesList = Array.isArray(getLaLiga) ? getLaLiga : []

    return (
      <div>
        <Status matchesList={matchesList} matchesListfinished={[]} leagueTitle="La Liga" />
      </div>
    )
  } catch (error) {
    console.error("Error fetching La Liga data:", error)
    return (
      <section className="p-4">
        <div className="text-center py-8">
          <h2 className="text-xl font-semibold mb-2">Unable to load La Liga matches</h2>
          <p className="text-gray-600">Please try again later</p>
        </div>
      </section>
    )
  }
}

export default LaLiga

