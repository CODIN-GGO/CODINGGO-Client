import Image from "next/image";
import React from "react";

interface Ranker {
  name: string;
  score: number;
  profileImageUrl: string;
  rank: number;
}

interface RankListItemProps {
  ranker: Ranker;
}

const RankListItem: React.FC<RankListItemProps> = ({ ranker }) => {
  return (
    <div className="flex justify-between items-center rounded-2xl bg-white px-[22px] py-[18px]">
      <div className="flex items-center gap-4">
        <Image
          src={ranker.profileImageUrl}
          alt="랭커 이미지"
          width={44}
          height={44}
          className="rounded-full"
        />
        <div className="flex flex-col justify-center">
          <p className="font-semibold">{ranker.name}</p>
          <p className="font-medium text-gray-light">{ranker.score}점</p>
        </div>
      </div>
      <div className="bg-sky text-white font-semibold rounded-[4px] px-[8px] py-[3px] w-min">
        {ranker.rank}
      </div>
    </div>
  );
};

export default RankListItem;
