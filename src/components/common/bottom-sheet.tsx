import clsx from "clsx";
import { PropsWithChildren } from "react";
import { useBottomSheetBehavior } from "src/core/hooks/use-bottom-sheet-behavior";

const BottomSheet = ({ children }: PropsWithChildren) => {
  const { sheetRef, contentRef, position } = useBottomSheetBehavior({
    addAreaHeight: 100,
    headerHeight: 75,
    footerHeight: 64,
  });
  return (
    <div ref={sheetRef} className={clsx("fixed inset-x-0 z-0 flex flex-col rounded-t-2xl bg-white", "bottom-0 h-0")}>
      <div className="cursor-grab rounded-t-2xl bg-white pb-[0.13rem] pt-[0.62rem]">
        <div className="mx-auto h-1 w-8 rounded-full bg-[#C3C7D0]"></div>
      </div>
      <div ref={contentRef} className={clsx(position === "max" ? "overflow-auto" : "overflow-hidden")}>
        {children}
      </div>
    </div>
  );
};
export default BottomSheet;
