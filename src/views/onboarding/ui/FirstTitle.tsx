import React from "react";

const FirstTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="text-[2em] text-sky-dark font-semibold">{children}</div>;
};

export default FirstTitle;
