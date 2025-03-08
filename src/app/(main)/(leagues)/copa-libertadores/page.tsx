import { filterLeague } from "@/api"
import Status from "@/components/status"


const CopaLibertadores = async () => {
  const getCopaLibertadores = await filterLeague('Libertadores');
  const matchesList = Array.isArray(getCopaLibertadores) ? getCopaLibertadores : [];
  
  return (
    <div>
      <Status matchesList={matchesList} matchesListfinished={[]} />
    </div>
  );
}

export default CopaLibertadores