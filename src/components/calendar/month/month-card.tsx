const MonthCard = () => {
  return (
    <div className="bg-white bg-opacity-45 rounded-lg shadow-md p-8 md:mx-8 relative z-10">
    <div className="bg-[#e36042] flex flex-col items-center text-white p-8">
      <h1 className="text-4xl font-bold mb-4">LEO</h1>
      <div className="flex mb-6 flex-row  text-black">
        <div className="mr-4">
          <p className="text-xl font-semibold">MONTH</p>
          <p>August</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">STAR FORM</h2>
          <div className="flex items-center">
            <div className="w-8 h-8 border-2 border-black mr-1"></div>
            <div className="w-8 h-8 border-2 border-black mr-1"></div>
            <div className="w-8 h-8 border-2 border-black mr-1"></div>
            <div className="w-8 h-8 border-2 border-black"></div>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">MANTRA</h2>
        <p className="text-lg">
          The beginning of August will set the tone for your entire year to
          come, so make sure that you are going after all of the items on your
          list of hopes and dreams.
        </p>
      </div>
      <p className="text-sm">WIT AND DELIGHT</p>

    </div></div>
  );
};

export default MonthCard;
