import type { apiOptions, matchesType, StandingsResponse } from "@/types";

const options: apiOptions = {
  next: { revalidate: 30 },
  headers: {
    "X-Auth-Token": process.env.NEXT_PUBLIC_API_KEY ?? "",
    "Content-Type": "application/json",
  },
};

export async function getMatchesFootball(): Promise<{ matches: matchesType[] }> {
  const response = await fetch("https://api.football-data.org/v4/matches", options);
  return response.json();
}

// Função para buscar jogos finalizados de até 3 dias atrás
export async function getMatchesFootballFinished(): Promise<{ matches: matchesType[] }> {
  const now = new Date();
  const threeDaysAgo = new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000);
  const yesterdayDate = new Date(now.getTime() - 1 * 24 * 60 * 60 * 1000);

  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const dateFrom = formatDate(threeDaysAgo);
  const dateTo = formatDate(yesterdayDate);
  
  const response = await fetch(`https://api.football-data.org/v4/matches?dateFrom=${dateFrom}&dateTo=${dateTo}`, options);
  return response.json();
}

export async function getStandings(leagueCode: string): Promise<StandingsResponse | null> {
  try {
    const response = await fetch(`https://api.football-data.org/v4/competitions/${leagueCode}/standings`, options);
    if (!response.ok) {
      console.error(`Error fetching standings for ${leagueCode}: ${response.statusText}`);
      return null;
    }
    const data: StandingsResponse = await response.json();
    return data;
  } catch (error) {
    console.error(`Failed to fetch standings for ${leagueCode}:`, error);
    return null;
  }
}

export async function filterLeague(filterData: string): Promise<matchesType[]> {
  const data = await getMatchesFootball();
  const matches = data?.matches ?? [];
  return matches.filter((item) => item.competition.name === filterData);
}

export async function filterLeagueFinished(leagueName: string): Promise<matchesType[]> {
  const data = await getMatchesFootballFinished();
  const matches = data?.matches ?? [];
  return matches.filter((match) => match.competition?.name === leagueName);
}

export async function getUpcomingMatchesNext3Days(): Promise<{ matches: matchesType[] }> {
  const now = new Date();
  const threeDaysLater = new Date(now.getTime() + 10 * 24 * 60 * 60 * 1000);

  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const dateFrom = formatDate(now);
  const dateTo = formatDate(threeDaysLater);

  const response = await fetch(
    `https://api.football-data.org/v4/matches?dateFrom=${dateFrom}&dateTo=${dateTo}`,
    options
  );

  const data = await response.json();
  
  return data;
}