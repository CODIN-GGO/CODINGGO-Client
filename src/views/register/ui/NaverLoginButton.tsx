import Image from "next/image";
import React from "react";

const NaverLoginButton = () => {
  return (
    <div className="rounded-full bg-green w-[44px] h-[44px] flex justify-center items-center">
      <Image alt="네이버 로그인" src="/icons/naverIcon.svg" width={20} height={20} />
    </div>
  );
};

export default NaverLoginButton;
