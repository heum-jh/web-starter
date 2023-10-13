import { ChangeEvent, useEffect, useState } from "react";
import { cn } from "src/core/function/cn";
import { usePopup } from "src/core/hooks/use-popup";

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
  plceholderColor?: string;
};
const SelectPopup = ({ list, value, onChange, className, placeholder, plceholderColor }: SelectPopupProps) => {
  const [currentValue, setCurrentValue] = useState(value);
  const popup = usePopup({
    title: "정렬",
    render: () => (
      <ul className="px-5">
        {list.map(item => {
          return (
            <li
              key={item.value}
              className="font-500 flex items-center justify-between border-b border-[#F0F1F2] py-5 text-lg text-[#1E1E1E]"
            >
              <label>{item.label}</label>
              <input
                type="radio"
                name="select"
                value={item.value}
                className="h-6 w-6 cursor-pointer appearance-none rounded-full border-[1.5px] border-[#DBDEE4] bg-[url('/images/assets/common/un-check.svg')] bg-center bg-no-repeat checked:border-none checked:bg-[#FF7314] checked:bg-[url('/images/assets/common/check.svg')]"
                onChange={e => {
                  handleSelectChange(e);
                }}
              />
            </li>
          );
        })}
      </ul>
    ),
  });
  const handleSelectChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(e.currentTarget.value);
    onChange(e.currentTarget.value);
  };
  useEffect(() => {
    setCurrentValue(value);
  }, [value]);
  return (
    <>
      <div
        className={cn(
          "inline-flex cursor-pointer items-center justify-center gap-1 rounded border border-[#DBDEE4] bg-white px-2 py-[0.38rem] text-sm font-medium text-[#707888]",
          className,
        )}
        onClick={() => {
          popup.open();
        }}
      >
        {placeholder && value == undefined && <span className={plceholderColor}>{placeholder}</span>}
        <span>{list.find(item => item.value === currentValue)?.label}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M4 6L8 10L12 6" stroke="#707888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </>
  );
};

export default SelectPopup;
