import { getMatchesFootball, getMatchesFootballFinished } from '@/api/index';
import Status from '@/components/status';

export default async function Home() {

const getDatas = await getMatchesFootball();
const getDatasFinished = await getMatchesFootballFinished();

const matchesDatas = getDatas?.matches || [];
const matchesDatasFinished = getDatasFinished?.matches || [];

  return (
    <section className="px-2 md:px-4 md:w-[600px]"> 
      <div className="flex justify-between items-center mb-4 md:mb-2">
      <h1 className="text-md md:text-xl text-slate-800 font-bold">
        Partidas
      </h1>
    </div>
    <Status matchesList={matchesDatas} matchesListfinished={matchesDatasFinished}/>
  </section>
  );
}
