import clsx from "clsx";
import TempImage from "../common/temp-image";
import { useState } from "react";

const CATEGORY_LIST = ["전체", "소형견", "중형견", "대형견", "활발한", "소심한"];

const HomeCategory = () => {
  const [focusIndex, setFocusIndex] = useState(0);
  return (
    <ul className="sticky top-0 grid auto-cols-[3rem] grid-flow-col gap-x-5 overflow-auto bg-white px-5 py-4">
      {CATEGORY_LIST.map((label, idx) => {
        if (idx === 0) {
          return (
            <li key={idx} className="cursor-pointer" onClick={() => setFocusIndex(idx)}>
              <div
                className={clsx(
                  "h-12 w-12 rounded-full bg-black text-center text-sm font-extrabold leading-[3rem] text-white",
                  focusIndex === idx && "shadow-[0_0_0_1px_#FF7314]",
                )}
              >
                ALL
              </div>
              <div
                className={clsx(
                  "mt-[0.38rem] text-center text-sm",
                  focusIndex === idx ? "font-semibold text-[#1E1E1E]" : "font-normal text-[#A2A9B5]",
                )}
              >
                {label}
              </div>
            </li>
          );
        }
        return (
          <li key={idx} className="cursor-pointer" onClick={() => setFocusIndex(idx)}>
            <TempImage
              width={48}
              height={48}
              className={clsx("rounded-full", focusIndex === idx && "shadow-[0_0_0_1px_#FF7314]")}
            />
            <div
              className={clsx(
                "mt-[0.38rem] text-center text-sm",
                focusIndex === idx ? "font-semibold text-[#1E1E1E]" : "font-normal text-[#A2A9B5]",
              )}
            >
              {label}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default HomeCategory;
