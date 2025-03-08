  import { filterLeague } from '@/api'
  import Status from '@/components/status'

  const SerieA = async () => {
    const getSerieA = await filterLeague('Serie A');
    const matchesList = Array.isArray(getSerieA) ? getSerieA : [];
    
    return (
      <div>
        <Status matchesList={matchesList} matchesListfinished={[]} />
      </div>
    );
  }
  export default SerieA