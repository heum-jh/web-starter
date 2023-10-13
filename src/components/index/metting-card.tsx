import TempImage from "../common/temp-image";

const MettingCard = ({ onClick }: { onClick?: () => void }) => {
  return (
    <li className="flex w-full cursor-pointer gap-2 rounded bg-white p-4" onClick={onClick}>
      <div className="h-[4.5rem] w-[4.5rem] shrink-0 basis-[4.5rem]">
        <TempImage width={72} height={72} />
      </div>
      <div className="flex min-w-0 flex-auto flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="truncate text-[1.125rem]/[1.5rem] font-bold text-[#1E1E1E]">같이 산책시켜요!</span>
          <span className="shrink-0 basis-auto rounded-[6.25rem] bg-[#FEEFD7] px-2 py-[0.13rem] text-[0.625rem]/[1rem] font-semibold text-[#FF7314]">
            일일모임
          </span>
        </div>
        <div className="truncate text-[0.875rem]/[1.25rem] font-normal text-[#707888]">
          서울숲으로 가실 분들 모집합니다~!!
        </div>
        <div className="flex items-center gap-1 text-[0.75rem]/[1.125rem] font-medium">
          <span className="text-[#1E1E1E]">성동구</span>
          <span className="inline-block h-[2px] w-[2px] rounded-full bg-[#DBDEE4]" />
          <span className="text-[#707888]">10.10(수)</span>
          <span className="inline-block h-[2px] w-[2px] rounded-full bg-[#DBDEE4]" />
          <span className="text-[#707888]">
            참여자 <span className="text-[#FF7314]">2</span>
          </span>
        </div>
      </div>
    </li>
  );
};
export default MettingCard;
