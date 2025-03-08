import { filterLeague } from "@/api"
import Status from "@/components/status"
import React from "react"

const English = async () => {
  const getEnglishLeague = await filterLeague('Premier League');
  const matchesList = Array.isArray(getEnglishLeague) ? getEnglishLeague : [];
  
  return (
    <div>
      <Status matchesList={matchesList} matchesListfinished={[]} />
    </div>
  );
}

export default English