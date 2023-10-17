import MettingCard from "../index/metting-card";

const Gathering = () => {
  return (
    <div className="bg-[#F4F4F5] pb-5 pt-[1.625rem]">
      <div className="px-5 pt-[1.625rem]">
        <div className="pb-[1.125rem] text-[1rem]/[1.375rem] font-semibold text-[#111111]">승인 대기</div>
        <div className="flex flex-col gap-3 pb-5">
          <MettingCard />
        </div>
      </div>
      <div className="px-5 pt-[1.625rem]">
        <div className="pb-[1.125rem] text-[1rem]/[1.375rem] font-semibold text-[#111111]">참여 모임</div>
        <div className="flex flex-col gap-3 pb-5">
          {Array.from({ length: 3 }).map((_, index) => {
            return <MettingCard key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Gathering;
