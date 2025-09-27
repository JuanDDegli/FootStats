export type apiOptions = {
    next : any,
    headers: {
      "X-Auth-Token": string | any,
      "Content-Type": string | any
    },
  }

export type matchesArea = {
    id?: number,
    name: string,
  }
  
  export type matchesCompetition = {
    id?: number,
    name: string,
    emblem?: string,
    }

  export type matchesHomeTeam = {
        id?: number,
        name: string,
        crest: string,
    }

  export type matchesAwayTeam = {
        id?: number,
        name: string,
        crest: string,
    }

  export type scores = {
       fullTime:{
        home: number,
        away: number,
       },
       halfTime:{
        home: number,
        away: number,
         }, 
    }

    export interface matchesType {
      id: number
      utcDate: string
      status: string
      matchday: number
      stage: string
      group: string | null
      lastUpdated: string
      homeTeam: {
        id: number
        name: string
        shortName: string
        tla: string
        crest: string
      }
      awayTeam: {
        id: number
        name: string
        shortName: string
        tla: string
        crest: string
      }
      score: {
        winner: string | null
        duration: string
        fullTime: {
          home: number | null
          away: number | null
        }
        halfTime: {
          home: number | null
          away: number | null
        }
      }
      competition: {
        id: number
        name: string
        code: string
        type: string
        emblem: string
      }
    }
  // ... (mantenha todos os outros tipos no ficheiro)

export interface Team {
  id: number;
  name: string;
  crest: string;
}

export interface TableEntry {
  position: number;
  team: Team;
  playedGames: number;
  won: number;
  draw: number;
  lost: number;
  points: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
}

export interface Standing {
  stage: string;
  type: string;
  group: string | null;
  table: TableEntry[];
}

export interface StandingsResponse {
  standings: Standing[];
}

export interface Scorer {
  player: {
    id: number;
    name: string;
    firstName: string;
    lastName: string | null;
    dateOfBirth: string;
    nationality: string;
    position: string;
  };
  team: {
    id: number;
    name: string;
    crest: string;
  };
  goals: number;
  assists: number | null;
  penalties: number | null;
}

export interface ScorersResponse {
  scorers: Scorer[];
}

export interface LeagueInfo {
  id: number;
  name: string;
  href: string;
  logo: string;
  code: string;
  apiName: string;
}

export type newsType = {
  source: {
    id: string | null;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

export type newsResponse = {
  status: string;
  totalResults: number;
  articles: newsType[];
};