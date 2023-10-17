import clsx from "clsx";
import { useState } from "react";
import { NextPageWithLayout } from "../_app";
import SelectPopup from "src/components/common/select-popup";
import TextArea from "src/components/common/textarea";

const LeavePage: NextPageWithLayout = () => {
  const [reason, setReason] = useState<string>("");
  const [constent, setContent] = useState<string>("");
  return (
    <div className="relative mx-5 mt-5">
      <div className="flex flex-col gap-2">
        <div className="text-[1.5rem]/[2.125rem] font-bold text-[#1e1e1e]">
          탈퇴 사유와
          <br />
          내용을 작성해 주세요!
        </div>
        <div className="text-[0.875rem]/[1.25rem] font-normal text-[#707888]">
          회원 탈퇴 후에는 기록(게시글, 북마크 등) 복구가
          <br /> 불가능 합니다.
        </div>
      </div>
      <div className="mt-6">
        <div className="mt-[1.75rem] flex flex-col">
          <span className="mb-[0.375rem] text-[0.875rem]/[1.25rem] font-semibold text-[#111111]">탈퇴 사유</span>
          <SelectPopup
            placeholder="탈퇴 사유를 선택해 주세요"
            placeholderColor="#A2A9B5"
            list={[
              { label: "자주 사용하지 않는 서비스에요", value: "자주 사용하지 않는 서비스에요" },
              { label: "오류가 많아요", value: "오류가 많아요" },
              { label: "다른 앱을 찾았어요", value: "다른 앱을 찾았어요" },
              { label: "기타", value: "기타" },
            ]}
            value={reason}
            onChange={value => setReason(value)}
            className="mt-[0.375rem] flex h-[3.25rem] w-full appearance-none justify-between border-none bg-[#f4f4f5] px-4 text-[1.125rem]/[1.5rem] font-normal  outline-none"
          />
          <div className="mt-[1.37rem]">
            <span className="text-[0.875rem]/[1.25rem] font-semibold text-[#111111]">내용</span>
            <TextArea
              onChange={e => {
                setContent(e.currentTarget.value);
              }}
              placeholder="성향을 입력해 주세요"
              className="mt-[0.375rem]"
            />
          </div>
          <button
            type="button"
            className={clsx(
              "fixed bottom-3 mt-[15.5rem] h-14 w-[20.938rem] items-center justify-center rounded-[0.25rem] text-[1.125rem]/[1.5rem] font-semibold text-[#ffffff]",
              constent.length >= 2 && reason ? "bg-[#ff7314]" : "bg-[#FDDCB0]",
            )}
          >
            탈퇴하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeavePage;
LeavePage.type = "detail";
