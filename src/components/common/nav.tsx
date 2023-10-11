import clsx from "clsx";
import { useState } from "react";
type NavListType = {
  label: string;
  value: string;
};
type NavProps = {
  value?: string;
  list: [NavListType, NavListType, NavListType];
  onChange: (value: string) => void;
};
const Nav = ({ value, list, onChange }: NavProps) => {
  const [index, setIndex] = useState(list.findIndex(item => item.value === value));
  return (
    <ul className="relative flex">
      {list.map((item, idx) => {
        return (
          <li
            key={item.value}
            className={clsx(
              "flex-1 cursor-pointer py-3 text-center text-lg font-medium",
              item.value === value ? "text-[#1E1E1E]" : "text-[#707888]",
            )}
            onClick={() => {
              setIndex(idx);
              onChange(item.value);
            }}
          >
            {item.label}
          </li>
        );
      })}
      <span
        className={clsx("absolute inset-x-0 bottom-0 h-[2px] w-1/3 bg-[#FF7314] duration-300", {
          "translate-x-0": index === 0,
          "translate-x-100": index === 1,
          "translate-x-200": index === 2,
        })}
      />
    </ul>
  );
};
export default Nav;
