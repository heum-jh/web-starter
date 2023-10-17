import Image from "next/image";
import { NextPageWithLayout } from "../_app";
import { useState } from "react";
import { cn } from "src/core/function/cn";
import BookMark from "src/components/my-page/book-mark";
import Gathering from "src/components/my-page/gathering";
import MyPagePost from "src/components/my-page/post";

const MyPage: NextPageWithLayout = () => {
  const [subTab, setSubTab] = useState<"post" | "bookmark" | "gathering">("post");
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
        <div className="mt-[2rem] flex w-full gap-2 px-5 text-[1rem]/[1.5rem] font-medium text-[#A2A9B5]">
          <div className="flex h-10 flex-1 cursor-pointer items-center justify-center rounded-[0.25rem] bg-[#F4F4F5]">
            프로필 수정
          </div>
          <div className="flex h-10 flex-1 cursor-pointer items-center justify-center rounded-[0.25rem] bg-[#F4F4F5]">
            설정
          </div>
        </div>
      </div>
      <div className="mt-12 flex gap-4 px-5">
        {Array.from({ length: 3 }).map((_, index) => {
          return (
            <div key={index} className="flex flex-col items-center gap-[0.25rem]">
              <div className="relative h-12 w-12">
                <Image src="/images/assets/common/default-dog.svg" alt="pet-profile" fill />
              </div>
              <span className="whitespace-nowrap text-[0.875rem]/[1.25rem] font-medium text-[#1e1e1e]">강아지이름</span>
            </div>
          );
        })}
        <div className="flex cursor-pointer flex-col items-center gap-[0.25rem]">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#F0F1F2]">
            <div className="relative h-[0.875rem] w-[0.875rem]">
              <Image src="/images/assets/common/plus.svg" alt="pet-profile" fill className="object-cover" />
            </div>
          </div>
          <span>추가하기</span>
        </div>
      </div>
      <div className="mt-5 h-3 bg-[#F6F6F6]" />
      <div className="flex h-[3.125rem] cursor-pointer text-[1.125rem]/[1.5rem] font-medium text-[#707888]">
        <div
          onClick={() => {
            setSubTab("post");
          }}
          className={cn(
            "flex flex-1 items-center justify-center",
            subTab === "post" && "border-b border-[#FF7314] text-[#1E1E1E]",
          )}
        >
          게시글
        </div>
        <div
          onClick={() => {
            setSubTab("bookmark");
          }}
          className={cn(
            "flex flex-1 items-center justify-center",
            subTab === "bookmark" && "border-b border-[#FF7314] text-[#1E1E1E]",
          )}
        >
          북마크
        </div>
        <div
          onClick={() => {
            setSubTab("gathering");
          }}
          className={cn(
            "flex flex-1 items-center justify-center",
            subTab === "gathering" && "border-b border-[#FF7314] text-[#1E1E1E]",
          )}
        >
          모임
        </div>
      </div>
      {subTab === "post" && <MyPagePost />}
      {subTab === "bookmark" && <BookMark />}
      {subTab === "gathering" && <Gathering />}
    </div>
  );
};

export default MyPage;
