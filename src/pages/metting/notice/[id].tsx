import PopoverImage from "src/components/common/popover-image";
import { NextPageWithLayout } from "src/pages/_app";

const NoticeDetailPage: NextPageWithLayout = () => {
  return (
    <div>
      <div className="flex items-center justify-between gap-3 border-b border-b-[#F0F1F2] p-5">
        <h2 className="text-lg font-medium text-[#1E1E1E]">공지 제목</h2>
      </div>
      <div className="w-full px-5 pt-3 text-right text-sm font-medium text-[#707888]">21.10.10</div>
      <div className="p-5">사용자 공지사항</div>
      <div className="grid grid-cols-5 grid-rows-2 gap-y-[0.87rem] px-5">
        {Array.from({ length: 8 }).map((_, idx) => {
          return (
            <div key={idx} className="relative h-14 w-14 overflow-hidden rounded-[0.25rem] border border-[#F0F1F2]">
              <PopoverImage
                alt=""
                src={`https://via.placeholder.com/300x300?text=index_${idx}`}
                width={500}
                height={500}
                className="object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default NoticeDetailPage;
NoticeDetailPage.type = "detail";
