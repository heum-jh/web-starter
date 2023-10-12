import TempImage from "../common/temp-image";
type ArticleCardProps = {
  onClick?: () => void;
};
const ArticleCard = ({ onClick }: ArticleCardProps) => {
  return (
    <li className="flex cursor-pointer gap-x-2 p-5" onClick={onClick}>
      <div>
        <TempImage width={80} height={80} className="rounded-[0.13rem]" />
      </div>
      <div className="flex flex-auto flex-col">
        <div className="text-lg font-bold text-[#1E1E1E]">10월 여행지 추천!</div>
        <div className="text-sm font-normal text-[#707888]">가을을 맞아 어떤 여행지가 있을까요?</div>
        <div className="mt-auto inline-flex items-center justify-end gap-[0.38rem]">
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10" viewBox="0 0 11 10" fill="none">
            <path
              d="M7.76111 0C9.69833 0 11 1.8625 11 3.6C11 7.11875 5.59778 10 5.5 10C5.40222 10 0 7.11875 0 3.6C0 1.8625 1.30167 0 3.23889 0C4.35111 0 5.07833 0.56875 5.5 1.06875C5.92167 0.56875 6.64889 0 7.76111 0Z"
              fill="#A2A9B5"
              //   fill="#FF7314"
            />
          </svg>
          <span className="text-xs font-normal text-[#A2A9B5]">05</span>
        </div>
      </div>
    </li>
  );
};
export default ArticleCard;
