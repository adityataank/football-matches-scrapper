"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import BackButton from "../BackButton";

function Navbar() {
  const pathname = usePathname();

  const isHomePage = pathname.startsWith("/home");

  return (
    <header className="h-16 w-screen fixed top-0 bg-header-bg flex items-center gap-2 px-6">
      {!isHomePage && <BackButton />}
      <h3 className="font-semibold">Football Fixtures</h3>
    </header>
  );
}

export default Navbar;
