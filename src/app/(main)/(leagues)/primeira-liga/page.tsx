import { filterLeague } from "@/api"
import Status from "@/components/status"

const PrimeiraLiga = async () => {
  try {
    const getPrimeiraLiga = await filterLeague("Primeira Liga")
    const matchesList = Array.isArray(getPrimeiraLiga) ? getPrimeiraLiga : []

    return (
      <div>
        <Status matchesList={matchesList} matchesListfinished={[]} leagueTitle="Primeira Liga" />
      </div>
    )
  } catch (error) {
    console.error("Error fetching Primeira Liga data:", error)
    return (
      <section className="p-4">
        <div className="text-center py-8">
          <h2 className="text-xl font-semibold mb-2">Unable to load Primeira Liga matches</h2>
          <p className="text-gray-600">Please try again later</p>
        </div>
      </section>
    )
  }
}

export default PrimeiraLiga

