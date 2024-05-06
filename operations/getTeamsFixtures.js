import { scrapData } from "@/utils/scrapper";

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
    console.log(`Scrapping error for ${teamSlug}: `, error);
  }
};
