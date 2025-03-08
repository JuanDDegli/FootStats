import { getMatchesFootball, getMatchesFootballFinished } from "@/api/index"
import Status from "@/components/status"

export default async function Home() {
  const getDatas = await getMatchesFootball()
  const getDatasFinished = await getMatchesFootballFinished()

  const matchesDatas = getDatas?.matches || []
  const matchesDatasFinished = getDatasFinished?.matches || []

  return (
  <section>
      {/* Aqui, o status estará ajustado corretamente */}
      <Status matchesList={matchesDatas} matchesListfinished={matchesDatasFinished} />
    </section>
  )
}

