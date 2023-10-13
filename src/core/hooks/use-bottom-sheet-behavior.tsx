import { useEffect, useRef, useState } from "react";

interface CurrentOptions {
  min_y: number;
  max_y: number;
  bottom_sheet_height: number;
}
interface BottomSheetMetrics {
  touchStart: {
    sheetY: number; // touchstart에서 BottomSheet의 최상단 모서리의 Y값
    touchY: number; // touchstart에서 터치 포인트의 Y값
  };
  touchMove: {
    prevTouchY?: number; // 다음 touchmove 이벤트 핸들러에서 필요한 터치 포인트 Y값을 저장
    movingDirection: "none" | "down" | "up"; // 유저가 터치를 움직이고 있는 방향
  };
  isContentAreaTouched: boolean; // 컨텐츠 영역을 터치하고 있음을 기록
}
interface BottomSheetBehavior {
  footerHeight?: number;
  headerHeight?: number;
  addAreaHeight?: number;
}
export function useBottomSheetBehavior({ footerHeight = 0, headerHeight = 0, addAreaHeight = 0 }: BottomSheetBehavior) {
  const sheetRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<"default" | "max" | "min">("default");

  const currentOptions = useRef<CurrentOptions>();

  const metrics = useRef<BottomSheetMetrics>({
    touchStart: {
      sheetY: 0,
      touchY: 0,
    },
    touchMove: {
      prevTouchY: 0,
      movingDirection: "none",
    },
    isContentAreaTouched: false,
  });

  useEffect(() => {
    console.log("window.innerHeight", window.innerHeight);

    currentOptions.current = {
      min_y: headerHeight + addAreaHeight,
      max_y: window.innerHeight - footerHeight - 36,
      bottom_sheet_height: window.innerHeight - footerHeight - headerHeight - addAreaHeight,
    };
  }, [addAreaHeight, footerHeight, headerHeight]);

  useEffect(() => {
    if (sheetRef.current === null) return;
    document.body.style.overscrollBehaviorY = "none";
    document.documentElement.style.overflow = "hidden";
    document.documentElement.style.overscrollBehaviorY = "none";
    sheetRef.current.style.height = `${currentOptions.current?.bottom_sheet_height}px`;
    sheetRef.current.style.bottom = `${footerHeight}px`; // footer
    sheetRef.current.style.setProperty(
      "transform",
      `translateY(${(currentOptions.current?.min_y ?? 0) + footerHeight}px)`,
    );
  }, [footerHeight]);

  useEffect(() => {
    const canUserMoveBottomSheet = () => {
      const { touchMove, isContentAreaTouched } = metrics.current;
      if (!isContentAreaTouched) {
        return true;
      }
      if (sheetRef.current?.getBoundingClientRect().y !== currentOptions.current?.min_y) {
        return true;
      }

      if (touchMove.movingDirection === "down") {
        return (contentRef.current?.scrollTop ?? 0) <= 0;
      }
      return false;
    };
    const handleTouchStart = (e: TouchEvent) => {
      const { touchStart } = metrics.current;

      touchStart.sheetY = sheetRef.current?.getBoundingClientRect().y ?? 0;
      touchStart.touchY = e.touches[0].clientY;
    };
    const handleTouchMove = (e: TouchEvent) => {
      const { touchStart, touchMove } = metrics.current;
      const currentTouch = e.touches[0];

      if (touchMove.prevTouchY === undefined) {
        touchMove.prevTouchY = touchStart.touchY;
      }
      if (touchMove.prevTouchY === 0) {
        touchMove.prevTouchY = touchStart.touchY;
      }

      if (touchMove.prevTouchY < currentTouch.clientY) {
        touchMove.movingDirection = "down";
      }
      if (touchMove.prevTouchY > currentTouch.clientY) {
        touchMove.movingDirection = "up";
      }
      contentRef.current?.scrollTo({ top: 0 });
      if (canUserMoveBottomSheet()) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const touchOffset = currentTouch.clientY - touchStart.touchY;
        let nextSheetY = touchStart.sheetY + touchOffset;

        if (nextSheetY <= (currentOptions.current?.min_y ?? 0)) {
          nextSheetY = currentOptions.current?.min_y ?? 0;
        }
        if (nextSheetY >= (currentOptions.current?.max_y ?? 0)) {
          nextSheetY = currentOptions.current?.max_y ?? 0;
        }
        sheetRef.current?.style.setProperty(
          "transform",
          `translateY(${nextSheetY - (currentOptions.current?.min_y ?? 0)}px)`,
        );
      }
    };

    const handleTouchEnd = () => {
      const { touchMove } = metrics.current;

      const currentSheetY = sheetRef.current?.getBoundingClientRect().y ?? 0;

      switch (position) {
        case "max":
          if (touchMove.movingDirection === "down") {
            if (currentSheetY >= (currentOptions.current?.bottom_sheet_height ?? 0)) {
              sheetRef.current?.style.setProperty(
                "transform",
                `translateY(${(currentOptions.current?.max_y ?? 0) - (currentOptions.current?.min_y ?? 0)}px)`,
              );
              setPosition("min");
            } else {
              sheetRef.current?.style.setProperty(
                "transform",
                `translateY(${(currentOptions.current?.min_y ?? 0) + footerHeight}px)`,
              );
              setPosition("default");
            }
          }
          break;
        case "min":
          if (touchMove.movingDirection === "up") {
            if (
              currentSheetY <=
              (currentOptions.current?.max_y ?? 0) - (currentOptions.current?.min_y ?? 0) - footerHeight
            ) {
              sheetRef.current?.style.setProperty("transform", `translateY(0px)`);
              setPosition("max");
            } else {
              sheetRef.current?.style.setProperty(
                "transform",
                `translateY(${(currentOptions.current?.min_y ?? 0) + footerHeight}px)`,
              );
              setPosition("default");
            }
          }
          break;
        default:
          if (touchMove.movingDirection === "down") {
            sheetRef.current?.style.setProperty(
              "transform",
              `translateY(${(currentOptions.current?.max_y ?? 0) - (currentOptions.current?.min_y ?? 0)}px)`,
            );
            setPosition("min");
          }
          if (touchMove.movingDirection === "up") {
            sheetRef.current?.style.setProperty("transform", `translateY(0px)`);
            setPosition("max");
          }
          break;
      }
      // metrics 초기화.
      metrics.current = {
        touchStart: {
          sheetY: 0,
          touchY: 0,
        },
        touchMove: {
          prevTouchY: 0,
          movingDirection: "none",
        },
        isContentAreaTouched: false,
      };
    };
    const sheet = sheetRef.current;
    sheet?.addEventListener("touchstart", handleTouchStart);
    sheet?.addEventListener("touchmove", handleTouchMove);
    sheet?.addEventListener("touchend", handleTouchEnd);
    return () => {
      sheet?.removeEventListener("touchstart", handleTouchStart);
      sheet?.removeEventListener("touchmove", handleTouchMove);
      sheet?.removeEventListener("touchend", handleTouchEnd);
    };
  }, [footerHeight, position]);
  useEffect(() => {
    const handleTouchStart = () => {
      metrics.current.isContentAreaTouched = true;
    };
    const handleTouchMove = (e: TouchEvent) => {
      if ((contentRef.current?.scrollTop ?? 0) > 0) {
        e.stopPropagation();
      }
    };
    const content = contentRef.current;
    if (content === null) return;
    content.addEventListener("touchstart", handleTouchStart);
    content.addEventListener("touchmove", handleTouchMove);
    return () => {
      content.removeEventListener("touchstart", handleTouchStart);
      content.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return { sheetRef, contentRef, position };
}
