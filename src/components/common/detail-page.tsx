import PopoverImage from "./popover-image";

type DetailPageProps = {
  title: string;
  content: string;
  createdAt: string;
  imageUrl: string[];
};
const DetailPage = ({ title, createdAt, content, imageUrl }: DetailPageProps) => {
  return (
    <div>
      <div className="flex items-center justify-between gap-3 border-b border-b-[#F0F1F2] p-5">
        <h2 className="text-lg font-medium text-[#1E1E1E]">{title}</h2>
      </div>
      <div className="w-full px-5 pt-3 text-right text-sm font-medium text-[#707888]">{createdAt}</div>
      <div className="p-5">{content}</div>
      <div className="grid grid-cols-5 grid-rows-2 gap-y-[0.87rem] px-5">
        {imageUrl.map((url, i) => {
          return (
            <div key={i} className="relative h-14 w-14 overflow-hidden rounded-[0.25rem] border border-[#F0F1F2]">
              <PopoverImage alt="" src={url} width={500} height={500} className="object-cover" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default DetailPage;
