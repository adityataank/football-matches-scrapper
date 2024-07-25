import * as cheerio from "cheerio";

export const scrapData = async (teamSlug = "") => {
  const ROOT_URL = teamSlug
    ? `https://onefootball.com/en/team/${teamSlug}/fixtures`
    : "https://onefootball.com/en/matches";

  const response = await fetch(ROOT_URL, { method: "get" }).then(async (res) =>
    res.text()
  );

  const fixtures = [];

  const $ = cheerio.load(response);

  // Select elements with a class that contains 'MatchCardsListsAppender_container__'
  const elements = teamSlug
    ? $('div[class*="MatchCardsListsAppender_container__"]')
        .children()
        .first()
        .find('article[class*="SimpleMatchCard_simpleMatchCard__"]')
        .find('div[class*="SimpleMatchCard_simpleMatchCard__content__"]')
    : $('article[class^="SimpleMatchCard_simpleMatchCard__"]');

  elements.each((index, element) => {
    const [homeTeam, awayTeam] = $(element)
      .find('div[class*="SimpleMatchCard_simpleMatchCard__teamsContent__"]')
      .children();

    const [homeTeamCrest, awayTeamCrest] = getTeamCrests([
      $(homeTeam),
      $(awayTeam),
    ]);

    const [homeTeamName, awayTeamName] = getTeamNames([
      $(homeTeam),
      $(awayTeam),
    ]);

    const time = $(element).find("time").attr("datetime");

    fixtures.push({
      home_team: { name: homeTeamName, crest: homeTeamCrest },
      away_team: { name: awayTeamName, crest: awayTeamCrest },
      time,
    });
  });

  return fixtures;
};

const getTeamCrests = (teams = []) => {
  return teams.map((team) => team.find("img").attr("src"));
};

const getTeamNames = (teams = []) => {
  return teams.map((team) =>
    team
      .find('span[class*="SimpleMatchCardTeam_simpleMatchCardTeam__name__"]')
      .text()
  );
};
