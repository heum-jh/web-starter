import { useState } from "react";
import SelectPopup from "../common/select-popup";

const HomeMeetingList = () => {
  const [sort, setSort] = useState<string>("new");
  return (
    <div className="space-y-4 bg-[#F4F4F5] px-5 py-[1.56rem]">
      <div className="flex items-center justify-between">
        <span className="text-base font-semibold text-[#111111]">우리 동내 모임</span>
        <SelectPopup
          list={[
            { label: "최신순", value: "new" },
            { label: "일정순", value: "date" },
            { label: "모임원순", value: "member" },
            { label: "좋아요 순", value: "like" },
          ]}
          value={sort}
          onChange={setSort}
        />
      </div>
      <div className="space-y-3">
        {/* Component */}
        <div className="h-[6.5rem] w-full bg-white">Component</div>
        <div className="h-[6.5rem] w-full bg-white">Component</div>
        <div className="h-[6.5rem] w-full bg-white">Component</div>
        <div className="h-[6.5rem] w-full bg-white">Component</div>
      </div>
    </div>
  );
};

export default HomeMeetingList;
