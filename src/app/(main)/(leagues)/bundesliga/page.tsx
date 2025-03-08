import { filterLeague } from "@/api";
import Status from "@/components/status";
import { matchesType } from "@/types";

const Bundesliga = async () => {
  const getBundesliga = await filterLeague("Bundesliga");

  // Verifique se os dados retornados são um array válido
  const matchesList = Array.isArray(getBundesliga) ? getBundesliga : [];

  // Verifique a saída para garantir que matchesList não seja undefined
  console.log(matchesList);

  const matchesListfinished: matchesType[] = [];

  return (
    <div>
      <Status matchesList={matchesList} matchesListfinished={matchesListfinished} />
    </div>
  );
};

export default Bundesliga;
