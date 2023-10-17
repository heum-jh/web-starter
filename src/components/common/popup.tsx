import { useRef } from "react";
import useOutsideClick from "src/core/hooks/use-outside-click";

interface PopupProps {
  isOpen: boolean;
  title?: string;
  onClose: () => void;
  children: React.ReactNode;
}
const Popup = ({ isOpen, onClose, children, title }: PopupProps) => {
  const popupAreaRef = useRef<HTMLDivElement>(null);
  const handleClickInnerModal = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };
  // 외부영역 선택 시 종료
  useOutsideClick(popupAreaRef, () => {
    onClose();
  });
  if (isOpen === false) return <></>;
  return (
    <div className="pointer-events-none fixed inset-0 z-9 touch-none bg-[#1e1e1e99]">
      <div
        className={
          "pointer-events-auto absolute bottom-0 flex h-full w-full touch-auto flex-col overflow-hidden overscroll-none"
        }
      >
        <div
          className="container relative mx-auto mt-auto max-h-[80vh] animate-popup rounded-t-2xl bg-white"
          ref={popupAreaRef}
        >
          {title && (
            <h3 className="relative flex h-16 items-center justify-center p-2 text-lg font-semibold text-[#111111]">
              {title}
              <button type="button" className="absolute right-2" onClick={onClose}>
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
          <div className="h-full" onClick={handleClickInnerModal}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Popup;
