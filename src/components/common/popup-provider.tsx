import { useRouter } from "next/router";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import useOutsideClick from "src/core/hooks/use-outside-click";

interface PopupOptions {
  title?: string;
  onClose?: (result?: boolean) => void;
}

interface PopupContextFunctions {
  open: (options?: PopupOptions) => void;
  close: () => void;
}

export const PopupContext = React.createContext<PopupContextFunctions>({
  open: () => {},
  close: () => {},
});

export const PopupRenderContext = React.createContext<(value: React.ReactNode | null) => void>(() => {});

interface PopupProviderProps {
  children?: React.ReactNode;
}

export const PopupProvider = ({ children }: PopupProviderProps) => {
  const popupRef = useRef<HTMLDivElement>(null);
  const popupAreaRef = useRef<HTMLDivElement>(null);
  const [container, setContainer] = useState<HTMLElement | null>(null);
  const [options, setOptions] = useState<PopupOptions | null>(null);
  const [rendered, setRendered] = useState<React.ReactNode | null>(null);
  const [visible, setVisible] = useState(false);
  const router = useRouter();

  const handleClose = useCallback(() => {
    options?.onClose?.(false);
    setVisible(false);
  }, [options]);

  const handleOpen = useCallback(
    (newOptions?: PopupOptions) => {
      if (visible === true) {
        options?.onClose?.(false);
      }
      setVisible(true);
      setOptions(newOptions ?? null);
    },
    [visible, options],
  );
  // 외부영역 선택 시 종료
  useOutsideClick(popupAreaRef, () => {
    handleClose();
  });
  // 컨테이너 설정
  useEffect(() => {
    setContainer(document.body);
  }, []);
  useEffect(() => {
    if (visible === true) {
      (document.activeElement as HTMLElement)?.blur();
    }
  }, [visible]);
  // 스크롤 막기
  useEffect(() => {
    if (container == null) return;
    if (visible === false) return;
    if (options === null) return;
    container.style.cssText = `
    position: fixed;
    top: -${window.scrollY}px;
    overflow-y: scroll;
    width: 100%;`;
    return () => {
      const scrollY = container.style.top;
      container.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, [container, visible, options]);
  useEffect(() => {
    const handleRouteChange = () => {
      handleClose();
    };
    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [handleClose, router.events]);

  return (
    <>
      <PopupContext.Provider
        value={useMemo(
          () => ({
            open: handleOpen,
            close: handleClose,
          }),
          [handleClose, handleOpen],
        )}
      >
        <PopupRenderContext.Provider value={setRendered}>{children}</PopupRenderContext.Provider>
      </PopupContext.Provider>
      {container != null &&
        visible !== false &&
        createPortal(
          <>
            <div className="pointer-events-none fixed inset-0 z-9 touch-none bg-[#1e1e1e99]">
              <div
                className="pointer-events-auto flex h-full w-full touch-auto flex-col overflow-auto overscroll-none"
                ref={popupRef}
              >
                <div className="container mx-auto mt-auto rounded-t-2xl bg-white" ref={popupAreaRef}>
                  {options?.title && (
                    <h3 className="relative flex h-16 items-center justify-center p-2 text-lg font-semibold text-[#111111]">
                      {options.title}
                      <button type="button" className="absolute right-2" onClick={handleClose}>
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M16.2219 31.7803C15.929 31.4875 15.929 31.0126 16.2219 30.7197L22.9394 24.0021L16.2219 17.2845C15.929 16.9916 15.929 16.5168 16.2219 16.2239C16.5148 15.931 16.9897 15.931 17.2826 16.2239L24.0001 22.9415L30.7176 16.224C31.0105 15.9311 31.4853 15.9311 31.7782 16.224C32.0711 16.5168 32.0711 16.9917 31.7782 17.2846L25.0607 24.0021L31.7783 30.7196C32.0712 31.0125 32.0712 31.4874 31.7783 31.7802C31.4854 32.0731 31.0105 32.0731 30.7176 31.7802L24.0001 25.0628L17.2826 31.7803C16.9897 32.0732 16.5148 32.0732 16.2219 31.7803Z"
                            fill="#111111"
                          />
                        </svg>
                      </button>
                    </h3>
                  )}
                  <div>{rendered}</div>
                </div>
              </div>
            </div>
          </>,
          container,
        )}
    </>
  );
};
