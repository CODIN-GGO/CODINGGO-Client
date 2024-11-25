import React from "react";
import QuestionListItem from "./QuestionListItem";

const QuestionList = () => {
  return (
    <div
      className="py-4 flex flex-col gap-4 px-4 h-full overflow-scroll"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <QuestionListItem />
      <QuestionListItem />
      <QuestionListItem />
      <QuestionListItem />
      <QuestionListItem />
      <QuestionListItem />
      <QuestionListItem />
      <QuestionListItem />
      <QuestionListItem />
      <QuestionListItem />
      <QuestionListItem />
      <QuestionListItem />
    </div>
  );
};

export default QuestionList;
