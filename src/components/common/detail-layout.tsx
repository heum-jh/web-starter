import { useRouter } from "next/router";
import { Suspense } from "react";
import { cn } from "src/core/function/cn";

type DetailLayoutProps = {
  children: React.ReactNode;
  title?: string;
  className?: string;
  handleBack?: () => void;
  render?: () => React.ReactNode;
};

const DetailLayout = ({ children, title, render, className, handleBack }: DetailLayoutProps) => {
  const router = useRouter();
  return (
    <>
      <header>
        <div className="container flex h-16 items-center gap-1 py-[0.38rem] pl-2 pr-5">
          <div className="flex-1">
            <button
              type="button"
              className="p-3"
              onClick={() => {
                handleBack ? handleBack() : router.back();
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M11 20L3 12L11 4"
                  stroke="#111111"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <line x1="4.75" y1="12" x2="21.25" y2="12" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <span className="flex-auto text-center text-[1.25rem]/[2.125rem] font-semibold text-[#111111]">{title}</span>
          <span className="flex-1 text-right">{render && render()}</span>
        </div>
      </header>
      <Suspense
        fallback={
          <div className="h-0.5 w-full overflow-hidden bg-white">
            <div className="h-full w-full animate-progress bg-[#FF7314]"></div>
          </div>
        }
      >
        <main className={cn("container flex-grow-[1]", className)}>{children}</main>
      </Suspense>
    </>
  );
};
export default DetailLayout;
