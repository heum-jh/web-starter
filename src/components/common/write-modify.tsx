import { useState } from "react";
import InsertImage from "./insert-image";

export interface ImageProps {
  name: string;
  url: string;
}

type WriteModifyProps = {
  title?: string;
  content?: string;
  titleCheck: boolean;
  type: "write" | "modify";
  imageUrl?: ImageProps[];
};

const WriteModify = ({ title, content, imageUrl, titleCheck, type }: WriteModifyProps) => {
  const [titleValue, setTitleValue] = useState<string | undefined>(title);
  const [contentValue, setContentValue] = useState<string | undefined>(content);
  return (
    <div>
      {titleCheck === true && (
        <div className="flex h-[3.25rem] items-center  justify-between border-b border-b-[#F0F1F2] p-5">
          <input
            className="h-[1.5rem] w-full text-lg font-medium text-[#1E1E1E]"
            placeholder="제목을 입력해 주세요"
            value={type === "modify" ? contentValue : ""}
            onChange={e => {
              setTitleValue(e.currentTarget.value);
            }}
          />
        </div>
      )}
      <textarea
        className="mb-[1.25rem] h-[12.5rem] w-full p-5"
        placeholder="내용을 입력해 주세요"
        onChange={e => {
          setContentValue(e.currentTarget.value);
        }}
        value={type === "modify" ? titleValue : ""}
      ></textarea>
      <div className="grid grid-cols-5 grid-rows-2 gap-y-[0.87rem] px-5">
        <InsertImage imageUrl={imageUrl} />
      </div>
    </div>
  );
};
export default WriteModify;
