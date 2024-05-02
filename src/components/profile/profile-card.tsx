import { twMerge } from "tailwind-merge";

interface ProfileCardProps {
  month: string;
  body: string;
  color: string;
}

const ProfileCard = ({ month, body, color }: ProfileCardProps) => {
  const className = twMerge(
    "bg-[#e36042] flex hover:shadow-md transition-all duration-300 hover:scale-105 justify-center flex items-center flex-col col-span-1 py-5 w-[full] h-[12rem] overflow-hidden shadow-md",
    color
  );
  return <div className={className}>
    <p> lol</p>
  </div>;
};

export default ProfileCard;
