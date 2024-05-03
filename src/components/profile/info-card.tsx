import Link from "next/link";
import Avatar from "../ui/Avatar";
import ProfileCard from "./profile-card";

const monthData = [
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

const GridComponent = () => {
  return (
    <div className="grid grid-cols-4">
      {[...Array(16)].map((_, index) => (
        <div
          key={index}
          className="bg-gray-300 flex items-center justify-center h-20 text-gray-700 border border-gray-400"
        >
          {index + 1}
        </div>
      ))}
    </div>
  );
};

const InfoCard = () => {
  return (
    <>
      <div className="bg-[#f5ebe9] rounded-lg shadow-md p-4 flex flex-col items-center">
        <Avatar src="https://github.com/phukon.png" width={70} height={70} alt="profile picture" />
        <h2 className="text-lg font-semibold mt-5 --local-basteleur">Riki Phukon</h2>
        <p className="text-orange-600 mb-5">Kohima, NG</p>

        <div>
          <div className="mt-2 flex gap-5 flex-row">
            <div className="mr-4 flex items-center flex-col">
              <span className=" font-semibold">36</span>
              <span className=" ml-1">Stories</span>
            </div>

            <div className="mr-4 flex items-center flex-col">
              <span className=" font-semibold">974</span>
              <span className=" ml-1">Stars</span>
            </div>

            <div className="mr-4 flex items-center flex-col">
              <span className=" font-semibold">57</span>
              <span className=" ml-1">Places</span>
            </div>
          </div>
        </div>
      </div>
      {/* <GridComponent/> */}
      <div className="grid bg-[#f5ebe9]  grid-cols-2 md:grid-cols-3 md:px-[calc(12%)] lg:px-[calc(16%)]">
        {monthData.map((m, index) => (
          <Link href={`/profile/${m.month}`}>
            <ProfileCard key={index} month={m.month} color={m.color} body={m.body} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default InfoCard;
