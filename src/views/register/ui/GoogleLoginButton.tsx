import Image from "next/image";
import React from "react";

const GoogleLoginButton = () => {
  return (
    <div className="rounded-full border border-black-500/20 w-[44px] h-[44px] flex justify-center items-center">
      <Image alt="구글로그인" src="/icons/googleIcon.svg" width={20} height={20} />
    </div>
  );
};

export default GoogleLoginButton;
