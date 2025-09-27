import type { matchesType } from "@/types";
import Image from "next/image";

const Matches = ({ data }: { data: matchesType }) => {
  const getDate = new Date(data?.utcDate).toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "America/Sao_Paulo",
  });

  return (
    <div className="flex items-center justify-between gap-x-3 px-4 min-h-[96px]">
      
      {/* Time da casa */}
      <div className="flex flex-1 items-center gap-x-2 justify-end min-w-0">
        <p className="text-xs md:text-sm font-bold text-slate-700 text-right truncate" title={data?.homeTeam?.name}>
          {data?.homeTeam?.name}
        </p>
        <div className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] flex-shrink-0 relative">
          <Image
            src={data?.homeTeam?.crest! || "/placeholder.svg"}
            alt={data?.homeTeam?.name!}
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Placar/Horário */}
      {/* CORREÇÃO: Adicionado flex-shrink-0 para garantir que esta coluna não seja esmagada. */}
      <div className="flex flex-col flex-shrink-0 items-center text-center gap-y-1">
        {data.matchday && (
          <p className="text-slate-500 text-[10px] font-bold uppercase tracking-wider pb-2">
            Rodada {data.matchday}
          </p>
        )}
        <div className="m-auto px-2 md:px-3 py-1.5 flex justify-center items-center gradient-bg rounded-md shadow-md min-w-[60px]">
          {data?.status === "FINISHED" ? (
            <p className="text-slate-700 text-xs font-bold whitespace-nowrap">
              {data?.score?.fullTime.home} : {data?.score?.fullTime?.away}
            </p>
          ) : (
            <p className="text-slate-700 text-xs font-bold">{getDate}</p>
          )}
        </div>
      </div>

      {/* Time visitante */}
      <div className="flex flex-1 items-center gap-x-2 justify-start min-w-0">
        <div className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] flex-shrink-0 relative">
          <Image
            src={data?.awayTeam?.crest! || "/placeholder.svg"}
            alt={data?.awayTeam?.name!}
            fill
            className="object-contain"
          />
        </div>
        <p className="text-xs md:text-sm font-bold text-slate-700 text-left truncate" title={data?.awayTeam?.name}>
          {data?.awayTeam?.name}
        </p>
      </div>

    </div>
  );
};

export default Matches;