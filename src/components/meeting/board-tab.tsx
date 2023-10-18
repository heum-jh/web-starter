import { cn } from "src/core/function/cn";
import MeetingBoardCard from "./board-card";
import { useRouter } from "next/router";
type MeetingBoardTabProps = {
  className?: string;
};
const MeetingBoardTab = ({ className }: MeetingBoardTabProps) => {
  const router = useRouter();
  return (
    <>
      {true ? (
        <div className="divide-y divide-[#F0F1F2]">
          {Array.from({ length: 5 }).map((_, index) => (
            <MeetingBoardCard isMine={true} key={index} onClick={() => router.push("/meeting/board/123")} />
          ))}
        </div>
      ) : (
        <div
          className={cn(
            "flex h-[calc(100%-9.25rem)] flex-col items-center justify-center space-y-4 bg-white text-center",
            className,
          )}
        >
          <div className="flex justify-center">
            <svg width="73" height="72" viewBox="0 0 73 72" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M63.5 36C63.5 50.9117 51.4117 63 36.5 63C32.9086 63 29.4809 62.2988 26.3465 61.0258C25.7466 60.7822 25.4466 60.6604 25.2042 60.606C24.967 60.5529 24.7915 60.5334 24.5484 60.5334C24.2999 60.5333 24.0293 60.5785 23.488 60.6687L12.8143 62.4476C11.6965 62.6339 11.1377 62.7271 10.7336 62.5537C10.3798 62.402 10.098 62.1202 9.94628 61.7664C9.77295 61.3623 9.86609 60.8035 10.0524 59.6857L11.8313 49.0121C11.9215 48.4707 11.9667 48.2001 11.9666 47.9516C11.9666 47.7085 11.9471 47.533 11.894 47.2958C11.8396 47.0534 11.7178 46.7534 11.4742 46.1535C10.2012 43.0191 9.5 39.5914 9.5 36C9.5 21.0883 21.5883 9 36.5 9C51.4117 9 63.5 21.0883 63.5 36Z"
                stroke="#DBDEE4"
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M24.5 30H36.5M24.5 40.5H45.5"
                stroke="#DBDEE4"
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="text-xl font-normal text-[#C3C7D0]">
            참여 친구들만
            <br />
            게시물을 볼 수 있어요!
          </p>
        </div>
      )}
    </>
  );
};
export default MeetingBoardTab;
