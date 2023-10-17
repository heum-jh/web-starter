import { useState } from "react";
import { cn } from "src/core/function/cn";
import Popup from "./popup";
import clsx from "clsx";
const COLOR_ARRAY = [
  "bg-[#FF7A7A]",
  "bg-[#FFBB55]",
  "bg-[#FFEA31]",
  "bg-[#13DE3F]",
  "bg-[#5F6FFF]",
  "bg-[#185BBF]",
  "bg-[#A750FF]",
];
const AddNewFolder = () => {
  const [category, setCategory] = useState<string>();
  const [categorycolor, setCategoryColor] = useState<string | null>(null);
  return (
    <div className="px-5">
      <div className="space-y-4 border-b border-b-[#F0F1F2] pb-4">
        <div className="flex flex-col">
          <label className="my-[0.38rem] block text-sm font-semibold text-[#111111]">폴더 이름</label>
          <input
            placeholder="폴더 이름을 입력해주세요"
            className="rounded bg-[#F4F4F5] px-4 py-[0.88rem] text-lg font-normal text-[#111111] placeholder:text-[#A2A9B5]"
          />
        </div>
        <div className="flex flex-col">
          <label className="my-[0.38rem] block text-sm font-semibold text-[#111111]">카테고리</label>
          <SelectPopup
            value={category}
            placeholder="카테고리를 선택해주세요"
            list={[
              { label: "test 1", value: "1" },
              { label: "test 2", value: "2" },
              { label: "test 3", value: "3" },
            ]}
            onChange={setCategory}
            className="justify-between px-4 py-[0.88rem]"
          />
        </div>
      </div>
      <div className="pb-5 pt-4">
        <label className="my-[0.38rem] block text-sm font-semibold text-[#111111]">카테고리</label>
        <div className="flex items-center justify-between">
          {COLOR_ARRAY.map(color => (
            <label key={color} className={clsx("h-9 w-9 cursor-pointer rounded border border-[#F0F1F2]", color)}>
              <input
                name="colorRadio"
                type="radio"
                className="peer sr-only"
                value={color}
                checked={categorycolor === color}
                onChange={e => setCategoryColor(e.currentTarget.value)}
              />
              <div className="invisible flex h-full w-full items-center justify-center peer-checked:visible">
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </label>
          ))}
        </div>
      </div>
      <div className="py-3">
        <button
          type="button"
          className={clsx(
            "w-full rounded py-4 text-center text-lg font-semibold text-white",
            true ? "bg-[#FF7314]" : "bg-[#FDDCB0]",
          )}
        >
          추가하기
        </button>
      </div>
    </div>
  );
};

export default AddNewFolder;
type ListType = {
  label: string;
  value: string;
};
type SelectPopupProps = {
  list: ListType[];
  value?: string;
  onChange: (value: string) => void;
  className?: string;
  placeholder?: string;
  placeholderColor?: string;
};
const SelectPopup = ({
  list,
  value,
  onChange,
  className,
  placeholder,
  placeholderColor = "#A2A9B5",
}: SelectPopupProps) => {
  const [isOpenSelectPopup, setIsOpenSelectPopup] = useState(false);
  // const [currentValue, setCurrentValue] = useState(value);
  const handleSelectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.currentTarget.value);
    setIsOpenSelectPopup(false);
  };
  return (
    <>
      <div
        className={cn(
          "inline-flex cursor-pointer items-center justify-center gap-1 rounded border border-[#DBDEE4] bg-white px-2 py-[0.38rem] text-sm font-medium text-[#1F262F]",
          className,
        )}
        onClick={() => {
          setIsOpenSelectPopup(true);
        }}
      >
        {value ? (
          <>
            <span>{list.find(item => item.value === value)?.label}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 9L12 15L18 9"
                stroke="#A2A9B5"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </>
        ) : (
          <span className={`text-[${placeholderColor}]`}>{placeholder}</span>
        )}
      </div>
      <Popup title="카테고리" isOpen={isOpenSelectPopup} onClose={() => setIsOpenSelectPopup(false)}>
        <ul className="px-5">
          {list.map(item => {
            return (
              <li
                key={item.value}
                className="font-500 flex items-center justify-between border-b border-[#F0F1F2] py-5 text-lg text-[#1E1E1E]"
              >
                <label className="w-full cursor-pointer">
                  {item.label}
                  <input
                    type="radio"
                    name="select"
                    value={item.value}
                    className="sr-only"
                    onChange={e => {
                      handleSelectChange(e);
                    }}
                  />
                </label>
              </li>
            );
          })}
        </ul>
      </Popup>
    </>
  );
};
