"use client";

import { useEffect } from "react";
import Image from "next/image";
import { usePathname, useParams } from "next/navigation";

import BackButton from "../BackButton";

import { TEAMS } from "@/utils/constants";

function Navbar() {
  const pathname = usePathname();
  const { teamSlug } = useParams();

  const isHomePage = pathname.startsWith("/home");

  const { name, crest } =
    (isHomePage ? {} : TEAMS.find((team) => team.code === teamSlug)) ?? {};

  useEffect(() => {
    const dateTimeString = new Date().toISOString();
    document.cookie = `dateTime=${dateTimeString}`;
  }, []);

  return (
    <header className="h-16 w-screen fixed top-0 bg-header-bg flex items-center gap-2 px-6 backdrop-filter backdrop-blur-sm md:h-20">
      {!isHomePage && <BackButton />}
      {isHomePage ? (
        <h3 className="font-semibold text-lg md:text-xl">Football Fixtures</h3>
      ) : name ? (
        <div className="flex items-center gap-2 justify-between w-full h-full py-1">
          <h4 className="font-extrabold text-lg md:text-xl">
            {name?.toUpperCase()}
          </h4>
          <Image
            src={crest}
            width={36}
            height={36}
            alt={name}
            className="w-auto h-[inherit]"
          />
        </div>
      ) : null}
    </header>
  );
}

export default Navbar;
