import WriteModify from "src/components/common/write-modify";
import { NextPageWithLayout } from "../_app";
import InsertImage from "src/components/common/insert-image";

const InquiryModifyPage: NextPageWithLayout = () => {
  return (
    <WriteModify
      type="modify"
      titleCheck={true}
      title="제목입니다"
      content="내용입니다"
      imageUrl={[{ name: "test.png", url: "https://via.placeholder.com/300x300?text=" }]}
    ></WriteModify>
  );
};
export default InquiryModifyPage;
InquiryModifyPage.type = "detail";
InquiryModifyPage.title = "1:1 문의";
InquiryModifyPage.render = () => {
  return <div className="text-base font-medium text-[#A2A9B5]">수정</div>;
};
