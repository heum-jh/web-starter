import TempImage from "../common/temp-image";
type MeetingBoardCardProps = {
  onClick?: () => void;
};
const MeetingBoardCard = ({ onClick }: MeetingBoardCardProps) => {
  return (
    <div className="space-y-4 px-5 py-6" onClick={onClick}>
      <div className="flex items-center gap-x-2">
        <div>
          <TempImage width={36} height={36} className="rounded-full" />
        </div>
        <div>
          <div className="text-base font-medium text-[#1E1E1E]">산책왕 홍길동</div>
          <div className="flex items-center gap-x-1">
            <span className="text-xs/[1.125rem] font-medium text-[#1E1E1E]">성동구</span>
            <span className="h-[2px] w-[2px] rounded-full bg-[#DBDEE4]"></span>
            <span className="text-xs/[1.125rem] font-medium text-[#A2A9B5]">23시간전</span>
          </div>
        </div>
      </div>
      <div className="h-[13.75rem] w-full rounded bg-green-300"></div>
      <div className="line-clamp-2 text-base/[1.75rem] font-normal text-[#707888]">
        서울숲으로 가실 분들 모집합니다~!!서울숲으로 가실 분들 모집합니다~!!서울숲으로 가실 분들 모집합니다~!!
      </div>
      <div className="space-x-[0.62rem]">
        <label className="inline-flex cursor-pointer items-center gap-x-[0.37rem] text-base font-medium text-[#A2A9B5]">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M16.1111 3C19.6333 3 22 6.3525 22 9.48C22 15.8138 12.1778 21 12 21C11.8222 21 2 15.8138 2 9.48C2 6.3525 4.36667 3 7.88889 3C9.91111 3 11.2333 4.02375 12 4.92375C12.7667 4.02375 14.0889 3 16.1111 3Z"
              fill={true ? "#FF7314" : "transparent"}
              stroke={true ? "transparent" : "#A2A9B5"}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {true ? "좋아요" : "7"}
        </label>
        <label className="inline-flex cursor-pointer items-center gap-x-[0.37rem] text-base font-medium text-[#A2A9B5]">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M21 12C21 16.9706 16.9706 21 12 21C10.8029 21 9.6603 20.7663 8.61549 20.3419C8.41552 20.2607 8.31554 20.2201 8.23472 20.202C8.15566 20.1843 8.09715 20.1778 8.01613 20.1778C7.9333 20.1778 7.84309 20.1928 7.66265 20.2229L4.10476 20.8159C3.73218 20.878 3.54589 20.909 3.41118 20.8512C3.29328 20.8007 3.19933 20.7067 3.14876 20.5888C3.09098 20.4541 3.12203 20.2678 3.18413 19.8952L3.77711 16.3374C3.80718 16.1569 3.82222 16.0667 3.82221 15.9839C3.8222 15.9028 3.81572 15.8443 3.798 15.7653C3.77988 15.6845 3.73927 15.5845 3.65806 15.3845C3.23374 14.3397 3 13.1971 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
              stroke="#A2A9B5"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {true ? "댓글" : "5"}
        </label>
      </div>
    </div>
  );
};
export default MeetingBoardCard;
