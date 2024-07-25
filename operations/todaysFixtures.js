import { scrapData } from "@/utils/scraper";

import { TEAMS } from "@/utils/constants";

export const getTodaysFixtures = async () => {
  try {
    const todaysFixtures = await scrapData();

    const filteredList = todaysFixtures.filter((fixture) => {
      const { home_team, away_team } = fixture;
      const favTeams = TEAMS.flatMap((team) => team.name);
      return (
        favTeams.includes(home_team.name) || favTeams.includes(away_team.name)
      );
    });
    return filteredList;
  } catch (error) {
    console.log("Scraping error", error);
  }
};
