import { filterLeague, getUpcomingMatchesNext3Days } from "@/api"
import Status from "@/components/status"

const Brasileirao = async () => {
  try {
    // Busca todos os jogos da liga "Brazilian Serie A"
    const getBrasileirao = await filterLeague("Brazilian Serie A")
    // Busca os próximos jogos nos próximos 3 dias (global)
    const upcoming = await getUpcomingMatchesNext3Days()

    // Garante que seja um array
    const matchesList = Array.isArray(getBrasileirao) ? getBrasileirao : []

    // Filtra apenas os próximos jogos da liga Brasileirão (status agendado)
    const matchesUpcoming = (upcoming?.matches || []).filter(
      (match) =>
        (match.status === "SCHEDULED" || match.status === "TIMED") &&
    match.competition?.name === "Campeonato Brasileiro Série A"
    );
    console.log(upcoming?.matches.map(m => m.competition?.name));
    return (
      <div>
        <Status
          matchesList={matchesList}
          matchesListfinished={[]} // Pode ajustar aqui se tiver jogos finalizados da liga, se quiser
          matchesUpcoming={matchesUpcoming}
          leagueTitle="Brasileirão"
        />
      </div>
    )
  } catch (error) {
    console.error("Error fetching Brasileirão data:", error)
    return (
      <section className="p-4">
        <div className="text-center py-8">
          <h2 className="text-xl font-semibold mb-2">Unable to load Brasileirão matches</h2>
          <p className="text-gray-600">Please try again later</p>
        </div>
      </section>
    )
  }
}

export default Brasileirao
