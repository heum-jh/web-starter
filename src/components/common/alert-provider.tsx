import clsx from "clsx";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export interface AlertButtonOptions {
  text: string;
  type: "confirm" | "cancel";
  onClick?: () => void;
}

export interface AlertOptions {
  title?: string;
  message: string;
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
      <div>
        <div>
          <div>
            <h3>{options.title ?? "알림"}</h3>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mobile:h-24 mobile:w-24 mobile:basis-24 shrink-0 grow-0 basis-40 cursor-pointer"
              onClick={handleClose}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M30.7071 10.7071C31.0976 10.3166 31.0976 9.68342 30.7071 9.29289C30.3166 8.90237 29.6834 8.90237 29.2929 9.29289L20 18.5858L10.7071 9.29289C10.3166 8.90237 9.68342 8.90237 9.29289 9.29289C8.90237 9.68342 8.90237 10.3166 9.29289 10.7071L18.5858 20L9.29289 29.2929C8.90237 29.6834 8.90237 30.3166 9.29289 30.7071C9.68342 31.0976 10.3166 31.0976 10.7071 30.7071L20 21.4142L29.2929 30.7071C29.6834 31.0976 30.3166 31.0976 30.7071 30.7071C31.0976 30.3166 31.0976 29.6834 30.7071 29.2929L21.4142 20L30.7071 10.7071Z"
                fill="#333333"
              />
            </svg>
          </div>
          <div>
            <p className="break-words" dangerouslySetInnerHTML={{ __html: options.message }} />
          </div>
          <div>
            {options?.buttons?.map((button, idx) => (
              <button
                key={idx}
                type="button"
                className={clsx(button.type === "confirm" && "", button.type === "cancel" && "")}
                onClick={() => {
                  button.onClick?.();
                  handleClose();
                }}
              >
                {button.text}
              </button>
            )) ?? (
              <button type="button" onClick={handleClose}>
                확인
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-10 overflow-y-auto bg-[#22222266]" />
    </div>,
    container,
  );
};

export default AlertProvider;
