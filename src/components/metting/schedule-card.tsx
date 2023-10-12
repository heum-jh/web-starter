import Alert from "src/core/function/alert";
import TempImage from "../common/temp-image";
type MettingScheduleCardProps = {
  isMap?: boolean;
};
const MettingScheduleCard = ({ isMap = false }: MettingScheduleCardProps) => {
  return (
    <li
      className="flex gap-x-3 border-b border-[#F0F1F2] py-6"
      onClick={() => {
        Alert.alert("더 자세한 내용을 보실려면<br/>모임에 참여해보세요!");
      }}
    >
      <div className="h-fit rounded bg-[#F0F1F2] px-2 py-[0.38rem] text-center">
        <div className="text-xs font-medium text-[#707888]">D-Day</div>
        <div className="text-2xl font-semibold text-[#1E1E1E]">7</div>
      </div>
      <div className="flex-auto space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex-auto space-y-2">
            <div className="text-base font-semibold text-[#1F262F]">10.10 (수)</div>
            <div className="truncate text-base font-medium text-[#363E48]">성수역</div>
          </div>
          <button type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 18L15 12L9 6"
                stroke="#FC843A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="flex gap-x-[0.62rem]">
          <TempImage width={36} height={36} className="rounded-full" />
          <TempImage width={36} height={36} className="rounded-full" />
          <TempImage width={36} height={36} className="rounded-full" />
          <TempImage width={36} height={36} className="rounded-full" />
          <TempImage width={36} height={36} className="rounded-full" />
          <button
            type="button"
            className="h-[36px] w-[36px] rounded-full bg-[#F0F1F2] text-[0.625rem]/[36px] font-normal text-[#A2A9B5]"
          >
            더보기
          </button>
        </div>
        {isMap && <div className="h-[6.25rem] w-full border border-[#F0F1F2] bg-gray-400"></div>}
        {isMap && (
          <div className="w-full rounded border border-[#F0F1F2] px-4 py-[0.88rem]">ㅇㅇ건물앞에서 만나요!</div>
        )}
      </div>
    </li>
  );
};
export default MettingScheduleCard;
