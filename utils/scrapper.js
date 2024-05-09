import puppeteer from "puppeteer";

export const scrapData = async (teamSlug = "") => {

  const ROOT_URL = teamSlug
    ? `https://onefootball.com/en/team/${teamSlug}/fixtures`
    : "https://onefootball.com/en/matches";

  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: null,
  });

  // Open a new page
  const page = await browser.newPage();

  await page.goto(ROOT_URL, {
    waitUntil: "domcontentloaded",
  });

  const fixtures = await page.evaluate((teamSlug = false) => {
    const fixturesList = teamSlug
      ? document
          .querySelectorAll(
            'div[class^="MatchCardsListsAppender_container__"]'
          )[0]
          .firstChild.querySelectorAll("article")
      : document.querySelectorAll(
          'article[class^="SimpleMatchCard_simpleMatchCard__"]'
        );

    return Array.from(fixturesList)?.map((fixture) => {
      const [homeTeam, awayTeam] = Array.from(
        fixture.firstChild.querySelectorAll(
          'span[class^="SimpleMatchCardTeam_simpleMatchCardTeam__name__"]'
        )
      )?.map((element) => element?.innerText);

      const [homeTeamCrest, awayTeamCrest] = Array.from(
        fixture.firstChild.querySelectorAll(
          'img[class^="ImageWithSets_of-image__img__"]'
        )
      )?.map((element) => element?.attributes?.["src"]?.value);

      const time =
        fixture.querySelectorAll("time")?.[0]?.attributes?.["datetime"]?.value;
      return {
        home_team: { name: homeTeam, crest: homeTeamCrest },
        away_team: { name: awayTeam, crest: awayTeamCrest },
        time,
      };
    });
  });

  return fixtures;
};
