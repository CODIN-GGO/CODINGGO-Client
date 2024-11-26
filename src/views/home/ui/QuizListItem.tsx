"use client";
import React, { useState } from "react";
import TagList from "./TagList";
import MentorInfo from "./MentorInfo";
import Image from "next/image";
import QuizDetail from "./QuizDetail";

interface QuizListItemProps {
  quizTitle?: string;
  tagList?: string[];
  quizDescription?: string;
  difficultyLevel?: number;
  heartLevel?: number;
  mentorProfileUrl?: string;
  mentorName?: string;
}

const QuizListItem: React.FC<QuizListItemProps> = ({
  quizTitle = "AI 퀴즈",
  tagList = ["AI", "머신러닝"],
  quizDescription = "ai를 간단히 배우는 퀴즈 입니다.아무래도 ai가 어려운데 할수있어요",
  difficultyLevel = 3,
  heartLevel = 3,
  mentorProfileUrl = "/images/mentorExampleImage.png",
  mentorName = "멘토명",
}) => {
  const [openDetail, setOpenDetail] = useState(false);

  const handleOpenDetail = () => {
    setOpenDetail((prev) => !prev);
  };

  return (
    <div
      className="rounded-xl px-[20px] py-[1em] box-border shadow cursor-pointer  transition-transform "
      onClick={handleOpenDetail}
    >
      <div className="flex justify-between items-center">
        <div className="flex itmes-center gap-2">
          <div className="text-[20px] text-sky font-semibold">{quizTitle}</div>
          <TagList tagList={tagList} />
        </div>
        <MentorInfo mentorName={mentorName} mentorProfileUrl={mentorProfileUrl} />
      </div>

      <div className="flex mt-[12px] justify-between items-center">
        <p className="w-[70%] text-gray">{quizDescription}</p>
        <div className="flex justify-center itmes-center gap-1">
          <Image src="/icons/heartIcon.svg" width={20} height={20} alt="수명" />
          <p className="text-gray text-sm">{heartLevel}</p>
        </div>
        <div className="flex justify-center items-center gap-1">
          <Image src="/icons/starIcon.svg" width={20} height={20} alt="난이도" />
          <p className="text-gray text-sm">{difficultyLevel}</p>
        </div>
      </div>
      <div
        className={`transition-all duration-500 overflow-hidden ${
          openDetail ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <QuizDetail />
      </div>
    </div>
  );
};

export default QuizListItem;
