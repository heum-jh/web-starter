import Image from "next/image";
import { NextPageWithLayout } from "../_app";
import { useState } from "react";
import { cn } from "src/core/function/cn";

import Gathering from "src/components/my/gathering";
import BookMark from "src/components/my/book-mark";

const UserPage: NextPageWithLayout = () => {
  const [subTab, setSubTab] = useState<"bookMark" | "gathering">("bookMark");
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
          <span className="text-[1rem]/[1.5rem] font-medium text-[#A2A9B5]">소개가 없습니다.</span>
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
      </div>
      <div className="mt-5 h-3 bg-[#F6F6F6]" />
      <div className="flex h-[3.125rem] cursor-pointer text-[1.125rem]/[1.5rem] font-medium text-[#707888]">
        <div
          onClick={() => {
            setSubTab("bookMark");
          }}
          className={cn(
            "flex flex-1 items-center justify-center",
            subTab === "bookMark" && "border-b border-[#FF7314] text-[#1E1E1E]",
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
      {subTab === "bookMark" && <BookMark />}
      {subTab === "gathering" && <Gathering />}
    </div>
  );
};

export default UserPage;
UserPage.type = "detail";
