// src/components/StandingsTable.tsx
import type { TableEntry } from "@/types";
import Image from "next/image";

interface StandingsTableProps {
  table: TableEntry[];
  showAll?: boolean; // Nova prop
}

const StandingsTable = ({ table, showAll = false }: StandingsTableProps) => {
  // Mostra a tabela completa ou apenas os 5 primeiros
  const teamsToShow = showAll ? table : table.slice(0, 20);

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-2 py-2 text-center">#</th>
            <th scope="col" className="px-4 py-2">Clube</th>
            <th scope="col" className="px-2 py-2 text-center">P</th>
            <th scope="col" className="px-2 py-2 text-center">J</th>
            {/* Colunas adicionais para a versão completa */}
            {showAll && (
              <>
                <th scope="col" className="px-2 py-2 text-center">V</th>
                <th scope="col" className="px-2 py-2 text-center">E</th>
                <th scope="col" className="px-2 py-2 text-center">D</th>
                <th scope="col" className="px-2 py-2 text-center">SG</th>
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {teamsToShow.map((entry) => (
            <tr key={entry.team.id} className="bg-white border-b hover:bg-gray-50">
              <td className="px-2 py-2 font-medium text-center text-gray-900">{entry.position}</td>
              <td className="px-4 py-2 flex items-center gap-2">
                <Image src={entry.team.crest} alt={entry.team.name} width={20} height={20} />
                <span className="font-semibold whitespace-nowrap">{entry.team.name}</span>
              </td>
              <td className="px-2 py-2 font-bold text-center">{entry.points}</td>
              <td className="px-2 py-2 text-center">{entry.playedGames}</td>
              {showAll && (
                 <>
                    <td className="px-2 py-2 text-center">{entry.won}</td>
                    <td className="px-2 py-2 text-center">{entry.draw}</td>
                    <td className="px-2 py-2 text-center">{entry.lost}</td>
                    <td className="px-2 py-2 text-center">{entry.goalDifference}</td>
                 </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StandingsTable;