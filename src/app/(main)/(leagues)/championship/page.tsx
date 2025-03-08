import { filterLeague } from '@/api'
import Status from '@/components/status'

const Championship = async () => {
  const getChampionship = await filterLeague('Championship');
  const matchesList = Array.isArray(getChampionship) ? getChampionship : [];
  
  return (
    <div>
      <Status matchesList={matchesList} matchesListfinished={[]} />
    </div>
  );
}

export default Championship;