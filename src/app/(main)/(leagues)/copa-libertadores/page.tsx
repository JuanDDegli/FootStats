import { filterLeague } from "@/api"
import Status from "@/components/status"


const CopaLibertadores = async () => {
  const getCopaLibertadores = await filterLeague('Libertadores')
  return (
    <div >
      <Status matchesList={getCopaLibertadores} matchesListfinished={[]} />
    </div>
  )
}

export default CopaLibertadores