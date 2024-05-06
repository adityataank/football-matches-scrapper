import FixtureCard from "@/components/FixtureCard";
import { getTeamsFixtures } from "@/operations/getTeamsFixtures";
import { Children } from "react";

async function TeamFixtures({ params: { teamSlug } }) {
  const fixtures = await getTeamsFixtures(teamSlug);


  return (
    <div className="flex flex-col gap-5">
      {Children.toArray(
        fixtures.map((fixture) => <FixtureCard {...fixture} />)
      )}
    </div>
  );
}

export default TeamFixtures;
