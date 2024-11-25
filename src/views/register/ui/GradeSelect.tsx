"use client";
import { gradeAtom } from "@/jotai/userAtom";
import { useAtom } from "jotai";
import Image from "next/image";
import React, { useState } from "react";

interface GradeSelectProps {
  onGradeSelect?: (grade: string) => void;
}

const GradeSelect: React.FC<GradeSelectProps> = ({ onGradeSelect }) => {
  const [grade, setGrade] = useAtom(gradeAtom);
  const [optionDisplay, setOptionDisplay] = useState(false);

  const options = [
    "초등학교 1학년",
    "초등학교 2학년",
    "초등학교 3학년",
    "초등학교 4학년",
    "초등학교 5학년",
    "초등학교 6학년",
    "중학교 1학년",
    "중학교 2학년",
    "중학교 3학년",
  ];

  const toggleOptionDisplay = () => {
    setOptionDisplay(!optionDisplay);
  };

  const handleGradeSelect = (grade: string) => {
    setGrade(grade);
    setOptionDisplay(false);
    onGradeSelect?.(grade);
  };

  return (
    <div className="relative w-full">
      <div
        onClick={toggleOptionDisplay}
        className="cursor-pointer px-[1.25em] flex items-center justify-between outline-none box-border w-full min-h-[53px] border border-gray-500/50 rounded-2xl text-gray-dark"
      >
        {grade || "학년 선택"}
        <Image
          src="/icons/bottomArrowIcon.svg"
          width={16}
          height={16}
          alt="학년 선택"
          className={`transition-transform duration-200 ${optionDisplay ? "rotate-180" : ""}`}
        />
      </div>
      {optionDisplay && (
        <div className="absolute z-10 w-full border border-gray-300 rounded-2xl mt-1 bg-white shadow-lg">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleGradeSelect(option)}
              className="px-[1.25em] py-2 hover:bg-gray-100 cursor-pointer"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GradeSelect;
