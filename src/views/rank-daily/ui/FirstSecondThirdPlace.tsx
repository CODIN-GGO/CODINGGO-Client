import Image from "next/image";
import React from "react";

interface Ranker {
  name?: string;
  score?: number;
  profileImage?: string;
}

interface FirstSecondThirdPlaceProps {
  firstRanker?: Ranker;
  secondRanker?: Ranker;
  thirdRanker?: Ranker;
}

const FirstSecondThirdPlace: React.FC<FirstSecondThirdPlaceProps> = ({
  firstRanker,
  secondRanker,
  thirdRanker,
}) => {
  return (
    <div className=" pt-[6em] flex items-end justify-center px-[35px] -space-x-10 bg-white rounded-b-2xl">
      <div className="justify-center -space-y-20 items-center flex flex-col">
        <div className="flex flex-col gap-[16px] z-[6]">
          <Image
            width={80}
            height={80}
            src={secondRanker?.profileImage || "/images/mentorExampleImage.png"}
            alt={secondRanker?.name || "2위 프로필 이미지"}
            className="rounded-full "
          />
          <div className=" w-full text-center flex flex-col gap-1 font-semibold text-[18px]">
            <p>{secondRanker?.name || "2위 이름"}</p>
            <p>{secondRanker?.score !== undefined ? secondRanker.score : "점수 없음"}</p>
          </div>
        </div>
        <Image alt="두번째 랭킹" src="/images/secondRankPedestal.png" width={200} height={200} />
      </div>

      <div className="justify-center -space-y-20 items-center flex flex-col relative z-[5]">
        <div className="flex flex-col gap-[16px] z-[6]">
          <Image
            width={100}
            height={100}
            src={firstRanker?.profileImage || "/images/mentorExampleImage.png"}
            alt={firstRanker?.name || "1위 프로필 이미지"}
            className="rounded-full "
          />
          <div className=" w-full text-center flex flex-col gap-1 font-semibold text-[18px]">
            <p>{firstRanker?.name || "1위 이름"}</p>
            <p>{firstRanker?.score !== undefined ? firstRanker.score : "점수 없음"}</p>
          </div>
        </div>
        <Image alt="첫번째 랭킹" src="/images/firstRankPedestal.png" width={200} height={300} />
      </div>

      <div className="justify-center -space-y-20 items-center flex flex-col relative">
        <div className="flex flex-col gap-[16px] z-[6]">
          <Image
            width={80}
            height={80}
            src={thirdRanker?.profileImage || "/images/mentorExampleImage.png"}
            alt={thirdRanker?.name || "3위 프로필 이미지"}
            className="rounded-full"
          />
          <div className="w-full text-center flex flex-col gap-1 font-semibold text-[18px]">
            <p>{thirdRanker?.name || "3위 이름"}</p>
            <p>{thirdRanker?.score !== undefined ? thirdRanker.score : "점수 없음"}</p>
          </div>
        </div>
        <Image alt="첫번째 랭킹" src="/images/thirdRankPedestal.png" width={200} height={300} />
      </div>
    </div>
  );
};

export default FirstSecondThirdPlace;
