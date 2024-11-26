"use client";
import { useRouter } from "next/navigation";
import React from "react";

interface TopNavigationProps {
  page?: "홈" | "랭킹";
}

const TopNavigation: React.FC<TopNavigationProps> = ({ page = "홈" }) => {
  const router = useRouter();

  const handleNavigate = (targetPage: "홈" | "랭킹") => {
    const routes: Record<"홈" | "랭킹", string> = {
      홈: "/home",
      랭킹: "/rank/daily",
    };
    router.push(routes[targetPage]);
  };
  return (
    <div className="fixed flex items-center pl-4 gap-2 font-bold text-[24px] pt-[1em] box-border top-0 w-full h-[76px] bg-white shadow-[0px_4px_20px_rgba(6,17,28,0.05)]">
      <p
        onClick={() => handleNavigate("홈")}
        className={`cursor-pointer ${page === "홈" ? "text-sky-dark" : ""}`}
      >
        홈
      </p>
      <p
        onClick={() => handleNavigate("랭킹")}
        className={`cursor-pointer ${page === "랭킹" ? "text-sky-dark" : ""}`}
      >
        랭킹
      </p>
    </div>
  );
};
export default TopNavigation;
