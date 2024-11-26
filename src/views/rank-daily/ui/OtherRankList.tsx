import React from "react";
import { dummyData } from "../data/dummyData";
import RankListItem from "./RankListItem";

const OtherRankList = () => {
  const rankerData = dummyData;
  return (
    <div
      className="px-[24px] pt-[1em] pb-[30em] flex flex-col gap-4 overflow-y-scroll h-full"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      {rankerData.map((ranker, index) => (
        <div key={index}>
          <RankListItem ranker={ranker} />
        </div>
      ))}
    </div>
  );
};

export default OtherRankList;
