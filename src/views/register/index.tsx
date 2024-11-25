"use client";
import React, { useState } from "react";
import RegisterTitle from "./ui/RegisterTitle";
import SocialLoginContainer from "./ui/SocialLoginContainer";
import RegisterFormContainer from "./ui/RegisterFormContainer";
import Button from "@/widgets/buttons/Button";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const router = useRouter();
  const [formDispay, setFormDisplay] = useState(false);
  const handleFormDisplay = () => {
    setFormDisplay(true);
  };
  return (
    <div className="box-border px-[35px] pb-[4em] pt-[151px] h-full flex flex-col justify-between">
      <RegisterTitle />
      {formDispay ? (
        <>
          <RegisterFormContainer />
          <Button onClick={() => router.push("/login")} label="가입 완료" />
        </>
      ) : (
        <>
          <SocialLoginContainer onSubmit={handleFormDisplay} />
          <Button onClick={() => router.push("/login")} label="이미 가입하셨나요? 로그인" />
        </>
      )}
    </div>
  );
};

export default RegisterPage;
