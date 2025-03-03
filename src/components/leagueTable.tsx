import type { matchesType } from "@/types"
import Matches from "./matches"

const LeagueTable = ({ data }: { data: matchesType }) => {
  return (
    <div className="py-3 px-2 md:px-3 rounded-lg flex flex-col mb-2 mt-6 h-[120px]">
      <Matches data={data} />
    </div>
  )
}

export default LeagueTable

