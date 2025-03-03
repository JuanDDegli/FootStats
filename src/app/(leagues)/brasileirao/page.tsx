import { filterLeague } from '@/api'
import Status from '@/components/status'


const Brasileirao = async () => {
  const getBrasileirao = await filterLeague('Brasileirao')
  return (
    <div >
      <Status matchesList={getBrasileirao} matchesListfinished={[]} />
    </div>
  )
}

export default Brasileirao