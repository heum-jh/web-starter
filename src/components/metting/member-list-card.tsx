import TempImage from "../common/temp-image";

const MettingMemberListCard = () => {
  return (
    <li className="flex w-full items-center gap-x-[0.62rem]">
      <div>
        <TempImage width={48} height={48} className="rounded-full border border-[#F0F1F2]" />
      </div>
      <div>
        <div className="text-xs font-medium text-[#FC843A]">모임장</div>
        <div className="text-base font-normal text-[#1E1E1E]">산책왕 홍길동</div>
      </div>
      <div className="ml-auto flex gap-x-[0.62rem]">
        <TempImage width={32} height={32} className="shrink-0 basis-[32px] rounded-full border border-[#F0F1F2]" />
        <TempImage width={32} height={32} className="shrink-0 basis-[32px] rounded-full border border-[#F0F1F2]" />
        <TempImage width={32} height={32} className="shrink-0 basis-[32px] rounded-full border border-[#F0F1F2]" />
        <button type="button" className="">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12Z"
              stroke="#A2A9B5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12Z"
              stroke="#A2A9B5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12Z"
              stroke="#A2A9B5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </li>
  );
};
export default MettingMemberListCard;
