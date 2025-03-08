import { filterLeague } from "@/api"
import Status from "@/components/status"


const PrimeiraLiga = async () => {
  const getPrimeiraLiga = await filterLeague('Primeira Liga')
  return (
    <div >
      <Status matchesList={getPrimeiraLiga} matchesListfinished={[]} />
    </div>
  )
}

export default PrimeiraLiga