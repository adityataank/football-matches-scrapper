import { Children } from "react";

import EmptySection from "@/components/EmptySection";
import FixtureCard from "@/components/FixtureCard";

import { getTeamsFixtures } from "@/operations/getTeamsFixtures";
import { TEAMS } from "@/utils/constants";

async function TeamFixtures({ params: { teamSlug } }) {
  const fixtures = await getTeamsFixtures(teamSlug);

  const { name } = TEAMS.find((team) => team.code === teamSlug);

  const emptyText = `${name} is not playing any game this month.`;

  return Boolean(fixtures?.length) ? (
    <div className="flex flex-col gap-5 md:grid md:grid-flow-row md:grid-cols-3 md:gap-5">
      {Children.toArray(
        fixtures?.map((fixture) => <FixtureCard {...fixture} />)
      )}
    </div>
  ) : (
    <EmptySection text={emptyText} />
  );
}

export default TeamFixtures;
