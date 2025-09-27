import {
  getMatchesFootball,
  getMatchesFootballFinished,
  getUpcomingMatchesNext3Days,
  getStandings,
  getTopScorers,
} from "@/api"
import Status from "@/components/status"
import StandingsTable from "@/components/standingsTable"
import ScorersTable from "@/components/scorersTable"
import { leagues } from "@/utils/leagues"
import type { matchesType, Standing } from "@/types"

interface LeaguePageProps {
  params: {
    league: string
  }
}

const LeaguePage = async ({ params }: LeaguePageProps) => {
  const leagueSlug = params.league;
  const leagueInfo = leagues.find((l) => l.href === leagueSlug);

  // Esta verificação é crucial. Como ela retorna algo,
  // o TypeScript entende que o código abaixo só será executado se 'leagueInfo' existir.
  if (!leagueInfo) {
    return (
      <section className="p-4">
        <div className="text-center py-8">
          <h2 className="text-xl font-semibold mb-2">Liga não encontrada</h2>
          <p className="text-gray-600">A liga que você está procurando não existe.</p>
        </div>
      </section>
    );
  }

  try {
    // A partir daqui, TypeScript sabe que 'leagueInfo' não é 'undefined'.
    const [
      liveMatches,
      finishedMatches,
      upcomingMatches,
      standingsData,
      scorersData,
    ] = await Promise.all([
        getMatchesFootball(),
        getMatchesFootballFinished(),
        getUpcomingMatchesNext3Days(),
        getStandings(leagueInfo.code),
        getTopScorers(leagueInfo.code),
    ]);

    const filterByCompetition = (match: matchesType) =>
      match.competition?.id === leagueInfo.id || match.competition?.name === leagueInfo.apiName

    const matchesList = (liveMatches?.matches || []).filter(filterByCompetition)
    const matchesListfinished = (finishedMatches?.matches || []).filter(filterByCompetition)
    const matchesUpcoming = (upcomingMatches?.matches || []).filter(
      (match: matchesType) => (match.status === "SCHEDULED" || match.status === "TIMED") && filterByCompetition(match)
    )

    const mainStanding = standingsData?.standings?.find((s: Standing) => s.type === "TOTAL")
    const topScorers = scorersData?.scorers || []

    return (
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Coluna da Esquerda: Jogos */}
        <div className="flex-1 bg-slate-200 p-6 rounded-lg shadow-sm">
          <Status
            matchesList={matchesList}
            matchesListfinished={matchesListfinished}
            matchesUpcoming={matchesUpcoming}
            leagueTitle={leagueInfo.name}
          />
        </div>

        {/* Coluna da Direita: Tabela e Artilheiros */}
        <div className="w-full lg:w-[300px] space-y-6">
          {mainStanding && mainStanding.table ? (
            <div className="bg-white p-4 rounded-lg shadow-sm border-2">
              <h2 className="text-xl font-bold text-slate-800 mb-4">Classificação</h2>
              <StandingsTable table={mainStanding.table} showAll={true} />
            </div>
          ) : (
            <p>Tabela de classificação indisponível.</p>
          )}

          {topScorers.length > 0 ? (
            <div className="bg-white p-4 rounded-lg shadow-sm border-2">
              <h2 className="text-xl font-bold text-slate-800 mb-4">Artilheiros</h2>
              <ScorersTable scorers={topScorers} />
            </div>
          ) : (
            <p>Informações de artilheiros indisponíveis.</p>
          )}
        </div>
      </div>
    )
  } catch (error) {
    console.error(`Error fetching data for ${leagueInfo.name}:`, error);
    return (
      <section className="p-4">
        <div className="text-center py-8">
          <h2 className="text-xl font-semibold mb-2">Não foi possível carregar os dados da liga</h2>
          <p className="text-gray-600">Por favor, tente novamente mais tarde</p>
        </div>
      </section>
    );
  }
};

export default LeaguePage;