import Image from "next/image";
import { cn } from "src/core/function/cn";

const NotificationCard = () => {
  return (
    <li
      className={cn(
        "flex cursor-pointer gap-3 px-5 py-4",
        Math.round(Math.random() * 10) % 2 === 0 ? "bg-[#FFF3E1]" : "bg-white",
      )}
    >
      <div className="shrink-0 basis-[24px]">
        <Image src="/images/notification.svg" alt="" width="24" height="24" />
      </div>
      <div className="min-w-0 flex-auto">
        <div className="mb-[0.62rem] flex h-6 items-center justify-between gap-2">
          <span className="truncate text-sm font-semibold text-[#111111]">
            이용약관이 변경되어 알려드려요 지내용공지내용공지내용
          </span>
          <span className="shrink-0 text-xs font-medium text-[#9CA2AF]">한시간전</span>
        </div>
        <div className="line-clamp-2 text-xs font-medium text-[#111111]">
          공지내용공지내용공지내용공지내용공지내용공지내용공지내용공지내용공지내용공지내용공지내용공지내용공지내용공지내용공지내용공지내용공지내용공지내용공지내용공지내용공지내용공지내용공지내용공지내용공지내용공지내용공지내용공지내용공지내용공지내용공지내용공지내용공지내용공지내용공지내용공지내용공지내용공지내용공지내용공지내용공지내용공지내용공지내용공지내용공지내용공지내용공지내용공지내용공지내용공지내용공지내용공지내용공지내용공지내용공지내용공지내용공지내용공지내용공지내용공지내용
        </div>
      </div>
    </li>
  );
};
export default NotificationCard;
