import clsx from "clsx";
import { useRef } from "react";
import MettingMemberListCard from "src/components/metting/member-list-card";
import Alert from "src/core/function/alert";
import { NextPageWithLayout } from "src/pages/_app";

const ScheduleDetailPage: NextPageWithLayout = () => {
  const isAttendance = useRef(false);
  return (
    <>
      <div className="flex gap-x-3 border-b-[0.75rem] border-[#F0F1F2] px-5 py-6">
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
        </div>
      </div>
      <div className="space-y-4 border-b-[0.75rem] border-[#F0F1F2] px-5 py-8 pt-5">
        <div className="flex items-center gap-x-2 py-3">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.9593 21.0461C12.6409 21.3618 12.3204 21.6796 12 22C11.6796 21.6796 11.3591 21.3618 11.0407 21.0461C7.38479 17.4208 4 14.0643 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10C20 14.0643 16.6152 17.4208 12.9593 21.0461ZM15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10Z"
                fill="#D9D9D9"
              />
            </svg>
          </div>
          <div className="space-y-[0.12rem]">
            <div className="text-lg font-medium text-[#1E1E1E]">성수역</div>
            <div className="text-sm font-normal text-[#707888]">서울 성동구 아차산로 113</div>
          </div>
        </div>
        <div className="h-[150px] w-full rounded bg-red-300 text-center text-3xl leading-[150px] text-white">지도</div>
        <div className="rounded border border-[#F0F1F2] px-4 py-[0.88rem] text-base font-normal text-[#363E48]">
          ㅇㅇ건물앞에서 만나요!
        </div>
      </div>
      <div className="bg-white p-5 ">
        <div className="mb-5 text-lg font-semibold text-[#1E1E1E]">
          모임원<span className="ml-2 text-[#FF7314]">5</span>
        </div>
        <ul className="space-y-6">
          <MettingMemberListCard />
          <MettingMemberListCard />
          <MettingMemberListCard />
          <MettingMemberListCard />
        </ul>
      </div>
      <div className="sticky inset-x-0 bottom-0 bg-white px-5 py-3">
        <button
          type="button"
          className={clsx(
            "flex w-full items-center justify-center rounded py-4 text-white",
            isAttendance.current ? "bg-[#1E1E1E]" : "bg-[#FC843A] ",
          )}
          onClick={async e => {
            e.stopPropagation();
            if (isAttendance) {
              const confirm = await Alert.confirm("참여를 취소하시겠어요?", undefined, {
                cancelText: "취소",
                confirmText: "참여 취소하기",
              });
              if (confirm) {
              }
            } else {
              const confirm = await Alert.confirm("해당 일정에 참여하시겠어요?", undefined, {
                cancelText: "취소",
                confirmText: "참여하기",
              });
              if (confirm) {
              }
            }
          }}
        >
          {isAttendance.current ? "취소하기" : "참여하기"}
        </button>
      </div>
    </>
  );
};
export default ScheduleDetailPage;
ScheduleDetailPage.type = "detail";
