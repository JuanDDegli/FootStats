import { filterLeague } from "@/api"
import Status from "@/components/status"


const LaLiga = async () => {
  const getLaLiga = await filterLeague('Primera Division');
  const matchesList = Array.isArray(getLaLiga) ? getLaLiga : [];
  
  return (
    <div>
      <Status matchesList={matchesList} matchesListfinished={[]} />
    </div>
  );
}

export default LaLiga