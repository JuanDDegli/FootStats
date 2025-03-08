import { filterLeague } from "@/api";
import Status from "@/components/status";

const Bundesliga = async () => {
  const getBundesliga = await filterLeague("Bundesliga");
  const matchesList = Array.isArray(getBundesliga) ? getBundesliga : []; 

  return (
    <div>
      <Status matchesList={matchesList} matchesListfinished={[]} />
    </div>
  );
};

export default Bundesliga;
