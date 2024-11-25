import Image from "next/image";
import React from "react";

const KakaoLoginButton = () => {
  return (
    <div className="rounded-full bg-yellow w-[44px] h-[44px] flex justify-center items-center">
      <Image alt="카카오 로그인" src="/icons/kakaoIcon.svg" width={20} height={20} />
    </div>
  );
};

export default KakaoLoginButton;
