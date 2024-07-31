"use client";

import { MONTH_MAPPING } from "@/utils/constants";

const MonthHeading = () => {
  const currentMonth = new Date().getMonth() + 1;
  return (
    <h4 className="font-medium text-lg my-5 md:text-xl">
      Fixtures for{" "}
      <b className="font-extrabold">
        {MONTH_MAPPING[currentMonth].toUpperCase()}
      </b>{" "}
      month
    </h4>
  );
};

export default MonthHeading;
