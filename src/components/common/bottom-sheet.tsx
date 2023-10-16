import clsx from "clsx";
import { PropsWithChildren } from "react";
import { useBottomSheetBehavior } from "src/core/hooks/use-bottom-sheet-behavior";
import { usePopup } from "src/core/hooks/use-popup";
import BookMark from "./book-mark";

const BottomSheet = ({ children }: PropsWithChildren) => {
  const bookMarkPopup = usePopup({
    title: "북마크",
    render: () => {
      return <BookMark />;
    },
  });
  const { sheetRef, contentRef, position } = useBottomSheetBehavior({
    addAreaHeight: 100,
    headerHeight: 75,
    footerHeight: 64,
  });
  const handleBookMark = () => {
    bookMarkPopup.open();
  };
  return (
    <div ref={sheetRef} className={clsx("fixed inset-x-0 z-0 flex flex-col rounded-t-2xl bg-white", "bottom-0 h-0")}>
      <div className="cursor-grab rounded-t-2xl bg-white pb-[0.13rem] pt-[0.62rem]">
        <div className="mx-auto h-1 w-8 rounded-full bg-[#C3C7D0]"></div>
      </div>
      <div ref={contentRef} className={clsx(position === "max" ? "overflow-auto" : "overflow-hidden")}>
        {children}
      </div>
      {/* TODO: Buttons */}
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
    </div>
  );
};
export default BottomSheet;
