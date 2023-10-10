import clsx from "clsx";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { OptionProps } from "src/core/function/option";

export interface IOptionButton {
  buttons: OptionProps[];
  onClose?: (result?: boolean) => void;
}

const OptionProvider = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [container, setContainer] = useState<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [options, setOptions] = useState<IOptionButton | null>(null);

  const handleClose = useCallback(() => {
    if (options == null) return;
    options.onClose?.(false);
    setVisible(false);
  }, [options]);

  const handleOpen = useCallback((options: IOptionButton) => {
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
      handleEvent: (event: CustomEvent<IOptionButton>) => {
        handleOpen(event.detail);
      },
    };
    window.addEventListener("option", handle);
    return () => {
      window.removeEventListener("option", handle);
    };
  }, [handleClose, handleOpen]);

  if (container == null) return <></>;
  if (visible === false) return <></>;
  if (options == null) return <></>;
  return createPortal(
    <div ref={ref} className="relative z-10" aria-labelledby="alert-title" role="alertdialog" aria-modal="true">
      <div className="fixed inset-0 z-10 overflow-y-auto bg-[#1e1e1e99]">
        <div className="mx-auto mt-auto flex min-h-full items-end justify-center px-5">
          <div className="container space-y-4 overflow-hidden pb-4 text-[1.125rem]/[1.5rem] font-medium text-[#1E1E1E]">
            <div className="divide-y-[1px] divide-[#A2A9B5] rounded-[0.25rem] bg-white">
              {options.buttons.map((button, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={clsx("w-full py-4 text-center")}
                  onClick={() => {
                    button.onClick();
                    handleClose();
                  }}
                >
                  {button.label}
                </button>
              ))}
            </div>
            <div>
              <button
                type="button"
                onClick={handleClose}
                className="w-full rounded-[0.25rem] bg-white py-4 text-center"
              >
                취소
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    container,
  );
};

export default OptionProvider;
