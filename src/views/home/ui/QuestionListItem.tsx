import React from "react";
import TagList from "./TagList";
import MentorInfo from "./MentorInfo";
import Image from "next/image";

interface QuestionListItemProps {
  questionTtile?: string;
  tagList?: string[];
  questionDescription?: string;
  difficultyLevel?: number;
  mentorProfileUrl?: string;
  mentorName?: string;
}

const QuestionListItem: React.FC<QuestionListItemProps> = ({
  questionTtile = "AI 퀴즈",
  tagList = ["AI", "머신러닝"],
  questionDescription = "ai를 간단히 배우는 퀴즈 입니다.아무래도 ai가 어려운데 할수있어요",
  difficultyLevel = 3,
  mentorProfileUrl = "/images/mentorExampleImage.png",
  mentorName = "멘토명",
}) => {
  return (
    <div className="rounded-xl px-[20px] py-[2em] box-border shadow cursor-pointer">
      <div className="flex justify-between items-center">
        <div className="flex itmes-center gap-2">
          <div className="text-[20px] text-sky font-semibold">{questionTtile}</div>
          <TagList tagList={tagList} />
        </div>
        <MentorInfo mentorName={mentorName} mentorProfileUrl={mentorProfileUrl} />
      </div>

      <div className="flex mt-[12px] justify-between items-center">
        <p className="w-[60%] text-gray">{questionDescription}</p>
        <div className="flex justify-center items-center gap-2">
          <Image src="/icons/starIcon.svg" width={20} height={20} alt="난이도" />
          <p className="text-gray text-sm">{difficultyLevel}</p>
        </div>
      </div>
    </div>
  );
};

export default QuestionListItem;
