import clsx from "clsx";
import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";

const Profile = () => {
  const [checkNickName, setCheckNickName] = useState<string>("");
  const [isCertification, setIsCertification] = useState<boolean>(false); //인증하기 버튼
  const [phoneNumber, setPhoneNumber] = useState<string>(""); //핸드폰 번호
  const [isDonePhoneNumber, setIsDonePhoneNumber] = useState(false); // 핸드폰 번호 전부 입력
  const [count, setCount] = useState(180); //타이머
  const [isCertificationNumber, setIsCertificationNumber] = useState<boolean>(false); //인증번호 4자리 이상

  const phoneNumberConvert = (e: ChangeEvent<HTMLInputElement>) => {
    const numericValue: string = e.target.value.replace(/\D/g, "");
    const hyphenPhoneNumber = numericValue.replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
    setPhoneNumber(hyphenPhoneNumber);
    if (hyphenPhoneNumber.length > 12) {
      setIsDonePhoneNumber(true);
    } else {
      setIsDonePhoneNumber(false);
    }
  };

  useEffect(() => {
    if (!isCertification) return;
    const certificationTimmer = setInterval(() => {
      setCount(count => count - 1);
    }, 1000);
    if (count === 0) {
      clearInterval(certificationTimmer);
    }
    return () => clearInterval(certificationTimmer);
  }, [count, isCertification]);

  const secondsToTime = (seconds: number) => {
    const minutes: number = Math.floor(seconds / 60);
    const remainingSeconds: number = seconds % 60;

    const formattedMinutes: string = String(minutes).padStart(2, "0");
    const formattedSeconds: string = String(remainingSeconds).padStart(2, "0");

    return `${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <div className="relative mx-5 mt-5">
      <div className="flex flex-col gap-2">
        <div className="text-[1.5rem]/[2.125rem] font-bold text-[#1e1e1e]">프로필 작성하기</div>
        <div className="text-[0.875rem]/[1.25rem] font-normal text-[#707888]">
          신뢰할 수 있는 커뮤니티를 위해 휴대폰 인증이 필요합니다!
        </div>
      </div>
      <div className="mt-6">
        <div className="flex flex-col">
          <span className="text-[0.875rem]/[1.25rem] font-semibold text-[#111111]">닉네임</span>
          <input
            className="h-14 rounded-[0.25rem] bg-[#F4F4F5] px-4 text-[1.125rem]/[1.5rem] font-normal text-[#1E1E1E] outline-none"
            placeholder="닉네임을 입력해주세요"
            onChange={e => {
              setCheckNickName(e.target.value);
            }}
          />
          {checkNickName.length > 2 && (
            <div className="mt-[0.375rem] flex items-center gap-1">
              <div className="flex h-[0.833rem] w-[0.833rem] items-center justify-center rounded-full bg-[#EE4633]">
                <Image src={"/images/assets/common/check.svg"} alt="check" width={9} height={6} />
              </div>
              <span className="text-[0.875rem]/[1.25rem] font-normal text-[#EE4633]">중복된 닉네임이 있습니다.</span>
            </div>
          )}
        </div>
        <div className="mt-[1.375rem] flex flex-col">
          <span className="mb-[0.375rem] text-[0.875rem]/[1.25rem] font-semibold text-[#111111]">휴대폰 번호</span>
          <div className="flex gap-2">
            <input
              maxLength={13}
              className="h-14 flex-1 rounded-[0.25rem] bg-[#F4F4F5] px-4 text-[1.125rem]/[1.5rem] font-normal text-[#1E1E1E] outline-none"
              placeholder="번호를 입력해 주세요"
              value={phoneNumber}
              onChange={e => {
                phoneNumberConvert(e);
              }}
            />
            <button
              disabled={!isDonePhoneNumber}
              onClick={() => {
                setIsCertification(true);
              }}
              className={clsx(
                "h-14 w-[5.188rem] rounded-[0.25rem] text-[1.125rem]/[1.5rem] font-normal text-[#ffffff]",
                isDonePhoneNumber ? "bg-[#FF7314]" : "bg-[#fdccb0]",
              )}
            >
              {isCertification ? "재전송" : "인증하기"}
            </button>
          </div>
          {isCertification && (
            <>
              <div className="w-335 relative mt-2">
                <input
                  onChange={e => {
                    const value = e.target.value;
                    if (value.length > 3) {
                      setIsCertificationNumber(true);
                    } else {
                      setIsCertificationNumber(false);
                    }
                  }}
                  className="h-14 w-full rounded-[0.25rem] bg-[#F4F4F5] pl-4 pr-20 text-[1.125rem]/[1.5rem] font-normal text-[#1E1E1E] outline-none"
                  placeholder="인증번호를 입력해 주세요"
                />
                <div className="absolute right-4 top-1/2 translate-y-[-50%] text-[1rem]/[1.5rem] font-medium text-[#F2555A]">
                  {secondsToTime(count)}
                </div>
              </div>
              <div className="mt-[0.875rem] flex items-center gap-1">
                <div className="flex h-[0.833rem] w-[0.833rem] items-center justify-center rounded-full bg-[#EE4633]">
                  <Image src={"/images/assets/common/check.svg"} alt="check" width={9} height={6} />
                </div>
                <span className="text-[0.875rem]/[1.25rem] font-normal text-[#EE4633]">
                  인증번호를 다시 확인해주세요.
                </span>
              </div>
            </>
          )}

          <button
            className={clsx(
              "fixed bottom-3 mt-[15.5rem] h-14 w-[20.938rem] items-center justify-center rounded-[0.25rem] text-[1.125rem]/[1.5rem] font-semibold text-[#ffffff]",
              isCertificationNumber ? "bg-[#ff7314]" : "bg-[#FDDCB0]",
            )}
          >
            다음
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
