import {
  getMatchesFootball,
  getMatchesFootballFinished,
  getUpcomingMatchesNext3Days,
} from "@/api";
import Status from "@/components/status";

const English = async () => {
  try {
    const getDatas = await getMatchesFootball();
    const getDatasFinished = await getMatchesFootballFinished();
    const upcoming = await getUpcomingMatchesNext3Days();

    const matchesDatas = (getDatas?.matches || []).filter(
      (match) => match.competition?.name === "Premier League"
    );
    const matchesDatasFinished = (getDatasFinished?.matches || []).filter(
      (match) => match.competition?.name === "Premier League"
    );
    const matchesUpcoming = (upcoming?.matches || []).filter(
      (match) =>
        (match.status === "SCHEDULED" || match.status === "TIMED") &&
        match.competition?.name === "Premier League"
    );

    return (
      <div>
        <Status
          matchesList={matchesDatas}
          matchesListfinished={matchesDatasFinished}
          matchesUpcoming={matchesUpcoming}
          leagueTitle="Premier League"
        />
      </div>
    );
  } catch (error) {
    console.error("Error fetching Premier League data:", error);
    return (
      <section className="p-4">
        <div className="text-center py-8">
          <h2 className="text-xl font-semibold mb-2">
            Unable to load Premier League matches
          </h2>
          <p className="text-gray-600">Please try again later</p>
        </div>
      </section>
    );
  }
};

export default English;