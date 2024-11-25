import React from "react";

interface TagListProps {
  tagList: string[];
}

const TagList: React.FC<TagListProps> = ({ tagList }) => {
  return (
    <div className="flex gap-2 items-center">
      {tagList.map((tag, index) => (
        <div
          key={index}
          className="bg-gray-light px-1.5 py-0.5 text-white rounded-lg font-regular text-[12px]"
        >
          #{tag}
        </div>
      ))}
    </div>
  );
};

export default TagList;
