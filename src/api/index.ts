import type { apiOptions, matchesType } from "@/types"

const options: apiOptions = {
  next: { revalidate: 30 },
  headers: {
    "X-Auth-Token": process.env.NEXT_PUBLIC_API_KEY,
    "Content-Type": "application/json",
  },
}

export const getMatchesFootball = async () => {
  const matchData = await fetch("https://api.football-data.org/v4/matches", options)
  return matchData.json()
}

const todayDate = new Date()
const getDateMonth = new Date(todayDate.getTime())
getDateMonth.setDate(getDateMonth.getDate() - 1)
const year = getDateMonth.getFullYear()
const month = String(getDateMonth.getMonth() + 1).padStart(2, "0")
const day = String(getDateMonth.getDate()).padStart(2, "0")
const yesterday = `${year}-${month}-${day}`

export const getMatchesFootballFinished = async () => {
  const matchData = await fetch(`https://api.football-data.org/v4/matches?date=${yesterday}`, options)
  return matchData.json()
}

export const filterLeague = async (filterData:string) => {
  const getEnglishLeague = await getMatchesFootball()
  const filterPremierLeague:matchesType[] = getEnglishLeague?.matches
  const getData = filterPremierLeague.filter((item) => item.competition.name === filterData)
  return getData
}

export const getNewsInfo = async () => {
  const newsData = await fetch(`https://newsapi.org/v2/everything?apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}&q=soccer&pageSize=10`,{next:{revalidate:20}})
  return newsData.json()
}