import clsx from "clsx";
import { useRouter } from "next/router";
import { FormEvent, useContext, useRef, useState } from "react";
import { cn } from "src/core/function/cn";
import MettingCard from "../index/metting-card";
import { SearchContext } from "./layout";
import { usePopup } from "src/core/hooks/use-popup";
import LocationSearch from "../index/location-search";

const Header = () => {
  const router = useRouter();
  const searchContext = useContext(SearchContext);
  const [search, setSearch] = useState(router.query.search ? router.query.search.toString() : "");
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [progressValue] = useState(0);
  const popup = usePopup({
    title: "동네 선택",
    render: () => {
      return (
        <>
          <div className="px-5 pb-10">
            <button
              type="button"
              className="flex w-full gap-x-2 py-4 text-base font-medium text-[#707888]"
              onClick={() => setIsLocationOpen(true)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 5V19M5 12H19"
                  stroke="#DBDEE4"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <rect x="0.75" y="0.75" width="22.5" height="22.5" rx="11.25" stroke="#DBDEE4" strokeWidth="1.5" />
              </svg>
              동네 추가하기
            </button>
            <ul className="space-y-3">
              <li className="flex w-full justify-between rounded bg-[#FF7314] px-5 py-4">
                <span className="rounded-[0.25rem] text-white">타이틀</span>
                <button type="button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.22165 19.7803C3.92876 19.4875 3.92876 19.0126 4.22165 18.7197L10.9392 12.0021L4.22168 5.28453C3.92879 4.99164 3.92879 4.51676 4.22168 4.22387C4.51458 3.93098 4.98945 3.93098 5.28234 4.22387L11.9998 10.9415L18.7173 4.22396C19.0102 3.93106 19.4851 3.93106 19.778 4.22396C20.0709 4.51685 20.0709 4.99172 19.778 5.28461L13.0605 12.0021L19.7781 18.7196C20.071 19.0125 20.071 19.4874 19.7781 19.7802C19.4852 20.0731 19.0103 20.0731 18.7174 19.7802L11.9998 13.0628L5.28231 19.7803C4.98942 20.0732 4.51455 20.0732 4.22165 19.7803Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </li>
              <li className="flex w-full justify-between rounded bg-[#F0F1F2] px-5 py-4">
                <span className="rounded-[0.25rem] text-[#A2A9B5]">타이틀</span>
                <button type="button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.22165 19.7803C3.92876 19.4875 3.92876 19.0126 4.22165 18.7197L10.9392 12.0021L4.22168 5.28453C3.92879 4.99164 3.92879 4.51676 4.22168 4.22387C4.51458 3.93098 4.98945 3.93098 5.28234 4.22387L11.9998 10.9415L18.7173 4.22396C19.0102 3.93106 19.4851 3.93106 19.778 4.22396C20.0709 4.51685 20.0709 4.99172 19.778 5.28461L13.0605 12.0021L19.7781 18.7196C20.071 19.0125 20.071 19.4874 19.7781 19.7802C19.4852 20.0731 19.0103 20.0731 18.7174 19.7802L11.9998 13.0628L5.28231 19.7803C4.98942 20.0732 4.51455 20.0732 4.22165 19.7803Z"
                      fill="#A2A9B5"
                    />
                  </svg>
                </button>
              </li>
            </ul>
          </div>
          <LocationSearch
            className={clsx(isLocationOpen ? "" : "hidden")}
            onClick={() => {
              setIsLocationOpen(false);
            }}
            onSubmit={() => {}}
            progressValue={0}
            search=""
          />
        </>
      );
    },
  });

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch(e.currentTarget.search.value);
  };

  return (
    <header>
      <div
        className={clsx(
          "container mx-auto flex h-16 items-center justify-between px-5",
          searchContext?.isOpen ? "hidden" : "",
          isLocationOpen ? "hidden" : "",
        )}
      >
        <button
          type="button"
          className="inline-flex items-center text-[1.5rem]/[2.125rem] font-extrabold"
          // onClick={() => searchContext?.handleChangeOpen("location")}
          onClick={() => popup.open()}
        >
          {"성동구"}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="ml-2"
          >
            <path d="M6 9L12 15L18 9" stroke="#1E1E1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <span className="inline-flex items-center gap-4">
          <button onClick={() => searchContext?.handleChangeOpen()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M19 19L14.65 14.65M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z"
                stroke="#1E1E1E"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button onClick={() => router.push("/notification")}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M9.35493 21C10.0601 21.6224 10.9863 22 12.0008 22C13.0152 22 13.9414 21.6224 14.6466 21M18.0008 8C18.0008 6.4087 17.3686 4.88258 16.2434 3.75736C15.1182 2.63214 13.5921 2 12.0008 2C10.4095 2 8.88333 2.63214 7.75811 3.75736C6.63289 4.88258 6.00075 6.4087 6.00075 8C6.00075 11.0902 5.22122 13.206 4.35042 14.6054C3.61588 15.7859 3.24861 16.3761 3.26208 16.5408C3.27699 16.7231 3.31561 16.7926 3.46253 16.9016C3.59521 17 4.19334 17 5.38961 17H18.6119C19.8082 17 20.4063 17 20.539 16.9016C20.6859 16.7926 20.7245 16.7231 20.7394 16.5408C20.7529 16.3761 20.3856 15.7859 19.6511 14.6054C18.7803 13.206 18.0008 11.0902 18.0008 8Z"
                stroke="#1E1E1E"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </span>
      </div>
      <div
        className={clsx(
          "relative z-10 m-[0_auto] h-full max-w-full overflow-auto bg-white p-0",
          searchContext?.isOpen ? "" : "hidden",
        )}
      >
        {/* {searchContext?.type === "location" && (
          <LocationSearch
            onClick={() => searchContext.handleChangeOpen()}
            onSubmit={handleSearch}
            progressValue={progressValue}
            search={search}
          />
        )} */}
        <Search
          onClick={() => searchContext?.handleChangeOpen()}
          onSubmit={handleSearch}
          progressValue={progressValue}
          search={search}
        />
      </div>
    </header>
  );
};
export default Header;
type SearchProps = {
  onClick: () => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  progressValue: number;
  search: string;
};

const Search = ({ onClick, onSubmit, progressValue, search }: SearchProps) => {
  const searchRef = useRef<HTMLInputElement>(null);
  return (
    <section>
      <div className="flex gap-1 py-[0.38rem] pl-2 pr-5">
        <button type="button" className="p-3" onClick={onClick}>
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
        <form className="relative w-full" onSubmit={onSubmit}>
          <span className="sr-only">Search</span>
          <input
            ref={searchRef}
            type="text"
            name="search"
            placeholder="검색"
            className="peer/search h-full w-full rounded-[0.25rem] bg-[#F4F4F5] pl-4 pr-14 text-[1.125rem]/[1.5rem] placeholder:text-[#A2A9B5] placeholder-shown:pl-9 focus:bg-white focus:pl-4 focus:caret-[#FF7314] focus:outline-1 focus:outline-[#FF7314] focus:placeholder:text-transparent"
          />
          <span className="invisible absolute inset-y-0 left-0 flex items-center pl-2 peer-placeholder-shown/search:visible peer-focus/search:invisible">
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
      <progress
        max="100"
        value={progressValue}
        className={cn(
          "h-0.5 w-full appearance-none bg-[#FF7314] transition-all [&::-webkit-progress-bar]:bg-white [&::-webkit-progress-value]:bg-[#ff7314]",
          progressValue === 0 ? "hidden" : "",
        )}
      />
      <div>
        {search && (
          <div className="bg-[#F4F4F5] px-5 py-5">
            <div className="mb-4 flex h-auto items-center justify-between text-base font-semibold text-[#111111]">
              <span>`{search}`</span>
              {/* TODO: 컴포넌트 적용 필요 */}
              <span className="rounded-[0.25rem] border border-[#DBDEE4] bg-white px-2 py-[0.38rem] text-sm font-medium text-[#707888]">
                최신순
              </span>
            </div>
            <ul className="space-y-3">
              {/* TODO: 컴포넌트 적용 필요 */}
              {Array.from({ length: 20 }).map((_, index) => {
                return <MettingCard key={index} />;
              })}
              {/* TODO: 해당 검색결과가 없을 떄 */}
              {/* <div className="flex h-[100vw] w-full items-center justify-center text-center text-[1.125rem]/[1.75rem] font-normal text-[#C3C7D0]">
                검색결과가 없습니다
              </div> */}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};
