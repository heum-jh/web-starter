import Image from "next/image";
import { NextPageWithLayout } from "../_app";

const MyPage: NextPageWithLayout = () => {
  return (
    <div className="mt-5">
      <div className="flex flex-col items-center justify-center">
        <div className="relative h-[5.5rem] w-[5.5rem] rounded-full">
          <Image
            src="/images/assets/common/default-profile.svg"
            alt="profile"
            fill
            className="rounded-full object-cover"
          />
        </div>
        <div className="mt-[1.188rem] flex flex-col items-center">
          <span className="text-[1.25rem]/[1.75rem] font-bold">닉네임</span>
          <span className="text-[1rem]/[1.5rem] font-medium text-[#A2A9B5]">프로필을 입력해 주세요</span>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
