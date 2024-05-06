import Image from "next/image";

import { TEAMS } from "@/utils/constants";

function TeamFixtureLayout({ params: { teamSlug }, children }) {
  const currentMonth = new Date().toDateString().split(" ").at(1);
  const { name, crest } = TEAMS.find((team) => team.code === teamSlug);
  return (
    <div className="p-4 pt-20">
      <div className="flex items-center gap-2">
        <Image src={crest} width={30} height={30} alt={name} />
        <h4 className="font-extrabold text-lg">{name.toUpperCase()}</h4>
      </div>
      <h4 className="font-medium text-lg my-5">
        Fixtures for{" "}
        <b className="font-extrabold">{currentMonth.toUpperCase()}</b> month
      </h4>
      {children}
    </div>
  );
}

export default TeamFixtureLayout;
