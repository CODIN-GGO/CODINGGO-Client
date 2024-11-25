"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/onboarding");
  }, [router]);

  return <div></div>;
};

export default Page;
