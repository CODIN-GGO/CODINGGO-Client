import React from "react";
import Button from "@/widgets/buttons/Button";
import AppleLoginButton from "./AppleLoginButton";
import KakaoLoginButton from "./KakaoLoginButton";
import GoogleLoginButton from "./GoogleLoginButton";
import NaverLoginButton from "./NaverLoginButton";
import Input from "@/widgets/inputs/Input";
import { useAtom } from "jotai";
import { emailAtom } from "@/jotai/userAtom";

interface SocialLoginContainerProps {
  onSubmit: () => void; // 함수 타입 정의
}
const SocialLoginContainer: React.FC<SocialLoginContainerProps> = ({ onSubmit }) => {
  const [email, setEmail] = useAtom(emailAtom);
  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  return (
    <>
      <div className="w-ful h-full flex mt-[60px] flex-col gap-4">
        <Input value={email} onChange={handleEmail} placeholder="이메일" />
        <Button onClick={onSubmit} label="이메일로 회원가입 하기" />
        <div className="flex gap-[20px] mt-8 justify-center">
          <AppleLoginButton />
          <KakaoLoginButton />
          <GoogleLoginButton />
          <NaverLoginButton />
        </div>
      </div>
    </>
  );
};

export default SocialLoginContainer;
