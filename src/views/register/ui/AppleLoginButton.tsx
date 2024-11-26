import Image from "next/image";
import React from "react";
const AppleLoginButton = () => {
  return (
    <div className="rounded-full border border-black-500/20 w-[44px] h-[44px] flex justify-center items-center">
      <Image alt="애플 로그인" src="/icons/appleIcon.svg" width={20} height={20} />
    </div>
  );
};

export default AppleLoginButton;
