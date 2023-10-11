import { NextPageWithLayout } from "src/pages/_app";

const MyPageSettingPage: NextPageWithLayout = () => {
  return (
    <div className="bg-[#F6F6F6]">
      <ul className="flex  flex-col ">
        <li className="flex h-[4rem] items-center justify-between border-b border-[#F0F1F2] bg-[#ffffff] pl-[1.25rem] pr-[1.25rem] ">
          <div className=" text-lg/[1.5rem] font-medium">공지사항</div>
          <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 7L4 4L1 1" stroke="#707888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </li>
        <li className="flex h-[4rem] items-center justify-between border-b border-[#F0F1F2] bg-[#ffffff] pl-[1.25rem] pr-[1.25rem] ">
          <div className=" text-lg/[1.5rem] font-medium">자주 묻는 질문</div>
          <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 7L4 4L1 1" stroke="#707888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </li>
        <li className="flex h-[4rem] items-center justify-between border-b border-[#F0F1F2] bg-[#ffffff] pl-[1.25rem] pr-[1.25rem] ">
          <div className=" text-lg/[1.5rem] font-medium">1:1 문의</div>
          <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 7L4 4L1 1" stroke="#707888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </li>
      </ul>
      <ul className="mt-[0.75rem]  flex flex-col">
        <li className="flex h-[4rem] items-center justify-between border-b border-[#F0F1F2] bg-[#ffffff] pl-[1.25rem] pr-[1.25rem] ">
          <div className=" text-lg/[1.5rem] font-medium">계정 관리</div>
          <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 7L4 4L1 1" stroke="#707888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </li>
        <li className="flex h-[4rem] items-center justify-between border-b border-[#F0F1F2] bg-[#ffffff] pl-[1.25rem] pr-[1.25rem] ">
          <div className=" text-lg/[1.5rem] font-medium">알림 설정</div>
          <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 7L4 4L1 1" stroke="#707888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </li>
      </ul>
      <ul className="mt-[0.75rem]  flex flex-col">
        <li className="flex h-[4rem] items-center justify-between  bg-[#ffffff] pl-[1.25rem] pr-[1.25rem] ">
          <div className=" text-lg/[1.5rem] font-medium">이용약관</div>
          <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 7L4 4L1 1" stroke="#707888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </li>
      </ul>
    </div>
  );
};

export default MyPageSettingPage;
MyPageSettingPage.type = "detail";
MyPageSettingPage.title = "설정";
