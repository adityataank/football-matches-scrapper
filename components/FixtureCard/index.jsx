import Image from "next/image";

const Team = ({ crest = "", name = "" }) => (
  <div className="flex items-center gap-4">
    <Image src={crest} width={26} height={26} alt={name} />
    <p className="text-sm text-ellipsis whitespace-nowrap overflow-hidden">{name}</p>
  </div>
);

function FixtureCard(props) {
  const { home_team = {}, away_team = {}, time = "" } = props;

  const dateObj = new Date(time);
  const localTime = dateObj.toLocaleTimeString();
  const localDate = dateObj.toDateString();

  return (
    <div className="flex items-center justify-between bg-[#2b2b2b] p-3 rounded-md">
      <div className="flex flex-col gap-4 max-w-[67%]">
        <Team {...home_team} />
        <Team {...away_team} />
      </div>
      <div className="flex flex-col items-center gap-1 text-xs">
        <p>{localDate}</p>
        <p>{localTime}</p>
      </div>
    </div>
  );
}

export default FixtureCard;
