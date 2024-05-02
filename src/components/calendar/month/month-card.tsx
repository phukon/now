import { twMerge } from "tailwind-merge";

interface MonthProps {
  month: string;
  body: string;
  color: string;
}

const MonthCard = ({ month, body, color }: MonthProps) => {
  const className = twMerge(
    "bg-[#e36042] flex hover:shadow-md transition-all duration-300 hover:scale-105 flex-col col-span-1 py-5 w-full h-[24rem] md:h-[calc(100%)] overflow-hidden shadow-md",
    color
  );
  return (
    <div className={className}>
      <h1 className="text-4xl mt-[calc(1%)] font-semibold mb-4 text-left w-full --local-basteleur ml-4">{month}</h1>
      <div className=" border-b w-full  border-black " />

      <div className=" flex flex-row justify-between text-sm mx-8 text-black">
        <div className="border-black font-semibold">W1</div>
        <div className="border-black font-semibold">2024</div>
      </div>

      <div className=" border-b w-full  border-black " />

      {/* box 2 */}
      {/* <div className="flex  gap-40 py-4 flex-row text-black">
        <div className=" text-4xl w-1/2 ">April</div>
        <div className=" w-1/2 ">PIC</div>
      </div> */}

      {/* <div className=" border-b border-t w-full h-[4px] border-black" /> */}

      <div className="px-3 text-black h-[15rem]">
        <p className="text-lg mt-2 --local-ebgaramond">{body}</p>
      </div>
      <div className=" border-b w-full  border-black " />
    </div>
  );
};

export default MonthCard;
