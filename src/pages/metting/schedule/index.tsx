import { useState } from "react";
import SelectPopup from "src/components/common/select-popup";
import MettingScheduleCard from "src/components/metting/schedule-card";
import { NextPageWithLayout } from "src/pages/_app";

const SchedulePage: NextPageWithLayout = () => {
  const [sort, setSort] = useState("date");
  return (
    <div>
      <div className="flex items-center justify-between px-5">
        <span className="text-base font-semibold text-[#111111]">전체 모임 일정</span>
        <SelectPopup
          list={[
            { label: "디데이순", value: "date" },
            { label: "최신순", value: "new" },
            { label: "참여순", value: "member" },
          ]}
          value={sort}
          onChange={setSort}
        />
      </div>
      <div className="border-orange-500 px-5">
        <MettingScheduleCard isMap />
        <MettingScheduleCard isMap />
        <MettingScheduleCard isMap />
      </div>
    </div>
  );
};
export default SchedulePage;
SchedulePage.type = "detail";
SchedulePage.title = "일정";
