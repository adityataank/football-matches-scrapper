import Image from "next/image";

import NoMatchesLogo from "@/public/no-matches.svg";

const EmptySection = ({ text = "" }) => {
  return (
    <div className="m-auto flex flex-col gap-7 items-center p-3 pt-8 md:pt-12">
      <Image
        src={NoMatchesLogo}
        width={120}
        height={120}
        alt="no-matches-today"
        className="w-40 h-40"
      />
      <p className="text-center">
        {text || "Your favorite teams aren't playing any games today."}
      </p>
    </div>
  );
};

export default EmptySection;
