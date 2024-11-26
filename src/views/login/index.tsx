import React from "react";
import LoginTtile from "./ui/LoginTtile";
import LoginCharacter from "./ui/LoginCharacter";
import LoginFormContainer from "./ui/LoginFormContainer";

const LoginPage = () => {
  return (
    <div className="box-border px-[35px] pb-[4em]  pt-[5em] h-full flex flex-col">
      <LoginTtile />
      <LoginFormContainer />
      <LoginCharacter />
    </div>
  );
};

export default LoginPage;
