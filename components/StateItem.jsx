import CountUp from "react-countup";

const StateItem = ({ countNum, countText, text }) => {
  return (
    <div className="text-center font-primary">
      <div className="text-[40px] text-accent mb-4">
        <CountUp end={countNum} delay={2.5} duration={6} />
        <span>{countText}</span>
      </div>
      <p className="text-lg">{text}</p>
    </div>
  );
};

export default StateItem;
