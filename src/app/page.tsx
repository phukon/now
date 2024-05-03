import Calendar from "@/components/cal/Calendar";
import Year from "@/components/calendar/year/year";
import InfoCard from "@/components/profile/info-card";
import { februaryData } from "@/lib/activity/2024/feb";

export default function Home() {
  return (
    <>
      <InfoCard />
      <Year />
      <Calendar data={februaryData} />
    </>
  );
}
