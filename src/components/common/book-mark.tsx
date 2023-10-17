import clsx from "clsx";
import { useRef, useState } from "react";
import { usePopup } from "src/core/hooks/use-popup";
import AddNewFolder from "./add-new-folder";
import Popup from "./popup";
const BookMark = () => {
  const bookMarkRef = useRef<HTMLDivElement>(null);
  const [isOpenAddFolderPopup, setIsOpenAddFolderPopup] = useState(false);
  return (
    <>
      <div
        ref={bookMarkRef}
        className={clsx("divide-y divide-[#F0F1F2] px-5", true && "pb-32", "h-full overflow-auto")}
      >
        <div className="py-4">
          <button
            type="button"
            className="flex select-none items-center gap-x-2 text-base font-medium text-[#707888]"
            onClick={async () => {
              // onClose?.();
              setIsOpenAddFolderPopup(true);
            }}
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
            새 폴더 만들기
          </button>
        </div>
        {Array.from({ length: 10 }).map((_, idx) => {
          return (
            <div key={idx} className="py-4">
              <div className="flex items-center gap-x-2">
                <div className="m-1 h-[21.5px] w-[21.5px] rounded-[3.5px] border border-[#F0F1F2] bg-[#FF7A7A]"></div>
                <div>
                  <div className="text-lg font-medium text-[#1E1E1E]">타이틀</div>
                  <div className="flex items-center gap-x-1 text-sm font-normal text-[#707888]">
                    <span>카페</span>
                    <span className="h-[2px] w-[2px] rounded-full bg-[#DBDEE4]" />
                    <span>1개</span>
                  </div>
                </div>
                <div className="ml-auto inline-flex items-center justify-end">
                  <button type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 22C17.5229 22 22 17.5229 22 12C22 6.47715 17.5229 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5229 6.47715 22 12 22Z"
                        fill={true ? "#FF7314" : "transparent"}
                        stroke={true ? "transparent" : "#DBDEE4"}
                        strokeWidth={true ? "0" : "1.5"}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.50049 12L10.5005 15L16.5005 9"
                        stroke={true ? "white" : "#DBDEE4"}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {true && (
        <div className="fixed inset-x-0 bottom-0 bg-white px-5 py-3">
          <button
            type="button"
            className={clsx(
              "w-full rounded py-4 text-center text-lg font-semibold text-white",
              true ? "bg-[#FF7314]" : "bg-[#FDDCB0]",
            )}
          >
            저장하기
          </button>
        </div>
      )}
      <Popup isOpen={isOpenAddFolderPopup} title="폴더 추가" onClose={() => setIsOpenAddFolderPopup(false)}>
        <AddNewFolder />
      </Popup>
    </>
  );
};
export default BookMark;
