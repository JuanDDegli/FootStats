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
    <section>
      <Status
        matchesList={matchesDatas}
        matchesListfinished={matchesDatasFinished}
        matchesUpcoming={matchesUpcoming}
      />
    </section>
  );
}