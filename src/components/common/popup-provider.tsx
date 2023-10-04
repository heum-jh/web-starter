import { useRouter } from "next/router";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface PopupOptions {
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
            <div className="pointer-events-none fixed inset-0 z-9 touch-none bg-[#00000020]">
              <div
                className="pointer-events-auto flex h-full w-full touch-auto flex-col overflow-auto overscroll-none p-16"
                ref={popupRef}
              >
                <div className="m-auto max-w-full rounded-8 bg-white shadow-[0_0_32px_#63636340]">{rendered}</div>
              </div>
            </div>
          </>,
          container,
        )}
    </>
  );
};
