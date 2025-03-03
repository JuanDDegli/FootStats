import { filterLeague } from '@/api'
import Status from '@/components/status'

const Eredivisie = async () => {
  const getEredivisie = await filterLeague('Eredivisie')
  return (
    <div >
      <Status matchesList={getEredivisie} matchesListfinished={[]} />
    </div>
  )
}

export default Eredivisie