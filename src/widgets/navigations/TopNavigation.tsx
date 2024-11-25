import React from "react";

interface TopNavigationProps {
  page?: string;
}

const TopNavigation: React.FC<TopNavigationProps> = ({ page = "홈" }) => {
  return (
    <div className="fixed flex items-center pl-4 gap-2 font-bold text-[24px] pt-[1em] box-border top-0 w-full h-[76px] bg-white shadow-[0px_4px_20px_rgba(6,17,28,0.05)]">
      {page === "홈" ? (
        <>
          <p className="text-sky-dark cursor-pointer">홈</p>
          <p className="cursor-pointer">랭킹</p>
        </>
      ) : (
        <>
          <p className="cursor-pointer">홈</p>
          <p className="text-sky-dark">랭킹</p>
        </>
      )}
    </div>
  );
};

export default TopNavigation;
