import { useRouter } from "next/router";
import { NextPageWithLayout } from "src/pages/_app";

const AccountPage: NextPageWithLayout = () => {
  const router = useRouter();
  return (
    <div className="bg-[#F6F6F6]">
      <ul className="flex  flex-col ">
        <li className="flex h-[4rem] items-center justify-between border-b border-[#F0F1F2] bg-[#ffffff] pl-[1.25rem] pr-[1.25rem]">
          <div className=" text-base font-medium">계정</div>
          <div className="text-base font-medium text-[#707888]">abcdef@gmail.com</div>
        </li>
        <li className="flex h-[4rem] items-center justify-between  border-b border-[#F0F1F2] bg-[#ffffff] pl-[1.25rem] pr-[1.25rem] ">
          <div className="font-base flex w-full flex-row justify-between font-medium">
            휴대폰 번호
            <div className="flex">
              <div className="font-base mr-[0.5rem] font-medium text-[#707888] ">010-1234-1234</div>
              <button
                className="flex h-[2.rem] w-[3.5rem] items-center justify-center rounded-[0.25rem] bg-[#1E1E1E]"
                onClick={() => router.push("/account/phone-modify")}
              >
                <span className=" text-sm  font-medium text-[#ffffff]">변경</span>
              </button>
            </div>
          </div>
        </li>
      </ul>
      <ul className="mt-[0.75rem]  flex flex-col">
        <li
          className="flex h-[4rem] items-center justify-between border-b border-[#F0F1F2] bg-[#ffffff] pl-[1.25rem] pr-[1.25rem] "
          onClick={() => router.push("/account/leave")}
        >
          <div className=" text-lg/[1.5rem] font-medium">회원탈퇴</div>
          <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 7L4 4L1 1" stroke="#707888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </li>
        <li className="flex h-[4rem] items-center justify-between border-b border-[#F0F1F2] bg-[#ffffff] pl-[1.25rem] pr-[1.25rem] ">
          <div className=" text-lg/[1.5rem] font-medium">로그아웃</div>
          <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 7L4 4L1 1" stroke="#707888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </li>
      </ul>
    </div>
  );
};

export default AccountPage;
AccountPage.type = "detail";
AccountPage.title = "계정관리";
