import type { Scorer } from "@/types"
import Image from "next/image"

interface ScorersTableProps {
  scorers: Scorer[]
}

const ScorersTable = ({ scorers }: ScorersTableProps) => {
  const topScorers = scorers.slice(0, 5) 

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-4 py-2">Jogador</th>
            <th scope="col" className="px-2 py-2 text-center">Gols</th>
            <th scope="col" className="px-2 py-2 text-center">Assist.</th>
          </tr>
        </thead>
        <tbody>
          {topScorers.map((scorer) => (
            <tr key={scorer.player.id} className="bg-white border-b hover:bg-gray-50">
              <td className="px-4 py-2 flex items-center gap-2">
                <Image src={scorer.team.crest} alt={scorer.team.name} width={20} height={20} />
                <span className="font-semibold whitespace-nowrap">{scorer.player.name}</span>
              </td>
              <td className="px-2 py-2 font-bold text-center">{scorer.goals}</td>
              <td className="px-2 py-2 text-center">{scorer.assists ?? "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ScorersTable