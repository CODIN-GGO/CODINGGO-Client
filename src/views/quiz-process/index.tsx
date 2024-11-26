import React from "react";
import QuizProgressBar from "./ui/QuizProgressBar";
import Question from "./ui/Question";
import { questions } from "./data/dummyData";

interface QuizProcessPageProps {
  quizId?: number;
}

const QuizProcessPage: React.FC<QuizProcessPageProps> = ({ quizId = 1 }) => {
  console.log(quizId);
  const questionsData = questions;

  return (
    <div className="px-[35px] flex flex-col justify-between">
      <QuizProgressBar />
      <Question />
    </div>
  );
};

export default QuizProcessPage;
