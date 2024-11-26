import BotttomNavigation from "@/widgets/navigations/BotttomNavigation";
import TopNavigation from "@/widgets/navigations/TopNavigation";
import React from "react";
import FirstSecondThirdPlace from "./ui/FirstSecondThirdPlace";
import OtherRankList from "./ui/OtherRankList";

const RankDailyPage = () => {
  return (
    <div className="bg-sky h-full">
      <TopNavigation page="랭킹" />
      <FirstSecondThirdPlace />
      <OtherRankList />
      <BotttomNavigation />
    </div>
  );
};

export default RankDailyPage;
