import { scrapData } from "@/utils/scraper";
import { cookies } from "next/headers";

export const getTeamsFixtures = async (teamSlug = "") => {
  try {
    const fixtures = await scrapData(teamSlug);
    const clientTimeStamp = cookies().get("dateTime").value;
    console.log("debug clientTimeStamp", clientTimeStamp, cookies().getAll());
    const thisMonthFixtures = fixtures.filter((fixture) => {
      let currentMonth;
      if (clientTimeStamp) {
        currentMonth = new Date(clientTimeStamp).getMonth();
      } else {
        currentMonth = new Date().getMonth();
      }
      const fixtureMonth = new Date(fixture.time).getMonth();
      return fixtureMonth <= currentMonth;
    });
    console.log('debug fixtures', fixtures);
    return thisMonthFixtures;
  } catch (error) {
    console.log(`Scraping error for ${teamSlug}: `, error);
  }
};
