import {
  getMatchesFootball,
  getMatchesFootballFinished,
  getUpcomingMatchesNext3Days,
} from "@/api/index";
import Status from "@/components/status";

export default async function Home() {
  const getDatas = await getMatchesFootball();
  const getDatasFinished = await getMatchesFootballFinished();
  const getUpcomingMatches = await getUpcomingMatchesNext3Days();

  const matchesDatas = getDatas?.matches || [];
  const matchesDatasFinished = getDatasFinished?.matches || [];
  
  const matchesUpcoming = (getUpcomingMatches?.matches || []).filter(
    (match) => match.status === "SCHEDULED" || match.status === "TIMED"
  );

  return (
    <section className="bg-slate-200 p-6 rounded-lg shadow-sm">
      <Status
        matchesList={matchesDatas}
        matchesListfinished={matchesDatasFinished}
        matchesUpcoming={matchesUpcoming}
      />
    </section>
  );
}