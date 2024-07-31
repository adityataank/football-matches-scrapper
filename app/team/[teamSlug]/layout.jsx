import MonthHeading from "@/components/MonthHeading";

function TeamFixtureLayout({ children }) {
  return (
    <div className="p-4 pt-16 md:pt-20">
      <MonthHeading />
      {children}
    </div>
  );
}

export default TeamFixtureLayout;
