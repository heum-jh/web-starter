import { useState } from "react";
import InsertImage from "src/components/common/insert-image";

export interface ImageProps {
  name: string;
  url: string;
}

type WriteModifyProps = {
  title?: string;
  titlePlaceholder?: string;
  content?: string;
  contentPlaceholder?: string;
  titleCheck?: boolean;
  type: "write" | "modify";
  imageUrl?: ImageProps[];
  onChangeTitle?: (value: string) => void;
  onChangeContent?: (value: string) => void;
};

const WriteModify = ({
  title,
  titlePlaceholder,
  content,
  contentPlaceholder,
  imageUrl,
  titleCheck = false,
  type,
  onChangeTitle,
  onChangeContent,
}: WriteModifyProps) => {
  const [titleValue, setTitleValue] = useState<string | undefined>(title);
  const [contentValue, setContentValue] = useState<string | undefined>(content);
  return (
    <div>
      {titleCheck === true && (
        <div className="flex h-[3.25rem] items-center  justify-between border-b border-b-[#F0F1F2] p-5">
          <input
            className="h-[1.5rem] w-full text-lg font-medium text-[#1E1E1E]"
            placeholder={titlePlaceholder ? titlePlaceholder : "제목을 입력해 주세요"}
            value={type === "modify" ? titleValue : ""}
            onChange={e => {
              setTitleValue(e.currentTarget.value);
              onChangeTitle?.(e.currentTarget.value);
            }}
          />
        </div>
      )}
      <textarea
        className="mb-5 h-[12.5rem] w-full resize-none p-5 outline-none"
        placeholder={contentPlaceholder ? contentPlaceholder : "내용을 입력해 주세요"}
        onChange={e => {
          setContentValue(e.currentTarget.value);
          onChangeContent?.(e.currentTarget.value);
        }}
        value={type === "modify" ? contentValue : ""}
      />
      <div className="grid grid-cols-5 grid-rows-2 gap-y-[0.87rem] px-5">
        <InsertImage imageUrl={imageUrl} />
      </div>
    </div>
  );
};
export default WriteModify;
