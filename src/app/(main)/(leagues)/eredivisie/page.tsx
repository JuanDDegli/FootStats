import { filterLeague } from '@/api'
import Status from '@/components/status'

const Eredivisie = async () => {
  const getEredivisie = await filterLeague('Eredivisie');
  const matchesList = Array.isArray(getEredivisie) ? getEredivisie : [];
  
  return (
    <div>
      <Status matchesList={matchesList} matchesListfinished={[]} />
    </div>
  );
}

export default Eredivisie;