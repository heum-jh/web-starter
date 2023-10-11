import { useState } from "react";

type FAQListCardProps = {
  title: string;
  content: string;
};

const FAQListCard = ({ title, content }: FAQListCardProps) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <li>
        <details open={isOpen} onToggle={event => setOpen(event.currentTarget.open)}>
          <summary className="flex h-[4rem] items-center justify-between border-b border-[#F0F1F2] bg-[#ffffff] pl-[1.25rem] pr-[1.25rem]">
            <div className=" text-lg/[1.5rem] font-medium">{title}</div>
            {isOpen === true ? (
              <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 4L4 1L1 4"
                  stroke="#707888"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 1L4 4L7 1"
                  stroke="#707888"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </summary>
        </details>
        {isOpen === true && (
          <div className="   p-5">
            <div className="text-base font-normal">{content}</div>
          </div>
        )}
      </li>
    </>
  );
};
export default FAQListCard;
