import {
  getMatchesFootball,
  getMatchesFootballFinished,
  getUpcomingMatchesNext3Days,
  getStandings,
} from "@/api/index";
import Status from "@/components/status";
import StandingsWidget from "@/components/standingsWidget";
import { mainLeagues } from "@/utils/leagues";
import type { Standing } from "@/types";

export default async function Home() {
  const getDatas = await getMatchesFootball();
  const getDatasFinished = await getMatchesFootballFinished();
  const getUpcomingMatches = await getUpcomingMatchesNext3Days();

  const standingsPromises = mainLeagues.map((league) => getStandings(league.code));
  const standingsResults = await Promise.all(standingsPromises);
  const validStandings = standingsResults
    .map((result) => result?.standings?.find((s) => s.type === "TOTAL"))
    .filter((s): s is Standing => s !== undefined);

  const matchesDatas = getDatas?.matches || [];
  const matchesDatasFinished = getDatasFinished?.matches || [];
  const matchesUpcoming = (getUpcomingMatches?.matches || []).filter(
    (match) => match.status === "SCHEDULED" || match.status === "TIMED"
  );

   return (
    <div className="flex flex-col lg:flex-row gap-6">
      <div className="flex-1 bg-slate-200 p-6 rounded-lg shadow-sm -mx-2 md:mx-0">
        <Status
          matchesList={matchesDatas}
          matchesListfinished={matchesDatasFinished}
          matchesUpcoming={matchesUpcoming}
        />
      </div>
      <div className="hidden lg:block w-full lg:w-[300px]">
        <StandingsWidget initialStandings={validStandings} />
      </div>
    </div>
  );
}