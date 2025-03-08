import { filterLeague } from "@/api"
import Status from "@/components/status"

const LigueOne = async () => {
  try {
    const getLigue1 = await filterLeague("Ligue 1")
    const matchesList = Array.isArray(getLigue1) ? getLigue1 : []

    return (
      <div>
        <Status matchesList={matchesList} matchesListfinished={[]} leagueTitle="Ligue 1" />
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

