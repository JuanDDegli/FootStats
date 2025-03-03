import { filterLeague } from "@/api"
import Status from "@/components/status"
import React from "react"

const English = async () => {
  const getEnglishLeague = await filterLeague('Premier League"')
  return (
    <div >
      <Status matchesList={getEnglishLeague} matchesListfinished={[]} />
    </div>
  )
}

export default English