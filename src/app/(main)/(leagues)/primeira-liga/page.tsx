import { filterLeague } from "@/api"
import Status from "@/components/status"


const PrimeiraLiga = async () => {
  const getPrimeiraLiga = await filterLeague('Primeira Liga');
  const matchesList = Array.isArray(getPrimeiraLiga) ? getPrimeiraLiga : [];
  
  return (
    <div>
      <Status matchesList={matchesList} matchesListfinished={[]} />
    </div>
  );
}

export default PrimeiraLiga;