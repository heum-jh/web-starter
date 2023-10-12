import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

type FAQListCardProps = {
  title: string;
  content: string;
};

const FAQListCard = ({ title, content }: FAQListCardProps) => {
  const [isOpen, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const handleToggle = (e: React.MouseEvent<HTMLDetailsElement>) => {
    e.preventDefault();
    setOpen(!isOpen);
  };
  useEffect(() => {
    if (contentRef.current) {
      const contentHeight = contentRef.current.clientHeight;
      contentRef.current.style.marginTop = isOpen ? "0px" : `-${contentHeight}px`;
      contentRef.current.style.opacity = isOpen ? "1" : "0";
    }
  }, [isOpen]);
  return (
    <>
      <li>
        <details className="peer cursor-pointer" open={isOpen}>
          <summary
            className="flex h-[4rem] items-center justify-between border-b border-[#F0F1F2] bg-[#ffffff] pl-[1.25rem] pr-[1.25rem]"
            onClick={handleToggle}
            aria-expanded={isOpen}
          >
            <div className="text-lg/[1.5rem] font-medium">{title}</div>
            <div className={clsx("transform transition-transform", isOpen && "rotate-180")}>
              <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 1L4 4L7 1"
                  stroke="#707888"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </summary>
        </details>
        <div className="h-0 overflow-hidden peer-open:h-auto">
          <div ref={contentRef} className="no-scrollbar duration-300 ease-in-out">
            <p className="p-5 text-base font-normal">{content}</p>
          </div>
        </div>
      </li>
    </>
  );
};
export default FAQListCard;
