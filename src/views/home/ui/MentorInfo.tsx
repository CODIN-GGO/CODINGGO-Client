import Image from "next/image";
import React from "react";

interface MentorInfoProps {
  mentorProfileUrl: string;
  mentorName: string;
}

const MentorInfo: React.FC<MentorInfoProps> = ({ mentorProfileUrl, mentorName }) => {
  return (
    <div className="flex justify-center items-center gap-2">
      <p>{mentorName}</p>
      <Image
        alt="멘토이미지"
        src={mentorProfileUrl}
        width={32}
        height={32}
        className="rounded-full"
      />
    </div>
  );
};

export default MentorInfo;
