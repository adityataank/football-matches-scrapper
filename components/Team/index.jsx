import Image from "next/image";

function Team(props) {
  const { name = "", crest = "" } = props;
  return (
    <div className="min-w-32 flex flex-col items-center gap-3 min-h-28 snap-center">
      <div className="w-16 h-16 grid place-items-center">
        <Image
          src={crest}
          width={64}
          height={64}
          alt={name}
          className="object-fit aspect-square"
        />
      </div>
      <p className="text-center text-sm">{name}</p>
    </div>
  );
}

export default Team;
