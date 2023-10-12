import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import ArticleCard from "src/components/article/article-card";
import useIsVisible from "src/core/hooks/use-is-visible";
import { NextPageWithLayout } from "../_app";

const ArticleDetailPage: NextPageWithLayout = () => {
  const router = useRouter();
  const [isLike, setIsLike] = useState(false);
  const [targetRef, isVisible] = useIsVisible();

  return (
    <>
      <header className={clsx("top-0 z-1 w-full", isVisible ? "absolute" : "fixed")}>
        <div
          className={clsx(
            "container flex h-16 w-full items-center gap-1 py-[0.38rem] pl-2 pr-5",
            isVisible ? "bg-transparent" : "bg-white",
          )}
        >
          <button type="button" className="p-3" onClick={() => router.back()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M11 20L3 12L11 4"
                stroke={isVisible ? "white" : "#111111"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <line
                x1="4.75"
                y1="12"
                x2="21.25"
                y2="12"
                stroke={isVisible ? "white" : "#111111"}
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </header>
      <main className="container flex-grow-[1]">
        <div ref={targetRef} className="relative h-[470px] w-full bg-red-400">
          <Image src={`https://via.placeholder.com/${500}x${500}/458278`} alt="" fill className="object-cover" />
          <div className="absolute bottom-0 w-full space-y-3 px-5 pb-7">
            <div className="space-y-[0.38rem]">
              <h1 className="font-SUITE text-[1.75rem]/[2.25rem] font-bold text-white">10월 여행지 추천!</h1>
              <p className="text-lg font-normal text-[#DBDEE4]">가을을 맞아 어떤 여행지가 있을까요?</p>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-normal text-[#DBDEE4]">23.10.10</span>
              <div className="inline-flex gap-x-[1.12rem]">
                <button
                  type="button"
                  className="inline-flex h-[36px] w-[36px] items-center justify-center rounded-full bg-[#F0F1F2]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M20.7914 12.6072C21.0355 12.398 21.1575 12.2933 21.2023 12.1688C21.2415 12.0596 21.2415 11.94 21.2023 11.8308C21.1575 11.7063 21.0355 11.6016 20.7914 11.3924L12.3206 4.13178C11.9004 3.77158 11.6903 3.59148 11.5124 3.58707C11.3578 3.58323 11.2101 3.65115 11.1124 3.77103C11 3.90897 11 4.18571 11 4.73918V9.03444C8.86532 9.40789 6.91159 10.4896 5.45971 12.1137C3.87682 13.8843 3.00123 16.1757 3 18.5508V19.1628C4.04934 17.8987 5.35951 16.8763 6.84076 16.1657C8.1467 15.5392 9.55842 15.1681 11 15.0703V19.2604C11 19.8139 11 20.0906 11.1124 20.2286C11.2101 20.3485 11.3578 20.4164 11.5124 20.4125C11.6903 20.4081 11.9004 20.228 12.3206 19.8678L20.7914 12.6072Z"
                      fill="#A2A9B5"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  className={clsx("rounded-full", isLike ? "bg-white" : "bg-[#F0F1F2]")}
                  onClick={() => setIsLike(prev => !prev)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <path
                      d="M21.7 10C24.87 10 27 12.98 27 15.76C27 21.39 18.16 26 18 26C17.84 26 9 21.39 9 15.76C9 12.98 11.13 10 14.3 10C16.12 10 17.31 10.91 18 11.71C18.69 10.91 19.88 10 21.7 10Z"
                      fill={clsx(isLike ? "#FF7314" : "#A2A9B5")}
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="px-5 pb-14 pt-10" dangerouslySetInnerHTML={{ __html: INNER_HTML }}></div>
        <div className="border-t-[0.75rem] border-t-[#F4F4F5] bg-white py-7">
          <div className="mb-[0.62rem] px-5 text-base font-semibold text-[#111111]">추천 아티클</div>
          <ul>
            {Array.from({ length: 10 }).map((_, idx) => (
              <ArticleCard key={idx} />
            ))}
          </ul>
        </div>
      </main>
    </>
  );
};
export default ArticleDetailPage;
ArticleDetailPage.getLayout = page => {
  return page;
};

const INNER_HTML = `
    <h1 style="font-family: Pretendard; font-size: 20px; font-weight: 700; line-height: 28px; letter-spacing: 0em; text-align: left; margin-bottom: 4px;">타이틀</h1>
    <p style="font-family: Pretendard; font-size: 16px; font-weight: 500; line-height: 24px; letter-spacing: 0em; text-align: left; margin-bottom: 40px;">내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용</p>
    <image src="https://via.placeholder.com/335x335/458278/ffffff?text=1dfasf" alt=""/>
    <h1 style="font-family: Pretendard; font-size: 20px; font-weight: 700; line-height: 28px; letter-spacing: 0em; text-align: left; margin-top: 28px; margin-bottom: 4px;">타이틀</h1>
    <p style="font-family: Pretendard; font-size: 16px; font-weight: 500; line-height: 24px; letter-spacing: 0em; text-align: left; margin-bottom: 40px;">내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용</p>
    <image src="https://via.placeholder.com/335x335/458278/ffffff?text=1dfasf" alt=""/>
    <p style="font-family: Pretendard; font-size: 16px; font-weight: 500; line-height: 24px; letter-spacing: 0em; text-align: left; margin-top: 28px; margin-bottom: 28px;">내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용</p>
    <p style="font-family: Pretendard; font-size: 16px; font-weight: 500; line-height: 24px; letter-spacing: 0em; text-align: left;">내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용</p>
`;
