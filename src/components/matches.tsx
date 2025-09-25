import type { matchesType } from "@/types"
import Image from "next/image"

const Matches = ({ data }: { data: matchesType }) => {
  const getDate = new Date(data?.utcDate).toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "America/Sao_Paulo",
  })

  return (
    <div className="grid grid-cols-3 items-center px-2 min-h-[80px]">
      {/* Time da casa */}
      <div className="w-full flex items-center justify-end gap-x-2">
        <div className="max-w-[80px] md:max-w-[160px]">
          <p className="text-xs md:text-sm font-bold text-slate-700 text-right truncate" title={data?.homeTeam?.name}>
            {data?.homeTeam?.name}
          </p>
        </div>
        <div className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] min-w-[30px] relative bg-white/5 rounded-full p-1 shadow-sm flex justify-center items-center">
          <Image
            src={data?.homeTeam?.crest! || "/placeholder.svg"}
            alt={data?.homeTeam?.name!}
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Placar/Horário */}
      <div className="m-auto px-2 md:px-3 py-1.5 flex justify-center items-center gradient-bg rounded-md shadow-md text-center min-w-[60px]">
        {data?.status === "FINISHED" ? (
          <p className="text-slate-700 text-xs font-bold">
            {data?.score?.fullTime.home} : {data?.score?.fullTime?.away}
          </p>
        ) : (
          <p className="text-slate-700 text-xs font-bold">{getDate}</p>
        )}
      </div>

      {/* Time visitante */}
      <div className="w-full flex items-center justify-start gap-x-2">
        <div className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] min-w-[30px] relative bg-white/5 rounded-full p-1 shadow-sm flex justify-center items-center">
          <Image
            src={data?.awayTeam?.crest! || "/placeholder.svg"}
            alt={data?.awayTeam?.name!}
            fill
            className="object-contain"
          />
        </div>
        <div className="max-w-[80px] md:max-w-[160px]">
          <p className="text-xs md:text-sm font-bold text-slate-700 text-left truncate" title={data?.awayTeam?.name}>
            {data?.awayTeam?.name}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Matches