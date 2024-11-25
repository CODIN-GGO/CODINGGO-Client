import React from "react";
import QuestionList from "./ui/QuestionList";
import TopNavigation from "@/widgets/navigations/TopNavigation";
import BotttomNavigation from "@/widgets/navigations/BotttomNavigation";

const HomePage = () => {
  return (
    <div className="h-full pt-[5em] pb-[4em]">
      <TopNavigation />
      <QuestionList />
      <BotttomNavigation />
    </div>
  );
};

export default HomePage;
