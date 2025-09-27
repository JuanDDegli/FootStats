"use client"

import { useState } from "react"
import type { Standing } from "@/types"
import StandingsTable from "./standingsTable"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { mainLeagues } from "@/utils/leagues"

interface StandingsWidgetProps {
  initialStandings: Standing[]; 
}

const StandingsWidget = ({ initialStandings }: StandingsWidgetProps) => {
  const [standings] = useState<Standing[]>(initialStandings);
  const [currentLeagueIndex, setCurrentLeagueIndex] = useState(0);

  const nextLeague = () => {
    setCurrentLeagueIndex((prevIndex) => (prevIndex + 1) % mainLeagues.length);
  };

  const prevLeague = () => {
    setCurrentLeagueIndex((prevIndex) => (prevIndex - 1 + mainLeagues.length) % mainLeagues.length);
  };

  const currentStanding = standings[currentLeagueIndex];
  const currentLeague = mainLeagues[currentLeagueIndex];

  return (
    <div className="w-full md:w-[300px] border-2 bg-white rounded-md px-4 py-4 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-move font-bold">
          Classificações
        </h1>
        <div className="flex items-center gap-2">
          <button onClick={prevLeague} className="p-1 rounded-full hover:bg-gray-200 transition-colors">
            <ChevronLeft size={20} />
          </button>
          <button onClick={nextLeague} className="p-1 rounded-full hover:bg-gray-200 transition-colors">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
      
      {/* Lógica de exibição simplificada */}
      {currentStanding && currentStanding.table ? (
        <div>
          <h2 className="font-bold text-md text-slate-800 mb-2">{currentLeague.name}</h2>
          <StandingsTable table={currentStanding.table} />
        </div>
      ) : (
        <div>
          <h2 className="font-bold text-md text-slate-800 mb-2">{currentLeague.name}</h2>
          <p className="text-sm text-gray-500">Não foi possível carregar a tabela.</p>
        </div>
      )}
    </div>
  );
};

export default StandingsWidget;