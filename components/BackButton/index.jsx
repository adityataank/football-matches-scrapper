import Image from "next/image";
import Link from "next/link";

import BackIcon from "@/public/arrow-right.svg";

function BackButton() {
  return (
    <Link href={"/home"} className="transition-transform hover:-translate-x-1">
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
