import { filterLeague } from "@/api"
import Status from "@/components/status"


const LigueOne = async () => {
  const getLigue1 = await filterLeague('Ligue 1');
  const matchesList = Array.isArray(getLigue1) ? getLigue1 : [];
  
  return (
    <div>
      <Status matchesList={matchesList} matchesListfinished={[]} />
    </div>
  );
}

export default LigueOne;