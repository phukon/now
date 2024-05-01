import { twMerge } from "tailwind-merge";


const MonthCard = ({ month, body, color }: { month: string; body: string, color: string }) => {
  const className = twMerge("bg-[#e36042] flex flex-col items-center px-8 py-5 w-96 h-[32rem] overflow-hidden shadow-md", color);
  return (
    <div className={className}>
      <h1 className="text-4xl mt-5 font-bold mb-4 text-left w-full">{month}</h1>
      <div className=" border-b border-t w-full h-[4px] border-black " />

      <div className=" grid grid-cols-2 gap-52 text-sm text-black">
        <div className=" border-black font-semibold col-span-1 text-left">MONTH</div>
        <div className="border-black font-semibold col-span-1 text-right">lol</div>
      </div>

      <div className=" border-b border-t w-full h-[4px] border-black" />

      {/* box 2 */}
      <div className="flex  gap-40 py-4 flex-row text-black">
        <div className=" text-4xl w-1/2 ">April</div>
        <div className=" w-1/2 ">PIC goes here</div>
      </div>

      <div className=" border-b border-t w-full h-[4px] border-black" />

      <div className="mb-6 text-black min-h-[15rem]">
        <p className="text-lg mt-7 --local-ebgaramond">
          {body}
        </p>
      </div>
      <div className=" border-b border-t w-full h-[4px] border-black mt-2" />
    </div>
  );
};

export default MonthCard;
