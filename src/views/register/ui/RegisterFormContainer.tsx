import {
  emailAtom,
  gradeAtom,
  nickNameAtom,
  passwordAtom,
  passwordCheckAtom,
} from "@/jotai/userAtom";
import Input from "@/widgets/inputs/Input";
import { useAtom } from "jotai";
import React from "react";
import GradeSelect from "./GradeSelect";

interface RegisterFormContainerProps {}

const RegisterFormContainer: React.FC<RegisterFormContainerProps> = ({}) => {
  const [email, setEmail] = useAtom(emailAtom);
  const [nickName, setNickName] = useAtom(nickNameAtom);
  const [password, setPassword] = useAtom(passwordAtom);
  const [passwordCheck, setPasswordCheck] = useAtom(passwordCheckAtom);

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleNickName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickName(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handlePasswordCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordCheck(event.target.value);
  };

  return (
    <form className="w-ful h-full flex mt-[60px] flex-col gap-6">
      <div className="flex flex-col gap-2">
        <p className="pl-2 text-[14px]">이메일</p>
        <Input onChange={handleEmail} placeholder="이메일" value={email} />
      </div>

      <div className="flex flex-col gap-2">
        <p className="pl-2 text-[14px]">닉네임</p>
        <Input onChange={handleNickName} placeholder="닉네임" value={nickName} />
      </div>

      <div className="flex flex-col gap-2">
        <p className="pl-2 text-[14px]">학년</p>
        <GradeSelect />
      </div>

      <div className="flex flex-col gap-2">
        <p className="pl-2 text-[14px]">비밀번호</p>
        <Input onChange={handlePassword} type="password" placeholder="비밀번호" value={password} />
      </div>
      <div className="flex flex-col gap-2">
        <p className="pl-2 text-[14px]">비밀번호 확인</p>
        <Input
          onChange={handlePasswordCheck}
          type="password"
          placeholder="비밀번호 확인"
          value={passwordCheck}
        />
      </div>
    </form>
  );
};

export default RegisterFormContainer;
