"use client";
import Button from "@/widgets/buttons/Button";
import Input from "@/widgets/inputs/Input";
import { useRouter } from "next/navigation";
import React from "react";

const LoginFormContainer = () => {
  const route = useRouter();

  const handleHome = () => {
    route.push("/home");
  };

  return (
    <div className="mt-[60px] flex flex-col gap-8">
      <Input placeholder="이메일" />
      <Input type="password" placeholder="비밀번호" />
      <Button onClick={handleHome} label="로그인" />
    </div>
  );
};

export default LoginFormContainer;
