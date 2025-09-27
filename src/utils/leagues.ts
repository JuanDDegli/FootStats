import type { LeagueInfo } from "@/types"; // Importe a nova interface

// Mapeia nossas rotas (href) para os nomes e códigos da API
// Aplique o tipo aqui para garantir que todos os objetos sigam a mesma estrutura
export const leagues: LeagueInfo[] = [
    { id: 2021, name: "Premier League", href: "premier-league", logo: "/logos/premier_league.webp", code: "PL", apiName: "Premier League" },
    { id: 2014, name: "La Liga", href: "la-liga", logo: "/logos/laliga.png", code: "PD", apiName: "Primera Division" },
    { id: 2019, name: "Serie A", href: "serie-a", logo: "/logos/serie_a.webp", code: "SA", apiName: "Serie A" },
    { id: 2002, name: "Bundesliga", href: "bundesliga", logo: "/logos/bundesliga.webp", code: "BL1", apiName: "Bundesliga" },
    { id: 2015, name: "Ligue 1", href: "ligue-1", logo: "/logos/ligue_1.webp", code: "FL1", apiName: "Ligue 1" },
    { id: 2017, name: "Primeira Liga", href: "primeira-liga", logo: "/logos/liga_portugal.webp", code: "PPL", apiName: "Primeira Liga" },
    { id: 2016, name: "Championship", href: "championship", logo: "/logos/championship.webp", code: "ELC", apiName: "Championship" },
    { id: 2013, name: "Brasileirão", href: "brasileirao", logo: "/logos/brazilian_serie_a.webp", code: "BSA", apiName: "Campeonato Brasileiro Série A" },
    { id: 2001, name: "Champions League", href: "champions-league", logo: "/logos/champions-league.png", code: "CL", apiName: "UEFA Champions League" },
    { id: 2003, name: "Libertadores", href: "copa-libertadores", logo: "/logos/copa_libertadores.webp", code: "CLI", apiName: "Copa Libertadores" },
];

export const mainLeagues = [
  { name: "Premier League", code: "PL" },
  { name: "La Liga", code: "PD" },
  { name: "Brasileirão", code: "BSA" },
  { name: "Bundesliga", code: "BL1" },
  { name: "Serie A", code: "SA" },
];