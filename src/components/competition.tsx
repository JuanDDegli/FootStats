import type { matchesType } from "@/types"
import Image from "next/image"

const Competition = ({ data }: { data: matchesType }) => {
  return (
    <div className=" bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 flex items-center justify-between h-[72px]">
        <div className="flex items-center gap-x-2">
          <div className="relative w-10 h-10 flex-shrink-0 overflow-hidden">
            <Image
              src={data.competition.emblem || "/logos/premier_league.webp"}
              alt={data.competition.name}
              fill
              className="object-contain p-1"
            />
          </div>
          <h3 className="font-bold text-slate-800 text-base md:text-lg">
            {data.competition.name}
          </h3>
        </div>
      <div className="flex items-center gap-x-2">
        <div className="bg-white text-blue-500 px-3 py-1 rounded-md text-xs font-bold flex items-center">
          <span className="whitespace-nowrap">
            {new Date(data?.utcDate).toLocaleDateString("pt-BR", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </span>
        </div>
        <div className="bg-white text-blue-500 px-3 py-1 rounded-md text-xs font-bold">
          <span>Rodada {data?.matchday}</span>
        </div>
      </div>
    </div>
  )
}

export default Competition

