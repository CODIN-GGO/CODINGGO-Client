import React from "react";
import FirstTitle from "./FirstTitle";
import SecondTitle from "./SecondTtitle";

interface OnboardingTitleProps {
  progress: number;
}

const OnboardingTitle: React.FC<OnboardingTitleProps> = ({ progress }) => {
  return (
    <>
      {progress === 0 && (
        <div className="flex flex-col gap-[5px]">
          <FirstTitle>코딘꼬와 함께하는</FirstTitle>
          <SecondTitle>재미있는 코딩 교실</SecondTitle>
        </div>
      )}
      {progress === 1 && (
        <div className="flex flex-col gap-[5px]">
          <FirstTitle>AI, 파이썬, 자바?</FirstTitle>
          <SecondTitle>궁금하다면</SecondTitle>
          <SecondTitle>지금 바로 코딘꼬!</SecondTitle>
        </div>
      )}
      {progress === 2 && (
        <div className="flex flex-col gap-[5px]">
          <FirstTitle>대학생 멘토와 함께</FirstTitle>
          <SecondTitle>지금 바로 코딘꼬!</SecondTitle>
        </div>
      )}
    </>
  );
};

export default OnboardingTitle;
