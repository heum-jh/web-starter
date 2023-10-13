import { useState } from "react";
import TempImage from "../common/temp-image";

const ShopCard = () => {
  const [isBookMark, setIsBookMark] = useState(false);
  return (
    <li className="p-5">
      <div className="flex items-center justify-between">
        <div className="flex-auto">
          <div className="font-SUITE text-lg font-semibold text-[#1E1E1E]">카페이름</div>
          <div className="text-sm font-normal text-[#707888]">0.0&nbsp;km</div>
        </div>
        <button type="button" onClick={() => setIsBookMark(!isBookMark)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 7.8C5 6.11984 5 5.27976 5.32698 4.63803C5.6146 4.07354 6.07354 3.6146 6.63803 3.32698C7.27976 3 8.11984 3 9.8 3H14.2C15.8802 3 16.7202 3 17.362 3.32698C17.9265 3.6146 18.3854 4.07354 18.673 4.63803C19 5.27976 19 6.11984 19 7.8V21L12 17L5 21V7.8Z"
              fill={isBookMark ? "#FF7314" : "transparent"}
              stroke={isBookMark ? "transparent" : "#A2A9B5"}
              strokeWidth={isBookMark ? "0" : "1.5"}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="mt-5 text-sm font-medium text-[#111111]">영업 중</div>
      <div className="flex gap-x-3">
        {Array.from({ length: 5 }).map((_, idx) => (
          <TempImage key={idx} width={80} height={80} className="rounded-[0.13rem]" />
        ))}
      </div>
    </li>
  );
};
export default ShopCard;
