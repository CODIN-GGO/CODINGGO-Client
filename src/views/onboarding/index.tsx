"use client";

import React, { useState } from "react";
import OnboardingTitle from "./ui/OnboardingTitle";
import Button from "@/widgets/buttons/Button";
import { useRouter } from "next/navigation";

const OnboardingPage = () => {
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  const handleNext = () => {
    setProgress((prevProgress) => Math.min(prevProgress + 1, 2));
  };

  return (
    <div className="px-[35px] pt-[6em] pb-[4em] flex flex-col justify-between h-full">
      <OnboardingTitle progress={progress} />
      {progress === 2 ? (
        <Button onClick={() => router.push("/register")} label="코딘꼬와 코딩하기" />
      ) : (
        <Button onClick={handleNext} label="다음" />
      )}
    </div>
  );
};

export default OnboardingPage;
