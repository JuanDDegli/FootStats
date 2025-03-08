import { filterLeague } from "@/api"
import Status from "@/components/status"

const Championship = async () => {
  try {
    const getChampionship = await filterLeague("Championship")
    const matchesList = Array.isArray(getChampionship) ? getChampionship : []

    return (
      <div>
        <Status matchesList={matchesList} matchesListfinished={[]} leagueTitle="Championship" />
      </div>
    )
  } catch (error) {
    console.error("Error fetching Championship data:", error)
    return (
      <section className="p-4">
        <div className="text-center py-8">
          <h2 className="text-xl font-semibold mb-2">Unable to load Championship matches</h2>
          <p className="text-gray-600">Please try again later</p>
        </div>
      </section>
    )
  }
}

export default Championship

