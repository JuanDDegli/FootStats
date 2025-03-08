  import { filterLeague } from '@/api'
  import Status from '@/components/status'

  const SerieA= async () => {
    const getSerieA= await filterLeague('Serie A')
    return (
      <div >
        <Status matchesList={getSerieA} matchesListfinished={[]} />
      </div>
    )
  }

  export default SerieA