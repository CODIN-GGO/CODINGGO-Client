import React from "react";
import QuizProgressBar from "./ui/QuizProgressBar";
import Question from "./ui/Question";

interface QuizProcessPageProps {
  quizId?: number;
}

const QuizProcessPage: React.FC<QuizProcessPageProps> = ({ quizId = 1 }) => {
  console.log(quizId);

  return (
    <div className="px-[35px] flex flex-col justify-between">
      <QuizProgressBar />
      <Question />
    </div>
  );
};

export default QuizProcessPage;
