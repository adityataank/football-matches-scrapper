import Image from "next/image";

import { MONTH_MAPPING } from "@/utils/constants";

function TeamFixtureLayout({ children }) {
  const currentMonth = new Date().getMonth() + 1;
  return (
    <div className="p-4 pt-16 md:pt-20">
      <h4 className="font-medium text-lg my-5 md:text-xl">
        Fixtures for{" "}
        <b className="font-extrabold">
          {MONTH_MAPPING[currentMonth].toUpperCase()}
        </b>{" "}
        month
      </h4>
      {children}
    </div>
  );
}

export default TeamFixtureLayout;
