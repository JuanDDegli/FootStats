import { filterLeague } from "@/api"
import Status from "@/components/status"


const LaLiga = async () => {
  const getLaLiga = await filterLeague('Primera Division')
  return (
    <div >
      <Status matchesList={getLaLiga} matchesListfinished={[]} />
    </div>
  )
}

export default LaLiga