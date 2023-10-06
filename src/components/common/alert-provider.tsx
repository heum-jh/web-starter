import clsx from "clsx";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export interface AlertButtonOptions {
  text: string;
  type: "confirm" | "cancel";
  onClick?: () => void;
}

export interface AlertOptions {
  title: string;
  message?: string;
  buttons?: AlertButtonOptions[];
  onClose?: (result?: boolean) => void;
}

const AlertProvider = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [container, setContainer] = useState<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [options, setOptions] = useState<AlertOptions | null>(null);

  const handleClose = useCallback(() => {
    if (options == null) return;
    options.onClose?.(false);
    setVisible(false);
  }, [options]);

  const handleOpen = useCallback((options: AlertOptions) => {
    setOptions(options);
    setVisible(true);
    ref.current?.focus();
  }, []);

  // 컨테이너 설정
  useEffect(() => {
    setContainer(document.body);
  }, []);

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

  // 알림 이벤트 리스너
  useEffect(() => {
    const handle = {
      handleEvent: (event: CustomEvent<AlertOptions>) => {
        handleOpen(event.detail);
      },
    };
    const enterKeyEvent = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    window.addEventListener("alert", handle);
    window.addEventListener("keydown", enterKeyEvent);
    return () => {
      window.removeEventListener("alert", handle);
      window.addEventListener("keydown", enterKeyEvent);
    };
  }, [handleClose, handleOpen]);

  if (container == null) return <></>;
  if (visible === false) return <></>;
  if (options == null) return <></>;
  return createPortal(
    <div ref={ref} className="relative z-10" aria-labelledby="alert-title" role="alertdialog" aria-modal="true">
      <div className="fixed inset-0 z-10 overflow-y-auto bg-[#1e1e1e99]">
        <div className="flex min-h-full items-center justify-center px-5">
          <div className="w-full overflow-hidden rounded-xl bg-white">
            <div className="space-y-4 px-4 py-10 text-center text-[#111111]">
              {options.title && <h3 className="text-xl font-bold">{options.title}</h3>}
              {options.message && (
                <p
                  className="break-words text-base font-normal"
                  dangerouslySetInnerHTML={{ __html: options.message }}
                />
              )}
            </div>
            <div className="flex">
              {options.buttons?.map((button, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={clsx(
                    "w-full py-4 text-center text-[1.125rem]/[1.5rem] font-semibold ",
                    button.type === "confirm" && "bg-[#FF7314] text-white",
                    button.type === "cancel" && "bg-[#EBECF0] text-[#111111]",
                  )}
                  onClick={() => {
                    button.onClick?.();
                    handleClose();
                  }}
                >
                  {button.text}
                </button>
              )) ?? (
                <button
                  type="button"
                  onClick={handleClose}
                  className="w-full bg-[#FF7314] py-4 text-center text-[1.125rem]/[1.5rem] font-semibold text-white"
                >
                  확인
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>,
    container,
  );
};

export default AlertProvider;
