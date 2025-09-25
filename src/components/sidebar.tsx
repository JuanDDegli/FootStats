import { FC } from "react";
import LinkSide from "./linkSide";

const leagues = [
    { id: 1, name: "Premier League", href: "premier-league", logo: "/logos/premier_league.webp" },
    { id: 2, name: "La Liga", href: "la-liga", logo: "/logos/laliga.png" },
    { id: 3, name: "Bundesliga", href: "bundesliga", logo: "/logos/bundesliga.webp" },
    { id: 4, name: "Serie A Tim", href: "serie-a ", logo: "/logos/serie_a.webp" },
    { id: 5, name: "Ligue 1", href: "ligue-1", logo: "/logos/ligue_1.webp" },
    { id: 6, name: "Primeira Liga", href: "primeira-liga", logo: "/logos/liga_portugal.webp" },
    { id: 7, name: "Championship", href: "championship", logo: "/logos/championship.webp" },
    { id: 8, name: "Brasileirão", href: "brasileirao", logo: "/logos/brazilian_serie_a.webp" },
    { id: 9, name: "Champions League", href: "champions-league", logo: "/logos/champions-league.png" },
    { id: 10, name: "Libertadores", href: "copa-libertadores", logo: "/logos/copa_libertadores.webp" },
];

const Sidebar: FC = () => {
    return (
        <section className="px-2 w-full md:w-72 py-2 bg-white border-2 rounded-md md:h-screen">
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
                            <LinkSide href={league.href} name={league?.name} src={league?.logo} />
                        </div>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Sidebar;