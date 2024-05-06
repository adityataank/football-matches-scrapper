import { Children } from "react";
import Team from "@/components/Team";
import { TEAMS } from "@/utils/constants";
import Link from "next/link";

const FavoriteTeams = () => {
  return (
    <div className="flex overflow-auto snap-x snap-mandatory">
      {Children.toArray(
        TEAMS.map((team) => (
          <Link href={`/team/${team.code}`}>
            <Team {...team} />
          </Link>
        ))
      )}
    </div>
  );
};

function HomeLayout({ children }) {
  return (
    <div className="pt-20">
      <FavoriteTeams />
      <h6 className="font-medium text-lg p-4">Today&apos;s fixtures</h6>
      {children}
    </div>
  );
}

export default HomeLayout;
