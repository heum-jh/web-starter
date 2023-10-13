import WriteModify from "src/components/common/write-modify";
import { NextPageWithLayout } from "../_app";

const InquiryWritePage: NextPageWithLayout = () => {
  return <WriteModify type="write" titleCheck={true}></WriteModify>;
};
export default InquiryWritePage;
InquiryWritePage.type = "detail";
InquiryWritePage.title = "1:1 문의";
InquiryWritePage.render = () => {
  return <div className="text-base font-medium text-[#A2A9B5]">등록</div>;
};
