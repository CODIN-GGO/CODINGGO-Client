import React from "react";

interface BlankQuestionProps {
  questionIndex?: number;
}

const BlankQuestion: React.FC<BlankQuestionProps> = ({}) => {
  return <div></div>;
};

export default BlankQuestion;
