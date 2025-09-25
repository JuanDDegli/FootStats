import {
  getMatchesFootball,
  getMatchesFootballFinished,
  getUpcomingMatchesNext3Days,
} from "@/api/index";
import Status from "@/components/status";

// Define o número de jogos por página
const GAMES_PER_PAGE = 10;

// O componente agora aceita searchParams como prop
export default async function Home({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  // Converte o parâmetro 'page' para um número, ou 1 se não existir
  const currentPage = Number(searchParams.page) || 1;

  const getDatas = await getMatchesFootball();
  const getDatasFinished = await getMatchesFootballFinished();
  const getUpcomingMatches = await getUpcomingMatchesNext3Days();

  const matchesDatas = getDatas?.matches || [];
  const matchesDatasFinished = getDatasFinished?.matches || [];
  
  // Filtra apenas os próximos jogos de todas as ligas
  const matchesUpcoming = (getUpcomingMatches?.matches || []).filter(
    (match) => match.status === "SCHEDULED" || match.status === "TIMED"
  );
  
  // Lógica da paginação: fatia a lista de jogos futuros
  const startIndex = (currentPage - 1) * GAMES_PER_PAGE;
  const endIndex = startIndex + GAMES_PER_PAGE;
  const paginatedMatchesUpcoming = matchesUpcoming.slice(startIndex, endIndex);

  // Calcula o número total de páginas
  const totalPages = Math.ceil(matchesUpcoming.length / GAMES_PER_PAGE);

  return (
    <section className="bg-slate-200 p-6 rounded-lg shadow-sm">
      <Status
        matchesList={matchesDatas}
        matchesListfinished={matchesDatasFinished}
        // Passa a lista paginada e os dados de paginação para o componente Status
        matchesUpcoming={paginatedMatchesUpcoming}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </section>
  );
}