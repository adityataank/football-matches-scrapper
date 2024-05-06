import { Children } from "react";
import Image from "next/image";

import FixtureCard from "@/components/FixtureCard";
import NoMatchesLogo from "@/public/no-matches.svg";

import { getTodaysFixtures } from "@/operations/todaysFixtures";

async function HomePage() {
  const todaysFixtures = await getTodaysFixtures();
  return (
    <div className="p-4 pt-4 flex flex-col">
      {todaysFixtures?.length ? (
        Children.toArray(
          todaysFixtures.map((fixture) => <FixtureCard {...fixture} />)
        )
      ) : (
        <div className="m-auto flex flex-col gap-7 items-center pt-8">
          <Image
            src={NoMatchesLogo}
            width={120}
            height={120}
            alt="no-matches-today"
            className="w-40 h-40"
          />
          <p className="text-center">Your favorite teams aren&apos;t playing any games today.</p>
        </div>
      )}
    </div>
  );
}

export default HomePage;
