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

export type newsType = {
    title: string,
    description: string,
    url: string,
    urlToImage: string,
  }

  