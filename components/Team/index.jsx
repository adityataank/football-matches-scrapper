"use client";
import Image from "next/image";

import { Analytics } from "@/utils/analytics";

function Team(props) {
  const { name = "", crest = "" } = props ?? {};
  const handleClick = () => {
    Analytics.track("crest-click", {
      team_name: name,
    });
  };

  return (
    <div
      onClick={handleClick}
      className="min-w-32 flex flex-col items-center gap-3 min-h-28 snap-center"
    >
      <div className="w-16 h-16 grid place-items-center">
        <Image
          src={crest}
          width={64}
          height={64}
          alt={name}
          className="object-fit aspect-square"
        />
      </div>
      <p className="text-center text-sm md:text-base">{name}</p>
    </div>
  );
}

export default Team;
