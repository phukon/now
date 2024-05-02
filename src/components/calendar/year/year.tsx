import MonthCard from "@components/calendar/month/month-card";

const monthData = [
  // {
  //   month: "April",
  //   color: "bg-blue-400",
  //   body: "Semper feugiat nibh sed pulvinar proin gravida hendrerit. Venenatis tellus in metus vulputate eu. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Eget nullam non nisi est sit amet facilisis. Eget egestas purus viverra accumsan in nisl. Orci porta non pulvinar neque.",
  // },
  // {
  //   month: "May",
  //   color: "bg-green-400",
  //   body: "Consectetur adipiscing elit duis tristique. Vel risus commodo viverra maecenas accumsan lacus vel. Dui accumsan sit amet nulla facilisi morbi tempus iaculis. Vulputate ut pharetra sit amet aliquam id diam maecenas ultricies. Elit at imperdiet dui accumsan. Dolor sit amet consectetur adipiscing elit pellentesque habitant.",
  // },
  {
    month: "June",
    color: "bg-yellow-400",
    body: "Vitae auctor eu augue ut lectus. Nulla at volutpat diam ut venenatis tellus in metus. Duis convallis convallis tellus id interdum velit laoreet. Ut aliquam purus sit amet luctus venenatis lectus. Elit ut aliquam purus sit amet luctus venenatis lectus. Eget nulla facilisi etiam dignissim diam.",
  },
  {
    month: "July",
    color: "bg-red-400",
    body: "Cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Est ullamcorper eget nulla facilisi. Molestie ac feugiat sed lectus vestibulum mattis. Aenean vel elit scelerisque mauris. Vitae congue mauris rhoncus aenean vel elit scelerisque. Vitae ultricies leo integer malesuada nunc vel risus.",
  },
  {
    month: "August",
    color: "bg-indigo-400",
    body: "Sed euismod nisi porta lorem mollis aliquam ut porttitor leo. Ut porttitor leo a diam sollicitudin tempor id eu nisl. Purus gravida quis blandit turpis cursus. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Tincidunt ornare massa eget egestas purus viverra accumsan in nisl.",
  },
  {
    month: "September",
    color: "bg-purple-400",
    body: "Ultricies mi eget mauris pharetra et ultrices neque ornare. Quis hendrerit dolor magna eget est lorem ipsum dolor. Sed elementum tempus egestas sed. Sit amet nisl suscipit adipiscing bibendum est ultricies. Leo a diam sollicitudin tempor id eu nisl nunc. In ornare quam viverra orci sagittis eu volutpat.",
  },
  {
    month: "October",
    color: "bg-pink-400",
    body: "Amet justo donec enim diam vulputate ut pharetra sit. Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus. Diam ut venenatis tellus in metus vulputate eu. Odio eu feugiat pretium nibh. Orci a scelerisque purus semper eget duis at tellus at.",
  },
  {
    month: "November",
    color: "bg-gray-400",
    body: "Eu tincidunt tortor aliquam nulla facilisi. Facilisi etiam dignissim diam quis. Adipiscing elit duis tristique sollicitudin. Euismod in pellentesque massa placerat duis ultricies lacus sed. Euismod in pellentesque massa placerat duis ultricies lacus sed turpis.",
  },
  {
    month: "December",
    color: "bg-orange-400",
    body: "Quam adipiscing vitae proin sagittis nisl. Purus in mollis nunc sed id semper risus in. Tellus molestie nunc non blandit massa enim nec. Pretium aenean pharetra magna ac placerat vestibulum. Aliquet nec ullamcorper sit amet risus nullam eget. Neque vitae tempus quam pellentesque nec nam aliquam sem et.",
  },
  {
    month: "January",
    color: "bg-blue-600",
    body: "Mauris sit amet massa vitae tortor condimentum lacinia quis. Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit. Mi eget mauris pharetra et ultrices neque. Ut etiam sit amet nisl purus in mollis nunc. Eget mi proin sed libero enim sed faucibus turpis in.",
  },
];

const Year = () => {
  return (
    <div className="bg-white p-2 md:px-[calc(2%)] lg:px-[calc(8%)] lg:py-12">
      <div className=" flex flex-col md:grid md:grid-cols-3 gap-0">
        {monthData.map((m, index) => (
          <MonthCard key={index} month={m.month} color={m.color} body={m.body} />
        ))}
      </div>
    </div>
  );
};

export default Year;
