import { filterLeague } from "@/api"
import Status from "@/components/status"


const ChampionsLeague = async () => {
  const getChampionsLeague = await filterLeague('UEFA Champions League')
  return (
    <div >
      <Status matchesList={getChampionsLeague} matchesListfinished={[]} />
    </div>
  )
}

export default ChampionsLeague