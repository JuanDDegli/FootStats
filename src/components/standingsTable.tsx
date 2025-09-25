// src/components/StandingsTable.tsx
import type { TableEntry } from "@/types";
import Image from "next/image";

interface StandingsTableProps {
  table: TableEntry[];
}

const StandingsTable = ({ table }: StandingsTableProps) => {
  // Vamos mostrar apenas os 5 primeiros para a versão "mini"
  const topTeams = table.slice(0, 5);

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-2 py-2 text-center">#</th>
            <th scope="col" className="px-4 py-2">Clube</th>
            <th scope="col" className="px-2 py-2 text-center">P</th>
            <th scope="col" className="px-2 py-2 text-center">J</th>
          </tr>
        </thead>
        <tbody>
          {topTeams.map((entry) => (
            <tr key={entry.team.id} className="bg-white border-b hover:bg-gray-50">
              <td className="px-2 py-2 font-medium text-center text-gray-900">{entry.position}</td>
              <td className="px-4 py-2 flex items-center gap-2">
                <Image src={entry.team.crest} alt={entry.team.name} width={20} height={20} />
                <span className="font-semibold whitespace-nowrap">{entry.team.name}</span>
              </td>
              <td className="px-2 py-2 font-bold text-center">{entry.points}</td>
              <td className="px-2 py-2 text-center">{entry.playedGames}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StandingsTable;