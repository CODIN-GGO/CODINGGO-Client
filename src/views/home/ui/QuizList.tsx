import React from "react";
import QuizListItem from "./QuizListItem";

const QuizList = () => {
  return (
    <div
      className="py-4 flex flex-col gap-4 px-4 h-full overflow-scroll"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <QuizListItem />
      <QuizListItem />
      <QuizListItem />
      <QuizListItem />
      <QuizListItem />
      <QuizListItem />
      <QuizListItem />
      <QuizListItem />
      <QuizListItem />
      <QuizListItem />
      <QuizListItem />
      <QuizListItem />
    </div>
  );
};

export default QuizList;
