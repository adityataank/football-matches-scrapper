import { Children } from "react";

import FixtureCard from "@/components/FixtureCard";

import { getTodaysFixtures } from "@/operations/todaysFixtures";
import EmptySection from "@/components/EmptySection";

async function HomePage() {
  const todaysFixtures = await getTodaysFixtures();

  return todaysFixtures?.length ? (
    <div className="p-4 pt-4 flex flex-col gap-5 overflow-auto max-h-[calc(100dvh-270px)] md:grid md:grid-flow-row md:grid-cols-3 md:gap-5">
      {Children.toArray(
        todaysFixtures?.map((fixture) => <FixtureCard {...fixture} />)
      )}
    </div>
  ) : (
    <EmptySection />
  );
}

export default HomePage;
