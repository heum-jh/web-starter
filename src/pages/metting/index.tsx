import clsx from "clsx";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import Nav from "src/components/common/nav";
import TempImage from "src/components/common/temp-image";
import MettingMemberListCard from "src/components/metting/member-list-card";
import MettingScheduleCard from "src/components/metting/schedule-card";
import Alert from "src/core/function/alert";
import { NextPageWithLayout } from "../_app";
import DetailLayout from "src/components/common/detail-layout";
import { cn } from "src/core/function/cn";
import MettingBoardTab from "src/components/metting/board-tab";
import MettingChatTab from "src/components/metting/chat-tab";
import Option from "src/core/function/option";

const MettingDetailPage: NextPageWithLayout = () => {
  const router = useRouter();
  const [userType, setUserType] = useState<"user" | "member" | "writer">("member");
  const [nav, setNav] = useState("all");
  const [isLike, setIsLike] = useState(false);
  const [isJoin, setIsJoin] = useState(false);

  const lyaoutTitle = useMemo(() => {
    if (nav === "all") return "";
    // title
    return "같이 산책시켜요!";
  }, [nav]);

  const handleOptionsClick = async () => {
    await Option.lists([
      {
        label: "모임 탈퇴하기",
        onClick: () => {
          router.push("/metting/withdraw");
        },
      },
    ]);
  };

  const optionsRender = () => {
    return (
      <button type="button" className="ml-auto flex h-full items-center" onClick={handleOptionsClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    );
  };

  return (
    <DetailLayout title={lyaoutTitle} render={() => userType === "member" && optionsRender()}>
      <div className={clsx("border-b-[0.75rem] border-b-[#F6F6F6] bg-white", nav !== "all" && "hidden")}>
        <div className="relative h-60 w-full bg-gray-300">
          <TempImage width={500} height={300} />
          <div className="rignt-0 absolute bottom-5 flex w-full justify-end gap-[18px] px-[1.19rem]">
            <button
              type="button"
              className="inline-flex h-[36px] w-[36px] items-center justify-center rounded-full bg-[#F0F1F2]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M20.7914 12.6072C21.0355 12.398 21.1575 12.2933 21.2023 12.1688C21.2415 12.0596 21.2415 11.94 21.2023 11.8308C21.1575 11.7063 21.0355 11.6016 20.7914 11.3924L12.3206 4.13178C11.9004 3.77158 11.6903 3.59148 11.5124 3.58707C11.3578 3.58323 11.2101 3.65115 11.1124 3.77103C11 3.90897 11 4.18571 11 4.73918V9.03444C8.86532 9.40789 6.91159 10.4896 5.45971 12.1137C3.87682 13.8843 3.00123 16.1757 3 18.5508V19.1628C4.04934 17.8987 5.35951 16.8763 6.84076 16.1657C8.1467 15.5392 9.55842 15.1681 11 15.0703V19.2604C11 19.8139 11 20.0906 11.1124 20.2286C11.2101 20.3485 11.3578 20.4164 11.5124 20.4125C11.6903 20.4081 11.9004 20.228 12.3206 19.8678L20.7914 12.6072Z"
                  fill="#A2A9B5"
                />
              </svg>
            </button>
            <button
              type="button"
              className={clsx("rounded-full", isLike ? "bg-white" : "bg-[#F0F1F2]")}
              onClick={() => setIsLike(prev => !prev)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path
                  d="M21.7 10C24.87 10 27 12.98 27 15.76C27 21.39 18.16 26 18 26C17.84 26 9 21.39 9 15.76C9 12.98 11.13 10 14.3 10C16.12 10 17.31 10.91 18 11.71C18.69 10.91 19.88 10 21.7 10Z"
                  fill={clsx(isLike ? "#FF7314" : "#A2A9B5")}
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="mt-[1.56rem] text-center">
          <h2 className="font-SUITE text-[1.375rem]/[1.75rem] font-bold text-[#1E1E1E]">같이 산책시켜요!</h2>
          <p className="text-base font-medium text-[#707888]">서울숲으로 가실 분들 모집합니다~!!</p>
        </div>
        <div className="mb-2 flex flex-wrap justify-center gap-x-[0.62rem] gap-y-3 px-5 py-4">
          <span className="rounded-full border border-[#FF7314] bg-[#FEEFD7] px-3 py-[0.31rem] text-xs font-semibold text-[#FF7314]">
            일일모임
          </span>
          {Array.from({ length: 6 }).map((_, index) => (
            <span
              key={index}
              className="rounded-full bg-[#F0F1F2] px-3 py-[0.31rem] text-xs font-medium text-[#707888]"
            >
              중형견
            </span>
          ))}
        </div>
      </div>
      <Nav
        value={nav}
        list={[
          { label: "전체", value: "all" },
          { label: "게시글", value: "board" },
          { label: "채팅", value: "chat" },
        ]}
        onChange={setNav}
      />
      {/* 전체 */}
      <div className={cn(nav !== "all" && "hidden")}>
        <div className="border-b-[0.75rem] border-b-[#F6F6F6]">
          <div className="space-y-3 bg-white p-5 pb-5">
            <div className="rounded bg-[#F4F4F5] px-5 pb-2 pt-[1.12rem]">
              <div className="flex items-center justify-between text-lg font-semibold text-[#1E1E1E]">
                <span>공지</span>
                <button
                  type="button"
                  className="inline-flex items-center text-sm font-normal text-[#707888]"
                  onClick={() =>
                    router.push({
                      pathname: "/metting/notice",
                      query: {
                        id: router.query.id,
                      },
                    })
                  }
                >
                  더보기
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M11 15L14 12L11 9"
                      stroke="#A2A9B5"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="divide-y divide-[#DBDEE4]">
                {Array.from({ length: 2 }).map((_, idx) => (
                  <div key={idx} className="flex items-center gap-x-[0.38rem] py-3">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M4.58574 2.79583C4.38972 2.30577 4.2917 2.06074 4.33258 1.86404C4.36832 1.69203 4.47052 1.54108 4.61695 1.44401C4.7844 1.33301 5.0483 1.33301 5.57611 1.33301H10.4251C10.9529 1.33301 11.2168 1.33301 11.3843 1.44401C11.5307 1.54108 11.6329 1.69203 11.6686 1.86404C11.7095 2.06074 11.6115 2.30577 11.4155 2.79582L10.7436 4.47561C10.7151 4.54687 10.7008 4.5825 10.6908 4.61925C10.6819 4.6519 10.6755 4.68517 10.6716 4.71879C10.6673 4.75664 10.6673 4.79501 10.6673 4.87176V6.29217C10.6673 6.43085 10.6673 6.50019 10.6809 6.56652C10.693 6.62536 10.7129 6.6823 10.7403 6.73579C10.7711 6.79608 10.8144 6.85023 10.901 6.95852L11.9475 8.26667C12.3914 8.82145 12.6133 9.09884 12.6135 9.33229C12.6137 9.53532 12.5214 9.72738 12.3628 9.85404C12.1803 9.99967 11.8251 9.99967 11.1146 9.99967H4.88661C4.17615 9.99967 3.82091 9.99967 3.63846 9.85404C3.47979 9.72738 3.38748 9.53532 3.3877 9.33229C3.38795 9.09884 3.60986 8.82145 4.05369 8.26667L5.10021 6.95852C5.18684 6.85023 5.23015 6.79608 5.26096 6.73579C5.28828 6.6823 5.30826 6.62536 5.32033 6.56652C5.33395 6.50019 5.33395 6.43085 5.33395 6.29217V4.87176C5.33395 4.79501 5.33395 4.75664 5.32961 4.71879C5.32575 4.68517 5.31934 4.6519 5.31044 4.61925C5.30041 4.5825 5.28616 4.54687 5.25765 4.47561L4.58574 2.79583Z"
                          fill="#FF7314"
                        />
                        <path
                          d="M8.00061 9.99967L8.00061 14.6663M5.33395 4.87176V6.29217C5.33395 6.43085 5.33395 6.50019 5.32033 6.56652C5.30826 6.62536 5.28828 6.6823 5.26096 6.73579C5.23015 6.79608 5.18684 6.85023 5.10021 6.95852L4.05369 8.26667C3.60986 8.82145 3.38795 9.09884 3.3877 9.33229C3.38748 9.53532 3.47979 9.72738 3.63846 9.85404C3.82091 9.99967 4.17615 9.99967 4.88661 9.99967H11.1146C11.8251 9.99967 12.1803 9.99967 12.3628 9.85404C12.5214 9.72738 12.6137 9.53532 12.6135 9.33229C12.6133 9.09884 12.3914 8.82145 11.9475 8.26667L10.901 6.95852C10.8144 6.85023 10.7711 6.79608 10.7403 6.73579C10.7129 6.6823 10.693 6.62536 10.6809 6.56652C10.6673 6.50019 10.6673 6.43085 10.6673 6.29217V4.87176C10.6673 4.79501 10.6673 4.75664 10.6716 4.71879C10.6755 4.68517 10.6819 4.6519 10.6908 4.61925C10.7008 4.5825 10.7151 4.54687 10.7436 4.47561L11.4155 2.79582C11.6115 2.30577 11.7095 2.06074 11.6686 1.86404C11.6329 1.69203 11.5307 1.54108 11.3843 1.44401C11.2168 1.33301 10.9529 1.33301 10.4251 1.33301H5.57611C5.0483 1.33301 4.7844 1.33301 4.61695 1.44401C4.47052 1.54108 4.36832 1.69203 4.33258 1.86404C4.2917 2.06074 4.38972 2.30577 4.58574 2.79583L5.25765 4.47561C5.28616 4.54687 5.30041 4.5825 5.31044 4.61925C5.31934 4.6519 5.32575 4.68517 5.32961 4.71879C5.33395 4.75664 5.33395 4.79501 5.33395 4.87176Z"
                          stroke="#FF7314"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-base font-normal text-[#707888]">서울숲으로 가실 분들 모집합니다~!!</span>
                  </div>
                ))}
              </div>
              {/* Empty */}
              {/* <div className="py-3 text-base font-normal text-[#A2A9B5]">등록된 공지가 없습니다.</div> */}
            </div>
          </div>
        </div>
        {/* 일정 */}
        <div className="border-b-[0.75rem] border-b-[#F6F6F6] bg-white p-5 pb-10">
          <div className="text-lg font-semibold text-[#1E1E1E]">일정</div>
          <ul>
            {Array.from({ length: 2 }).map((_, idx) => (
              <MettingScheduleCard key={idx} />
            ))}
          </ul>
          <button
            type="button"
            className="mt-6 w-full rounded bg-[#F0F1F2] py-4 text-center text-lg font-semibold text-[#707888]"
            onClick={() =>
              router.push({
                pathname: "/metting/schedule",
                query: router.query,
              })
            }
          >
            일정 더보기
          </button>
        </div>
        {/* 모임원 */}
        <div className="bg-white p-5 ">
          <div className="mb-5 text-lg font-semibold text-[#1E1E1E]">모임원</div>
          <ul className="space-y-6">
            {Array.from({ length: 5 }).map((_, idx) => (
              <MettingMemberListCard key={idx}></MettingMemberListCard>
            ))}
          </ul>
          <button
            type="button"
            className="mt-6 w-full rounded bg-[#F0F1F2] py-4 text-center text-lg font-semibold text-[#707888]"
            onClick={() =>
              router.push({
                pathname: "/metting/member",
                query: router.query,
              })
            }
          >
            모임원 더보기
          </button>
        </div>
      </div>
      {/* 게시글 */}
      <MettingBoardTab className={nav !== "board" ? "hidden" : ""} />
      {/* 채팅 */}
      <MettingChatTab className={nav !== "chat" ? "hidden" : ""}></MettingChatTab>
      {/* 참여하기 */}
      {userType === "user" && (
        <div className="sticky bottom-0 mt-3 w-full bg-white px-5 py-3">
          <button
            type="button"
            className={clsx(
              "w-full rounded py-4 text-center text-lg font-semibold text-white",
              isJoin ? "bg-[#1E1E1E]" : "bg-[#FF7314]",
            )}
            onClick={async () => {
              if (isJoin) {
                const confirm = await Alert.confirm("모임에 참여를 취소하시겠어요?", undefined, {
                  cancelText: "취소",
                  confirmText: "참여 취소하기",
                });
                if (confirm) {
                  await Alert.alert("참여 취소되었습니다!");
                  setIsJoin(false);
                }
              } else {
                const confirm = await Alert.confirm(
                  "모임에 참여하시겠어요?",
                  "모인에 참여해서<br/>모임원들과 같이 산책해보세요!",
                  { cancelText: "취소", confirmText: "참여하기" },
                );
                if (confirm) {
                  await Alert.alert("참여 신청이 완료되었습니다!", "모임장의 승인을 잠시 기다려주세요!");
                  setIsJoin(true);
                }
              }
            }}
          >
            {isJoin ? "승인 취소하기" : "참여하기"}
          </button>
        </div>
      )}
    </DetailLayout>
  );
};
export default MettingDetailPage;
MettingDetailPage.type = "detail";
MettingDetailPage.getLayout = (page: React.ReactElement) => {
  return page;
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = query;
  if (typeof id !== "string")
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  return {
    props: {},
  };
};
