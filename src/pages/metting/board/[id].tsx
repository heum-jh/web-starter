import { useRef, useState } from "react";
import TempImage from "src/components/common/temp-image";
import Alert from "src/core/function/alert";
import Option from "src/core/function/option";
import { NextPageWithLayout } from "src/pages/_app";

const MettingBoardDetail: NextPageWithLayout = () => {
  const [isLike, setIsLike] = useState(false);
  const [isViewComment, setIsViewComment] = useState(false);
  const commentRef = useRef<HTMLTextAreaElement>(null);
  return (
    <>
      <div className="space-y-4 border-b-[0.75rem] border-b-[#F6F6F6] py-6">
        <div className="flex items-center gap-x-2 px-5">
          <div>
            <TempImage width={36} height={36} className="rounded-full" />
          </div>
          <div>
            <div className="text-base font-medium text-[#1E1E1E]">산책왕 홍길동</div>
            <div className="flex items-center gap-x-1">
              <span className="text-xs/[1.125rem] font-medium text-[#1E1E1E]">성동구</span>
              <span className="h-[2px] w-[2px] rounded-full bg-[#DBDEE4]"></span>
              <span className="text-xs/[1.125rem] font-medium text-[#A2A9B5]">23시간전</span>
            </div>
          </div>
        </div>
        <div className="h-[13.75rem] w-full rounded bg-green-300"></div>
        <div className="px-5 text-base/[1.75rem] font-normal text-[#707888]">
          서울숲으로 가실 분들 모집합니다~!!서울숲으로 가실 분들 모집합니다~!!서울숲으로 가실 분들 모집합니다~!!
        </div>
        <div className="space-x-[0.62rem] px-5">
          <button
            type="button"
            className="inline-flex cursor-pointer items-center gap-x-[0.37rem] text-base font-medium text-[#A2A9B5]"
            onClick={() => setIsLike(!isLike)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M16.1111 3C19.6333 3 22 6.3525 22 9.48C22 15.8138 12.1778 21 12 21C11.8222 21 2 15.8138 2 9.48C2 6.3525 4.36667 3 7.88889 3C9.91111 3 11.2333 4.02375 12 4.92375C12.7667 4.02375 14.0889 3 16.1111 3Z"
                fill={isLike ? "#FF7314" : "transparent"}
                stroke={isLike ? "transparent" : "#A2A9B5"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {true ? "좋아요" : "7"}
          </button>
          <button
            type="button"
            className="inline-flex cursor-pointer items-center gap-x-[0.37rem] text-base font-medium text-[#A2A9B5]"
            onClick={() => {
              Promise.resolve(setIsViewComment(true)).then(() => commentRef.current?.focus());
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M21 12C21 16.9706 16.9706 21 12 21C10.8029 21 9.6603 20.7663 8.61549 20.3419C8.41552 20.2607 8.31554 20.2201 8.23472 20.202C8.15566 20.1843 8.09715 20.1778 8.01613 20.1778C7.9333 20.1778 7.84309 20.1928 7.66265 20.2229L4.10476 20.8159C3.73218 20.878 3.54589 20.909 3.41118 20.8512C3.29328 20.8007 3.19933 20.7067 3.14876 20.5888C3.09098 20.4541 3.12203 20.2678 3.18413 19.8952L3.77711 16.3374C3.80718 16.1569 3.82222 16.0667 3.82221 15.9839C3.8222 15.9028 3.81572 15.8443 3.798 15.7653C3.77988 15.6845 3.73927 15.5845 3.65806 15.3845C3.23374 14.3397 3 13.1971 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                stroke="#A2A9B5"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {true ? "댓글" : "5"}
          </button>
        </div>
      </div>
      <div>
        <div className="px-5 pb-4 pt-5 text-lg font-semibold text-[#1E1E1E]">댓글</div>
        <ul>
          <li className="space-y-4 px-5 py-4">
            <div className="flex items-center gap-x-[0.38rem]">
              <div>
                <TempImage width={36} height={36} className="rounded-full" />
              </div>
              <div className="flex-auto">닉네임</div>
              <button type="button">
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
            </div>
            <div>
              서울숲으로 가실 분들 모집합니다~!!서울숲으로 가실 분들 모집합니다~!!서울숲으로 가실 분들 모집합니다~!!
            </div>
            <div className="flex gap-x-5">
              <span className="text-xs font-medium text-[#A2A9B5]">1시간전</span>
              <span className="inline-flex gap-x-[0.38rem]">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M14 8C14 11.3137 11.3137 14 8 14C7.2019 14 6.4402 13.8442 5.74366 13.5613C5.61035 13.5072 5.54369 13.4801 5.48981 13.468C5.43711 13.4562 5.3981 13.4519 5.34409 13.4519C5.28887 13.4519 5.22872 13.4619 5.10843 13.4819L2.73651 13.8772C2.48812 13.9186 2.36393 13.9393 2.27412 13.9008C2.19552 13.8671 2.13289 13.8045 2.09917 13.7259C2.06065 13.6361 2.08135 13.5119 2.12275 13.2635L2.51807 10.8916C2.53812 10.7713 2.54814 10.7111 2.54814 10.6559C2.54813 10.6019 2.54381 10.5629 2.532 10.5102C2.51992 10.4563 2.49285 10.3897 2.43871 10.2563C2.15582 9.5598 2 8.7981 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z"
                    stroke="#A2A9B5"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-xs font-medium text-[#A2A9B5]">대댓글</span>
              </span>
            </div>
          </li>
          <li className="space-y-4 px-5 py-4">
            <div className="flex items-center gap-x-[0.38rem]">
              <div>
                <TempImage width={36} height={36} className="rounded-full" />
              </div>
              <div className="flex-auto">닉네임</div>
              <button type="button">
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
            </div>
            <div>
              서울숲으로 가실 분들 모집합니다~!!서울숲으로 가실 분들 모집합니다~!!서울숲으로 가실 분들 모집합니다~!!
            </div>
            <div className="flex gap-x-5">
              <span className="text-xs font-medium text-[#A2A9B5]">1시간전</span>
              <span className="inline-flex gap-x-[0.38rem]">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M14 8C14 11.3137 11.3137 14 8 14C7.2019 14 6.4402 13.8442 5.74366 13.5613C5.61035 13.5072 5.54369 13.4801 5.48981 13.468C5.43711 13.4562 5.3981 13.4519 5.34409 13.4519C5.28887 13.4519 5.22872 13.4619 5.10843 13.4819L2.73651 13.8772C2.48812 13.9186 2.36393 13.9393 2.27412 13.9008C2.19552 13.8671 2.13289 13.8045 2.09917 13.7259C2.06065 13.6361 2.08135 13.5119 2.12275 13.2635L2.51807 10.8916C2.53812 10.7713 2.54814 10.7111 2.54814 10.6559C2.54813 10.6019 2.54381 10.5629 2.532 10.5102C2.51992 10.4563 2.49285 10.3897 2.43871 10.2563C2.15582 9.5598 2 8.7981 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z"
                    stroke="#A2A9B5"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-xs font-medium text-[#A2A9B5]">대댓글</span>
              </span>
            </div>
          </li>
          {/* TODO: 대댓글 */}
          <li className="space-y-4 bg-[#F4F4F5] py-4 pl-10 pr-5">
            <div className="flex items-center gap-x-[0.38rem]">
              <div>
                <TempImage width={36} height={36} className="rounded-full" />
              </div>
              <div className="flex-auto">닉네임</div>
              <button type="button">
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
            </div>
            <div>
              서울숲으로 가실 분들 모집합니다~!!서울숲으로 가실 분들 모집합니다~!!서울숲으로 가실 분들 모집합니다~!!
            </div>
            <div className="flex gap-x-5">
              <span className="text-xs font-medium text-[#A2A9B5]">1시간전</span>
            </div>
          </li>
        </ul>
        {/* TODO: 댓글이 없을 떄 */}
        {/* <div className="py-4 text-base/[1.75rem] font-normal text-[#A2A9B5]">댓글이 없습니다.</div> */}
      </div>
      {isViewComment && (
        <form className="sticky inset-x-0 bottom-0 flex h-[5.75rem] items-start gap-x-4 bg-white px-4 pb-[0.37rem] pt-[0.88rem]">
          <textarea
            ref={commentRef}
            required
            className="peer h-full flex-auto resize-none text-lg/[1.5rem] font-normal text-[#1E1E1E] caret-[#FF7314] outline-none placeholder:text-[#A2A9B5] focus:ring-2 focus:ring-[#FF7314]"
            placeholder="댓글을 입력해주세요"
          />
          <button
            type="submit"
            className="text-base font-medium text-[#FF7314] peer-invalid:pointer-events-none peer-invalid:text-[#A2A9B5]"
          >
            등록
          </button>
        </form>
      )}
    </>
  );
};
export default MettingBoardDetail;
MettingBoardDetail.type = "detail";
MettingBoardDetail.render = () => {
  const handleOptions = () => {
    Option.lists([
      {
        label: "게시글 수정하기",
        onClick: () => {
          window.location.href = "/metting/board/modify";
        },
      },
      {
        label: "게시글 삭제하기",
        onClick: async () => {
          const confirm = await Alert.confirm("게시글을 삭제하시겠어요?", undefined, {
            cancelText: "취소",
            confirmText: "삭제하기",
          });
          if (confirm) {
          }
        },
        textColor: "#EE4633",
      },
    ]);
  };
  return (
    <button type="button" className="ml-auto flex items-center" onClick={handleOptions}>
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
