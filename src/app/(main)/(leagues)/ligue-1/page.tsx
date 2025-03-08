import { filterLeague } from "@/api"
import Status from "@/components/status"


const LigueOne = async () => {
  const getLigue1 = await filterLeague('Ligue 1')
  return (
    <div >
      <Status matchesList={getLigue1} matchesListfinished={[]} />
    </div>
  )
}

export default LigueOne