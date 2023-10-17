import clsx from "clsx";
import { useRef, useState } from "react";
import BottomSheet from "src/components/common/bottom-sheet";
import Footer from "src/components/common/footer";
import ShopCard from "src/components/location/shop-card";
import { NextPageWithLayout } from "../_app";
import BookMark from "src/components/common/book-mark";
import { usePopup } from "src/core/hooks/use-popup";
import AddNewFolder from "src/components/common/add-new-folder";

const LocationPage: NextPageWithLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  const bookMarkPopup = usePopup({
    title: "북마크",
    render: () => {
      return <BookMark />;
    },
  });
  const addFolderPopup = usePopup({
    title: "폴더 추가",
    render: () => {
      return <AddNewFolder />;
    },
  });
  const handleBookMark = () => {
    bookMarkPopup.open();
  };
  const handleSearchFocus = () => {
    setIsOpen(true);
  };
  const handleSearchBlur = () => {
    setIsOpen(false);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <>
      <section className="z-0">
        <div className="flex gap-1 py-[0.88rem] pl-2 pr-5">
          <button type="button" className={clsx("p-3", isOpen === false && "hidden")} onClick={handleSearchBlur}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M11 20L3 12L11 4"
                stroke="#111111"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <line x1="4.75" y1="12" x2="21.25" y2="12" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
          <form className="relative w-full" onSubmit={handleSubmit}>
            <span className="sr-only">Search</span>
            <input
              ref={searchRef}
              type="text"
              name="search"
              placeholder="검색어를 입력하세요"
              className="peer/search h-full w-full rounded bg-[#F4F4F5] py-[0.88rem] pl-4 pr-14 text-[1.125rem]/[1.5rem] placeholder:text-[#A2A9B5] placeholder-shown:pl-12 focus:bg-white focus:pl-4 focus:caret-[#FF7314] focus:outline-1 focus:outline-[#FF7314] focus:placeholder:text-transparent"
              onFocus={handleSearchFocus}
            />
            <span className="invisible absolute inset-y-0 left-0 flex items-center pl-4 peer-placeholder-shown/search:visible peer-focus/search:invisible">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.4697 16.4697C16.7626 16.1768 17.2374 16.1768 17.5303 16.4697L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L16.4697 17.5303C16.1768 17.2374 16.1768 16.7626 16.4697 16.4697Z"
                  fill="#A2A9B5"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11 3.75C6.99594 3.75 3.75 6.99594 3.75 11C3.75 15.0041 6.99594 18.25 11 18.25C15.0041 18.25 18.25 15.0041 18.25 11C18.25 6.99594 15.0041 3.75 11 3.75ZM2.25 11C2.25 6.16751 6.16751 2.25 11 2.25C15.8325 2.25 19.75 6.16751 19.75 11C19.75 15.8325 15.8325 19.75 11 19.75C6.16751 19.75 2.25 15.8325 2.25 11Z"
                  fill="#A2A9B5"
                />
              </svg>
            </span>
            <button
              type="button"
              className="visible absolute right-0 h-full pl-2 pr-4 focus-visible/search:outline-none peer-placeholder-shown/search:invisible"
              onClick={() => {
                if (searchRef.current) {
                  searchRef.current.value = "";
                }
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
                  fill="#C3C7D0"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.46967 8.46967C8.76256 8.17678 9.23744 8.17678 9.53033 8.46967L12 10.9393L14.4695 8.46979C14.7624 8.1769 15.2373 8.1769 15.5302 8.46979C15.8231 8.76269 15.8231 9.23756 15.5302 9.53045L13.0607 12L15.5302 14.4695C15.8231 14.7624 15.8231 15.2373 15.5302 15.5302C15.2373 15.8231 14.7624 15.8231 14.4695 15.5302L12 13.0607L9.53033 15.5303C9.23744 15.8232 8.76256 15.8232 8.46967 15.5303C8.17678 15.2374 8.17678 14.7626 8.46967 14.4697L10.9393 12L8.46967 9.53033C8.17678 9.23744 8.17678 8.76256 8.46967 8.46967Z"
                  fill="white"
                />
              </svg>
            </button>
          </form>
        </div>
        <div
          className={clsx(
            "static top-0 border-t-[0.75rem] border-t-[#F6F6F6] px-5 before:absolute before:inset-0 before:z-[-1] before:h-full before:w-full before:bg-white",
            isOpen !== true && "hidden",
          )}
        >
          <div className="py-5">
            <div className="mb-4 flex h-auto items-center justify-between text-base font-semibold text-[#111111]">
              <span>최근 검색</span>
            </div>
            <ul>
              {Array.from({ length: 20 }).map((_, index) => {
                return (
                  <div key={index} className="flex items-center gap-x-3 py-[0.88rem]">
                    <div className="flex-auto truncate text-base font-normal text-[#363E48]">경기도 수원시 영통구</div>
                    <button type="button">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.51824 16.483C3.27416 16.2389 3.27416 15.8432 3.51824 15.5991L9.11617 10.0011L3.51827 4.40313C3.27419 4.15905 3.27419 3.76332 3.51827 3.51924C3.76235 3.27517 4.15807 3.27517 4.40215 3.51924L10 9.11724L15.598 3.51931C15.842 3.27524 16.2378 3.27524 16.4818 3.51931C16.7259 3.76339 16.7259 4.15912 16.4818 4.4032L10.8839 10.0011L16.4819 15.599C16.726 15.8431 16.726 16.2388 16.4819 16.4829C16.2378 16.727 15.8421 16.727 15.598 16.4829L10 10.885L4.40213 16.483C4.15805 16.727 3.76232 16.727 3.51824 16.483Z"
                          fill="#A2A9B5"
                        />
                      </svg>
                    </button>
                  </div>
                );
              })}
              {/* TODO: 최근 검색 내역이 없을 때 */}
              {/* <div className="flex h-[100vw] w-full flex-col items-center justify-center gap-y-4 text-center text-xl font-semibold text-[#A2A9B5]">
                <svg xmlns="http://www.w3.org/2000/svg" width="73" height="72" viewBox="0 0 73 72" fill="none">
                  <path
                    d="M63.5 36C63.5 50.9117 51.4117 63 36.5 63C32.9086 63 29.4809 62.2988 26.3465 61.0258C25.7466 60.7822 25.4466 60.6604 25.2042 60.606C24.967 60.5529 24.7915 60.5334 24.5484 60.5334C24.2999 60.5333 24.0293 60.5785 23.488 60.6687L12.8143 62.4476C11.6965 62.6339 11.1377 62.7271 10.7336 62.5537C10.3798 62.402 10.098 62.1202 9.94628 61.7664C9.77295 61.3623 9.86609 60.8035 10.0524 59.6857L11.8313 49.0121C11.9215 48.4707 11.9667 48.2001 11.9666 47.9516C11.9666 47.7085 11.9471 47.533 11.894 47.2958C11.8396 47.0534 11.7178 46.7534 11.4742 46.1535C10.2012 43.0191 9.5 39.5914 9.5 36C9.5 21.0883 21.5883 9 36.5 9C51.4117 9 63.5 21.0883 63.5 36Z"
                    stroke="#DBDEE4"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M24.5 30H36.5M24.5 40.5H45.5"
                    stroke="#DBDEE4"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                최근 검색된 검색어가 없습니다.
              </div> */}
            </ul>
          </div>
        </div>
      </section>
      <div className="w-full flex-grow-[1] bg-red-500">
        {/* TODO: 지도 */}
        <div className="flex h-full w-full items-center justify-center text-8xl text-white">지도</div>
      </div>
      <BottomSheet
        render={position => (
          <div
            className={clsx(
              "absolute -top-[calc(112px+1.25rem)] right-5 flex flex-col gap-4",
              position === "max" ? "hidden" : "",
            )}
          >
            <button
              type="button"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#F0F1F2] bg-white drop-shadow-[0px_4px_10px_rgba(0,0,0,0.15)]"
              onClick={handleBookMark}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 7.8C5 6.11984 5 5.27976 5.32698 4.63803C5.6146 4.07354 6.07354 3.6146 6.63803 3.32698C7.27976 3 8.11984 3 9.8 3H14.2C15.8802 3 16.7202 3 17.362 3.32698C17.9265 3.6146 18.3854 4.07354 18.673 4.63803C19 5.27976 19 6.11984 19 7.8V21L12 17L5 21V7.8Z"
                  fill="#FF7314"
                />
              </svg>
            </button>
            <button
              type="button"
              className={clsx(
                "flex h-12 w-12 items-center justify-center rounded-full drop-shadow-[0px_4px_10px_rgba(0,0,0,0.15)]",
                true ? "bg-[#FF7314]" : "border border-[#F0F1F2] bg-white",
              )}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M20 12C20 16.4183 16.4183 20 12 20M20 12C20 7.58172 16.4183 4 12 4M20 12H22M12 20C7.58172 20 4 16.4183 4 12M12 20V22M4 12C4 7.58172 7.58172 4 12 4M4 12H2M12 4V2M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                  stroke={true ? "#ffffff" : "#1E1E1E"}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        )}
      >
        <div className="px-5 py-[0.62rem] text-2xl font-bold text-[#111111]">성동구 주변 정보</div>
        <ul>
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
        </ul>
      </BottomSheet>
      <Footer />
    </>
  );
};
export default LocationPage;
LocationPage.getLayout = page => {
  return page;
};

// 기본 60%
// 지도 볼 때 85%
// 영역 선택 시 25%
