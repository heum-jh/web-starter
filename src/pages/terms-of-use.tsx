import clsx from "clsx";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const ServicePage = () => {
  const [allcheck, setAllcheck] = useState<boolean>(false);
  const [overAge, setOverAge] = useState<boolean>(false);
  const [service, setService] = useState<boolean>(false);
  const [agreeInfo, setAgreeInfo] = useState<boolean>(false);
  const [marketing, setMarketing] = useState<boolean>(false);
  useEffect(() => {
    if (allcheck) {
      setOverAge(true);
      setService(true);
      setAgreeInfo(true);
      setMarketing(true);
    } else {
      setOverAge(false);
      setService(false);
      setAgreeInfo(false);
      setMarketing(false);
    }
  }, [allcheck]);
  const allcheckState = useCallback(() => {
    if (overAge && service && agreeInfo && marketing) {
      return true;
    } else {
      return false;
    }
  }, [agreeInfo, marketing, overAge, service]);
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
          <input type="checkbox" className="hidden" checked={allcheckState()} onChange={() => setAllcheck(!allcheck)} />
          <div
            className={clsx(
              "flex h-5 w-5 items-center justify-center rounded-full ",
              allcheckState() ? "bg-[#FF7314]" : "bg-[#DBDEE4]",
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
            <input type="checkbox" className="hidden" checked={overAge} onChange={() => setOverAge(!overAge)} />
            <div
              className={clsx(
                "flex h-5 w-5 items-center justify-center rounded-full ",
                overAge ? "bg-[#FF7314]" : "bg-[#DBDEE4]",
              )}
            >
              <div className="relative h-[0.375rem] w-[0.563rem]">
                <Image src={"/images/assets/common/check.svg"} alt="check" fill className="object-cover" />
              </div>
            </div>
          </label>
          <label className="flex h-16 w-full cursor-pointer items-center  justify-between px-5">
            <span>
              <span className="font-medium">[필수]</span> 서비스 이용약관
            </span>
            <input type="checkbox" className="hidden" checked={service} onChange={() => setService(!service)} />
            <div
              className={clsx(
                "flex h-5 w-5 items-center justify-center rounded-full ",
                service ? "bg-[#FF7314]" : "bg-[#DBDEE4]",
              )}
            >
              <div className="relative h-[0.375rem] w-[0.563rem]">
                <Image src={"/images/assets/common/check.svg"} alt="check" fill className="object-cover" />
              </div>
            </div>
          </label>
          <label className="flex h-16 w-full cursor-pointer items-center  justify-between px-5">
            <span>
              <span className="font-medium">[필수]</span> 개인정보 제3자 제공 동의
            </span>
            <input type="checkbox" className="hidden" checked={agreeInfo} onChange={() => setAgreeInfo(!agreeInfo)} />
            <div
              className={clsx(
                "flex h-5 w-5 items-center justify-center rounded-full ",
                agreeInfo ? "bg-[#FF7314]" : "bg-[#DBDEE4]",
              )}
            >
              <div className="relative h-[0.375rem] w-[0.563rem]">
                <Image src={"/images/assets/common/check.svg"} alt="check" fill className="object-cover" />
              </div>
            </div>
          </label>
          <label className="flex h-16 w-full cursor-pointer items-center  justify-between px-5">
            <span>
              <span className="font-medium">[선택]</span> 마케팅 정보 수신동의
            </span>
            <input type="checkbox" className="hidden" checked={marketing} onChange={() => setMarketing(!marketing)} />
            <div
              className={clsx(
                "flex h-5 w-5 items-center justify-center rounded-full ",
                marketing ? "bg-[#FF7314]" : "bg-[#DBDEE4]",
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
          (overAge && service && agreeInfo) || allcheck ? "bg-[#FF7314]" : "bg-[#FDDCB0]",
        )}
      >
        동의하기
      </button>
    </div>
  );
};

export default ServicePage;
