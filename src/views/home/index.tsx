import React from "react";
import QuizList from "./ui/QuizList";
import TopNavigation from "@/widgets/navigations/TopNavigation";
import BotttomNavigation from "@/widgets/navigations/BotttomNavigation";

const HomePage = () => {
  return (
    <div className="h-full pt-[5em] pb-[4em]">
      <TopNavigation />
      <QuizList />
      <BotttomNavigation />
    </div>
  );
};

export default HomePage;
