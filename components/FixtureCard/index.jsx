import Image from "next/image";

const Team = ({ crest = "", name = "" }) => (
  <div className="flex items-center gap-4">
    <Image
      src={crest}
      width={26}
      height={26}
      alt={name}
      className="md:w-7 md:h-7"
    />
    <p className="text-sm text-ellipsis whitespace-nowrap overflow-hidden md:text-base">
      {name}
    </p>
  </div>
);

function FixtureCard(props) {
  const { home_team = {}, away_team = {}, time = "" } = props;

  const dateObj = new Date(time);
  const localTime = dateObj.toLocaleTimeString();
  const localDate = dateObj.toDateString().slice(0, -4); // slicing the year

  return (
    <div className="flex items-center justify-between bg-[#2b2b2b] p-3 rounded-md">
      <div className="flex flex-col gap-4 max-w-[67%]">
        <Team {...home_team} />
        <Team {...away_team} />
      </div>
      {time ? (
        <div className="flex flex-col items-center gap-1 text-xs md:text-sm">
          <p>{localDate}</p>
          <p>{localTime}</p>
        </div>
      ) : (
        <p className="text-xs flex items-center gap-2 md:text-sm">
          Live{" "}
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
        </p>
      )}
    </div>
  );
}

export default FixtureCard;
