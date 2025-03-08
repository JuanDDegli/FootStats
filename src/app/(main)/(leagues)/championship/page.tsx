import { filterLeague } from '@/api'
import Status from '@/components/status'

const Championship = async () => {
  const getChampionship = await filterLeague('Championship')
  return (
    <div >
      <Status matchesList={getChampionship} matchesListfinished={[]} />
    </div>
  )
}

export default Championship