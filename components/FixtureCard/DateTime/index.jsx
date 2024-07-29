'use client';

const DateTime = ({ datetime = "" }) => {
  const dateObj = new Date(datetime);
  const localDate = dateObj.toDateString().slice(0, -4); // slicing the year
  const localTime = dateObj.toLocaleTimeString();
  return (
    <div className="flex flex-col items-center gap-1 text-xs md:text-sm">
      <p>{localDate}</p>
      <p>{localTime}</p>
    </div>
  );
};

export default DateTime;
