import clsx from "clsx";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
const currentCheckedState = {
  overAge: false,
  service: false,
  agreeInfo: false,
  marketing: false,
} as const;
const ServicePage = () => {
  const [checkedState, setCheckedState] = useState<typeof currentCheckedState & { [key: string]: boolean }>(
    currentCheckedState,
  );
  const handleOnChange = (target: string) => {
    setCheckedState(prev => ({ ...prev, [target]: !checkedState[target] }));
  };
  const handleSelectAll = (event: ChangeEvent<HTMLInputElement>) => {
    const updatedCheckedState: { [key: string]: boolean } = {};
    for (const key in checkedState) {
      if (checkedState.hasOwnProperty(key)) {
        updatedCheckedState[key] = event.target.checked;
      }
    }
    setCheckedState(updatedCheckedState as typeof currentCheckedState);
  };
  return (
    <div className="mt-6 px-5">
      <div>
        <div className="text-[1.5rem]/[2.125rem] font-bold text-[#111111]">
          서비스 이용을 위해
          <br /> 이용약관에 동의해주세요.
        </div>
        <div className="mb-[9.125rem] mt-4 text-[1rem]/[1.5rem] font-normal text-[#363E48]">
          정책 및 약관의 모든 내용을 반드시 확인해주세요.
        </div>
      </div>
      <div>
        <label className="flex h-14 w-full cursor-pointer items-center justify-between rounded-[0.25rem] bg-[#F4F4F5] px-5 text-[1.125rem]/[1.5rem] font-semibold">
          <span>전체동의</span>
          <input
            type="checkbox"
            name="agree"
            className="hidden"
            checked={Object.values(checkedState).every(value => value === true)}
            onChange={handleSelectAll}
          />
          <div
            className={clsx(
              "flex h-5 w-5 items-center justify-center rounded-full",
              Object.values(checkedState).every(value => value === true) ? "bg-[#FF7314]" : "bg-[#DBDEE4]",
            )}
          >
            <div className="relative h-[0.375rem] w-[0.563rem]">
              <Image src={"/images/assets/common/check.svg"} alt="check" fill className="object-cover" />
            </div>
          </div>
        </label>
        <div className="text-[1.125rem]/[1.5rem] font-normal text-[#1E1E1E]">
          <label className="flex h-16 w-full cursor-pointer items-center justify-between px-5">
            <span>
              <span className="font-medium">[필수]</span> 만 14세 이상
            </span>
            <input
              type="checkbox"
              name="agree"
              value="overAge"
              className="hidden"
              checked={checkedState.overAge}
              onChange={() => handleOnChange("overAge")}
            />
            <div
              className={clsx(
                "flex h-5 w-5 items-center justify-center rounded-full",
                checkedState.overAge ? "bg-[#FF7314]" : "bg-[#DBDEE4]",
              )}
            >
              <div className="relative h-[0.375rem] w-[0.563rem]">
                <Image src={"/images/assets/common/check.svg"} alt="check" fill className="object-cover" />
              </div>
            </div>
          </label>
          <label className="flex h-16 w-full cursor-pointer items-center justify-between px-5">
            <span>
              <span className="font-medium">[필수]</span> 서비스 이용약관
            </span>
            <input
              type="checkbox"
              name="agree"
              value="service"
              className="hidden"
              checked={checkedState.service}
              onChange={() => handleOnChange("service")}
            />
            <div
              className={clsx(
                "flex h-5 w-5 items-center justify-center rounded-full ",
                checkedState.service ? "bg-[#FF7314]" : "bg-[#DBDEE4]",
              )}
            >
              <div className="relative h-[0.375rem] w-[0.563rem]">
                <Image src={"/images/assets/common/check.svg"} alt="check" fill className="object-cover" />
              </div>
            </div>
          </label>
          <label className="flex h-16 w-full cursor-pointer items-center justify-between px-5">
            <span>
              <span className="font-medium">[필수]</span> 개인정보 제3자 제공 동의
            </span>
            <input
              type="checkbox"
              name="agree"
              value="agreeInfo"
              className="hidden"
              checked={checkedState.agreeInfo}
              onChange={() => handleOnChange("agreeInfo")}
            />
            <div
              className={clsx(
                "flex h-5 w-5 items-center justify-center rounded-full",
                checkedState.agreeInfo ? "bg-[#FF7314]" : "bg-[#DBDEE4]",
              )}
            >
              <div className="relative h-[0.375rem] w-[0.563rem]">
                <Image src={"/images/assets/common/check.svg"} alt="check" fill className="object-cover" />
              </div>
            </div>
          </label>
          <label className="flex h-16 w-full cursor-pointer items-center justify-between px-5">
            <span>
              <span className="font-medium">[선택]</span> 마케팅 정보 수신동의
            </span>
            <input
              type="checkbox"
              name="agree"
              value="marketing"
              className="hidden"
              checked={checkedState.marketing}
              onChange={() => handleOnChange("marketing")}
            />
            <div
              className={clsx(
                "flex h-5 w-5 items-center justify-center rounded-full",
                checkedState.marketing ? "bg-[#FF7314]" : "bg-[#DBDEE4]",
              )}
            >
              <div className="relative h-[0.375rem] w-[0.563rem]">
                <Image src={"/images/assets/common/check.svg"} alt="check" fill className="object-cover" />
              </div>
            </div>
          </label>
        </div>
      </div>
      <button
        className={clsx(
          "mt-3 h-14 w-full cursor-pointer rounded-[0.25rem] bg-[#FDDCB0] text-[1.125rem]/[1.5rem] font-semibold text-[#ffffff]",
          checkedState.agreeInfo && checkedState.overAge && checkedState.service ? "bg-[#FF7314]" : "bg-[#FDDCB0]",
        )}
      >
        동의하기
      </button>
    </div>
  );
};

export default ServicePage;
