// Bundesliga.tsx

import {
  filterLeague,
  getUpcomingMatchesNext3Days,
  getMatchesFootballFinished,
} from "@/api"
import Status from "@/components/status"

// Define o número de jogos por página
const GAMES_PER_PAGE = 6

// O componente agora recebe 'searchParams' como um prop
const Bundesliga = async ({
  searchParams,
}: {
  searchParams: { page?: string }
}) => {
  try {
    const currentPage = Number(searchParams.page) || 1

    const upcoming = await getUpcomingMatchesNext3Days()
    const matchesUpcoming = (upcoming?.matches || []).filter(
      (match) =>
        (match.status === "SCHEDULED" || match.status === "TIMED") &&
        match.competition?.name === "Bundesliga"
    )

    // Lógica da paginação
    const startIndex = (currentPage - 1) * GAMES_PER_PAGE
    const endIndex = startIndex + GAMES_PER_PAGE
    const paginatedMatches = matchesUpcoming.slice(startIndex, endIndex)

    // Calcula o número total de páginas
    const totalPages = Math.ceil(matchesUpcoming.length / GAMES_PER_PAGE)

    // Opcional: Busca jogos finalizados para a aba de resultados
    const getFinished = await getMatchesFootballFinished()
    const matchesListFinished = (getFinished?.matches || []).filter(
      (match) => match.competition?.name === "Bundesliga"
    )

    // Aqui, em vez de passar a lista completa, passamos a lista paginada
    return (
      <div>
        <Status
          matchesList={[]} // Deixamos vazio ou preenchido com dados de jogos em andamento se tiver
          matchesListfinished={matchesListFinished}
          matchesUpcoming={paginatedMatches} // A lista de jogos agendados agora está paginada
          leagueTitle="Bundesliga"
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </div>
    )
  } catch (error) {
    console.error("Error fetching Bundesliga data:", error)
    return (
      <section className="p-4">
        <div className="text-center py-8">
          <h2 className="text-xl font-semibold mb-2">
            Não foi possível carregar as partidas da Bundesliga
          </h2>
          <p className="text-gray-600">Por favor, tente novamente mais tarde</p>
        </div>
      </section>
    )
  }
}

export default Bundesliga