import React from "react";

interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  label: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, label }) => {
  return (
    <div
      onClick={onClick}
      className="flex justify-center items-center font-semibold cursor-pointer w-full min-h-[53px] rounded-2xl bg-sky text-white "
    >
      {label}
    </div>
  );
};

export default Button;
