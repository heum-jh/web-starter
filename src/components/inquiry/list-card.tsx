type InquiryListCardProps = {
  title: string;
  state: string;
  onClick?: () => void;
};
const InquiryListCard = ({ title, state, onClick }: InquiryListCardProps) => {
  let stateColor = "#1E1E1E";
  switch (state) {
    case "답변 대기":
      stateColor = "#1E1E1E";
      break;
    case "답변 완료":
      stateColor = "#EE4633";
      break;
    default:
      stateColor = "#1E1E1E";
  }
  return (
    <li
      className=" flex h-[4rem] items-center justify-between border-b border-[#F0F1F2] bg-[#ffffff] pl-[1.25rem] pr-[1.25rem]"
      onClick={onClick}
    >
      <div className="  overflow-hidden text-ellipsis whitespace-nowrap break-all text-lg/[1.5rem] font-medium">
        {title}
      </div>
      <div className={`whitespace-nowrap text-sm font-medium text-[${stateColor}]`}>{state}</div>
    </li>
  );
};
export default InquiryListCard;
