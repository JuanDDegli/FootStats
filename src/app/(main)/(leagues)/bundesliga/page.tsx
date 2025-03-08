import { filterLeague } from "@/api"
import Status from "@/components/status"

const Bundesliga = async () => {
  const getBundesliga = await filterLeague("Bundesliga")

  return (
    <div >
      <Status matchesList={getBundesliga} matchesListfinished={[]} />
    </div>
  )
}

export default Bundesliga