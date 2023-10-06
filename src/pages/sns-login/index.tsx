import Image from "next/image";

const SnsLoginPage = () => {
  return (
    <div className="p-5">
      <div>
        <div className="relative mx-auto mb-[15.438rem] mt-[7.375rem] h-8 w-8">로고</div>
      </div>
      <div className="flex flex-col gap-[0.625rem]">
        <button
          type="button"
          className="flex h-14 w-full cursor-pointer items-center justify-center gap-2 rounded-[0.25rem] bg-[#1E1E1E] text-[1.125rem]/[1.5rem] font-semibold text-[#ffffff]"
        >
          <div className="relative h-8 w-8">
            <Image src={"/images/assets/sns-icon/apple.svg"} fill alt="apple" className="object-cover" />
          </div>
          애플 로그인
        </button>
        <button
          type="button"
          className="flex h-14 w-full cursor-pointer items-center justify-center gap-2 rounded-[0.75rem] bg-[#FEE500] text-[1.125rem]/[1.5rem] font-semibold text-[#1e1e1e]"
        >
          <div className="relative h-8 w-8">
            <Image src={"/images/assets/sns-icon/kakao.svg"} fill alt="kakao" className="object-cover" />
          </div>
          카카오 로그인
        </button>
        <button
          type="button"
          className="flex h-14 w-full cursor-pointer items-center justify-center gap-2 rounded-[0.25rem] bg-[#03C75A] text-[1.125rem]/[1.5rem] font-semibold
            text-[#FFFFFF]"
        >
          <div className="relative h-8 w-8">
            <Image src={"/images/assets/sns-icon/naver.svg"} fill alt="naver" className="object-cover" />
          </div>
          네이버 로그인
        </button>
        <button
          type="button"
          className="flex h-14 w-full cursor-pointer items-center justify-center gap-2 rounded-[0.25rem] border border-[#DBDEE4] bg-[#ffffff] text-[1.125rem]/[1.5rem] font-semibold text-[#1e1e1e]"
        >
          <div className="relative h-8 w-8">
            <Image src={"/images/assets/sns-icon/google.svg"} fill alt="google" className="object-cover" />
          </div>
          Google로 로그인
        </button>
      </div>
      <div className="mt-[1.813rem] flex justify-center text-center text-[0.875rem]/[1.25rem] font-normal text-[#9CA2AF]">
        서비스 관련 이용동의와
        <br /> 개인정보 지침을 확인하세요
      </div>
    </div>
  );
};

export default SnsLoginPage;
