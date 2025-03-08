import { filterLeague } from "@/api"
import Status from "@/components/status"

const Eredivisie = async () => {
  try {
    const getEredivisie = await filterLeague("Eredivisie")
    const matchesList = Array.isArray(getEredivisie) ? getEredivisie : []

    return (
      <div>
        <Status matchesList={matchesList} matchesListfinished={[]} leagueTitle="Eredivisie" />
      </div>
    )
  } catch (error) {
    console.error("Error fetching Eredivisie data:", error)
    return (
      <section className="p-4">
        <div className="text-center py-8">
          <h2 className="text-xl font-semibold mb-2">Unable to load Eredivisie matches</h2>
          <p className="text-gray-600">Please try again later</p>
        </div>
      </section>
    )
  }
}

export default Eredivisie

