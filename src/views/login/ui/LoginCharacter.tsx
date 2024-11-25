import Image from "next/image";
import React from "react";

const LoginCharacter = () => {
  return (
    <div className="absolute bottom-0 right-0">
      <Image alt="캐릭터" src="/images/mainCharacter.png" width={300} height={300} />
    </div>
  );
};

export default LoginCharacter;
