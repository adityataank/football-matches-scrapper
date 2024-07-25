import { scrapData } from "@/utils/scraper";

export const getTeamsFixtures = async (teamSlug = "") => {
  try {
    const fixtures = await scrapData(teamSlug);
    const thisMonthFixtures = fixtures.filter((fixture) => {
      const currentMonth = new Date().getMonth();
      const fixtureMonth = new Date(fixture.time).getMonth();
      return fixtureMonth <= currentMonth;
    });
    return thisMonthFixtures;
  } catch (error) {
    console.log(`Scraping error for ${teamSlug}: `, error);
  }
};
