import Image from "next/image";
import Link from "next/link";

import BackIcon from "@/public/arrow-right.svg";

function BackButton() {
  return (
    <Link href={"/home"}>
      <Image
        src={BackIcon}
        width={20}
        height={20}
        alt="back"
        className="rotate-180"
      />
    </Link>
  );
}

export default BackButton;
