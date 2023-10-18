import MeetingCard from "../index/meeting-card";
interface GatheringProps {
  isMine?: boolean;
}
const Gathering = ({ isMine = false }: GatheringProps) => {
  return (
    <div className="bg-[#F4F4F5] pb-14 ">
      {isMine && (
        <div className="px-5 pt-[1.625rem]">
          <div className="pb-[1.125rem] text-[1rem]/[1.375rem] font-semibold text-[#111111]">승인 대기</div>
          <div className="flex flex-col gap-3 pb-5">
            <MeetingCard />
          </div>
        </div>
      )}
      <div className="px-5 pt-[1.625rem]">
        <div className="pb-[1.125rem] text-[1rem]/[1.375rem] font-semibold text-[#111111]">참여 모임</div>
        <div className="flex flex-col gap-3 pb-5">
          {Array.from({ length: 3 }).map((_, index) => {
            return <MeetingCard key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Gathering;
