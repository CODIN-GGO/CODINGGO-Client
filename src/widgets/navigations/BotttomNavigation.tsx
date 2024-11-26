import Image from "next/image";
import React from "react";

const BotttomNavigation = () => {
  return (
    <div className="fixed flex items-center justify-around  font-semibold text-[0.5em] box-border bottom-0 w-full h-[56px] bg-white border-gray-lightest/20 border-t-2 ">
      <div className="flex flex-col justify-evenly items-center cursor-pointer">
        <Image alt="멘토리스트" src="/icons/mentorIcon.svg" width={20} height={20} />
        <p>멘토</p>
      </div>
      <div className="flex flex-col justify-evenly items-center cursor-pointer">
        <Image alt="리뷰" src="/icons/reviewIcon.svg" width={20} height={20} />
        <p>복습</p>
      </div>
      <div className="flex flex-col justify-evenly items-center cursor-pointer">
        <Image alt="마이페이지" src="/icons/userIcon.svg" width={20} height={20} />
        <p>내 정보</p>
      </div>
    </div>
  );
};

export default BotttomNavigation;
