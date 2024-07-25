import { Children } from "react";
import Team from "@/components/Team";
import { TEAMS } from "@/utils/constants";
import Link from "next/link";

const FavoriteTeams = () => {
  return (
    <div className="flex overflow-auto snap-x snap-mandatory md:justify-evenly md:pt-1">
      {Children.toArray(
        TEAMS?.map((team) => (
          <Link
            href={`/team/${team.code}`}
            className="transition-transform active:scale-90 md:hover:-translate-y-1"
          >
            <Team {...team} />
          </Link>
        ))
      )}
    </div>
  );
};

function HomeLayout({ children }) {
  return (
    <div className="pt-20 md:pt-24">
      <FavoriteTeams />
      <h6 className="font-medium text-lg p-4 md:text-xl">
        Today&apos;s fixtures
      </h6>
      {children}
    </div>
  );
}

export default HomeLayout;
