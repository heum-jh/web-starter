import { useRouter } from "next/router";
import { NextPageWithLayout } from "src/pages/_app";

const PolicyPage: NextPageWithLayout = () => {
  const router = useRouter();
  const data = Array.from({ length: 3 });
  return (
    <div className="bg-[#F6F6F6]">
      <ul className="flex  flex-col ">
        {data.map((_, i) => {
          return (
            <li
              key={i}
              className="flex h-[4rem] items-center justify-between border-b border-[#F0F1F2] bg-[#ffffff] pl-[1.25rem] pr-[1.25rem]"
              onClick={() => router.push(`/policy/${i}`)}
            >
              <div className=" text-lg/[1.5rem] font-medium">이용약관</div>
              <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 7L4 4L1 1"
                  stroke="#707888"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PolicyPage;
PolicyPage.type = "detail";
PolicyPage.title = "이용 약관";
