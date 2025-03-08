import { getMatchesFootball, getMatchesFootballFinished } from "@/api/index"
import Status from "@/components/status"

export default async function BundesligaPage() {
  try {
    const getDatas = await getMatchesFootball()
    const getDatasFinished = await getMatchesFootballFinished()

    // Ensure we have valid data with fallbacks
    const matchesDatas = getDatas?.matches || []
    const matchesDatasFinished = getDatasFinished?.matches || []

    return (
      <section>
        <Status matchesList={matchesDatas} matchesListfinished={matchesDatasFinished} />
      </section>
    )
  } catch (error) {
    console.error("Error fetching Bundesliga data:", error)
    // Return a fallback UI when data fetching fails
    return (
      <section className="p-4">
        <div className="text-center py-8">
          <h2 className="text-xl font-semibold mb-2">Unable to load Bundesliga matches</h2>
          <p className="text-gray-600">Please try again later</p>
        </div>
      </section>
    )
  }
}

