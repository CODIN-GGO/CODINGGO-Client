"use client";

import Button from "@/widgets/buttons/Button";
import { useRouter } from "next/navigation";
import React from "react";

interface QuizDetailProps {
  getKnowedges?: string[];
  recommendStudents?: string[];
  quizId?: number;
}

const QuizDetail: React.FC<QuizDetailProps> = ({
  getKnowedges = ["AI의 성격", "AI가 무엇인지", "AI의 시대?"],
  recommendStudents = ["AI의 기초에 대해 알고 싶은", "AI가 무슨 일을 하는지 알고 싶은 학생들"],
  quizId = 1,
}) => {
  const router = useRouter();
  const handleQuiz = (id: number) => {
    router.push(`/quiz/process/${id}`);
  };

  return (
    <div className="mt-[26px] flex flex-col justify-evenly gap-4 text-[0.8125em]  ">
      <div className="flex gap-4 justify-between">
        <div className="flex flex-col">
          <p className="text-black font-regular">획득지식</p>
          {getKnowedges.map((getKnowedge, index) => (
            <p className="text-gray-dark" key={index}>
              - {getKnowedge}
            </p>
          ))}
        </div>
        <div className="flex flex-col">
          <p className="text-black font-regular">이런 학생에게 추천!</p>
          {recommendStudents.map((recommendStudent, index) => (
            <p className="text-gray-dark" key={index}>
              - {recommendStudent}
            </p>
          ))}
        </div>
      </div>

      <Button onClick={() => handleQuiz(quizId)} label="퀴즈 시작하기" />
    </div>
  );
};

export default QuizDetail;
