import { filterLeague } from "@/api"
import Status from "@/components/status"

const CopaLibertadores = async () => {
  try {
    const getCopaLibertadores = await filterLeague("Libertadores")
    const matchesList = Array.isArray(getCopaLibertadores) ? getCopaLibertadores : []

    return (
      <div>
        <Status matchesList={matchesList} matchesListfinished={[]} leagueTitle="Copa Libertadores" />
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

