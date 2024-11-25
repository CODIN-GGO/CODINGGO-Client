import React from "react";

const SecondTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="text-[2em] text-sky-light font-regular">{children}</div>;
};

export default SecondTitle;
