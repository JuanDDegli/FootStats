import { filterLeague } from "@/api"
import Status from "@/components/status"

const English = async () => {
  try {
    const getEnglishLeague = await filterLeague("Premier League")
    const matchesList = Array.isArray(getEnglishLeague) ? getEnglishLeague : []

    return (
      <div>
        <Status matchesList={matchesList} matchesListfinished={[]} leagueTitle="Premier League" />
      </div>
    )
  } catch (error) {
    console.error("Error fetching Premier League data:", error)
    return (
      <section className="p-4">
        <div className="text-center py-8">
          <h2 className="text-xl font-semibold mb-2">Unable to load Premier League matches</h2>
          <p className="text-gray-600">Please try again later</p>
        </div>
      </section>
    )
  }
}

export default English

