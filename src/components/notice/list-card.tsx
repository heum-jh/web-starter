import { DateTime } from "luxon";
type NoticeListCardProps = {
  title: string;
  createdAt: string;
  onClick?: () => void;
};
const NoticeListCard = ({ title, createdAt, onClick }: NoticeListCardProps) => {
  return (
    <li className="cursor-pointer border-b border-b-[#F0F1F2] p-5" onClick={onClick}>
      <div className="flex items-center justify-between gap-3">
        <div className="truncate text-lg font-medium text-[#1E1E1E]">{title}</div>
        <div className="text-sm font-medium text-[#707888]">{DateTime.fromISO(createdAt).toFormat("yy.MM.dd")}</div>
      </div>
    </li>
  );
};
export default NoticeListCard;
