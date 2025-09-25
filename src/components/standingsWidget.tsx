// src/components/StandingsWidget.tsx
import { getStandings } from "@/api";
import StandingsTable from "./standingsTable";

// Definimos as principais ligas que queremos mostrar
const mainLeagues = [
  { name: "Premier League", code: "PL" },
  { name: "La Liga", code: "PD" },
  { name: "Brasileirão", code: "BSA" },
  { name: "Bundesliga", code: "BL1" },
  { name: "Serie A", code: "SA" },
];

const StandingsWidget = async () => {
  // Buscamos os dados de todas as ligas em paralelo
  const standingsPromises = mainLeagues.map(league => getStandings(league.code));
  const standingsResults = await Promise.all(standingsPromises);

  return (
    <div className='w-full md:w-[300px] border-2 bg-white rounded-md px-4 py-4 flex flex-col gap-6'>
      <h1 className='text-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-move font-bold'>
        Classificações
      </h1>
      {standingsResults.map((result, index) => {
        // A API pode retornar múltiplas tabelas (ex: fases de grupos), pegamos a primeira e a principal.
        const mainStanding = result?.standings?.find(s => s.type === 'TOTAL');

        if (!mainStanding || !mainStanding.table) {
          return (
            <div key={mainLeagues[index].code}>
              <h2 className="font-bold text-md text-slate-800 mb-2">{mainLeagues[index].name}</h2>
              <p className="text-sm text-gray-500">Não foi possível carregar a tabela.</p>
            </div>
          );
        }

        return (
          <div key={mainLeagues[index].code}>
            <h2 className="font-bold text-md text-slate-800 mb-2">{mainLeagues[index].name}</h2>
            <StandingsTable table={mainStanding.table} />
          </div>
        );
      })}
    </div>
  );
};

export default StandingsWidget;