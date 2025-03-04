import Image from "next/image";
import Link from "next/link";

import BackIcon from "@/public/arrow-right.svg";

import { Analytics } from "@/utils/analytics";

function BackButton() {
  const handleClick = () => {
    Analytics.track("back-click");
  };

  return (
    <Link
      href={"/home"}
      onClick={handleClick}
      className="transition-transform hover:-translate-x-1"
    >
      <Image
        src={BackIcon}
        width={20}
        height={20}
        alt="back"
        className="rotate-180 md:w-6 md:h-6"
      />
    </Link>
  );
}

export default BackButton;
