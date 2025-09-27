import { FC } from "react";
import LinkSide from "./linkSide";
import { leagues } from "@/utils/leagues";  

const Sidebar: FC = () => {
    return (
        // CORREÇÃO: Adicionada a classe 'h-full'.
        // 'h-full' funciona para o telemóvel, e 'md:h-screen' continua a funcionar para o desktop.
        <section className="px-2 w-full md:w-72 py-2 bg-white border-2 rounded-md md:h-screen h-full">
            <div className="mb-4">
                <h1 className="font-bold text-xl mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-move">
                    Leagues
                </h1>
                <ul className="space-y-4">
                    {leagues.map((league) => (
                        <div
                            key={league.id}
                            className="flex text-slate-700 items-center cursor-pointer font-bold rounded-md transition duration-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-500 hover:text-white hover:scale-105"
                        >
                            <LinkSide href={`/${league.href}`} name={league?.name} src={league?.logo} />
                        </div>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Sidebar;