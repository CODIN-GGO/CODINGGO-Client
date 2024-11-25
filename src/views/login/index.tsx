import React from "react";
import LoginTtile from "./ui/LoginTtile";
import LoginCharacter from "./ui/LoginCharacter";
import Input from "@/widgets/inputs/Input";
import Button from "@/widgets/buttons/Button";
import LoginFormContainer from "./ui/LoginFormContainer";

const LoginPage = () => {
  return (
    <div className="box-border px-[35px] pb-[4em] pt-[151px] h-full flex flex-col">
      <LoginTtile />
      <LoginFormContainer />
      <LoginCharacter />
    </div>
  );
};

export default LoginPage;
