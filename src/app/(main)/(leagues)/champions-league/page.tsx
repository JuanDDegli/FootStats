import { filterLeague } from "@/api"
import Status from "@/components/status"


const ChampionsLeague = async () => {
  const getChampionsLeague = await filterLeague('UEFA Champions League');
  const matchesList = Array.isArray(getChampionsLeague) ? getChampionsLeague : [];
  
  return (
    <div>
      <Status matchesList={matchesList} matchesListfinished={[]} />
    </div>
  );
}

export default ChampionsLeague;