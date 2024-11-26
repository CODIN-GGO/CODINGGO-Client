import React from "react";

interface InputProps {
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  type?: string;
}

const Input: React.FC<InputProps> = ({ placeholder, type, value, onChange }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="pl-[1.25em] outline-none box-border w-full min-h-[53px] border border-gray-500/50 rounded-2xl text-black focus:text-gray-dark"
    ></input>
  );
};

export default Input;
