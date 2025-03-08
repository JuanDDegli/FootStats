import { filterLeague } from "@/api";
import Status from "@/components/status";

const Bundesliga = async () => {
  const getBundesliga = await filterLeague("Bundesliga");

  // Verifique se os dados retornados são um array válido
  const matchesList = Array.isArray(getBundesliga) ? getBundesliga : [];

  return (
    <div>
      <Status matchesList={matchesList} matchesListfinished={[]} />
    </div>
  );
};

export default Bundesliga;
