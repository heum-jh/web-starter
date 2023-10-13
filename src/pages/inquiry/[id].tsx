import DetailPage from "src/components/common/detail-page";
import { NextPageWithLayout } from "../_app";
import Image from "next/image";
import Option from "src/core/function/option";
import { useRouter } from "next/router";
import router from "next/router";

const InquiryDetailPage: NextPageWithLayout = () => {
  return (
    <DetailPage
      title="타이틀 입니다"
      content="내용입니다"
      createdAt="2023-01-01"
      imageUrl={[`https://via.placeholder.com/300x300?text=`]}
    ></DetailPage>
  );
};
export default InquiryDetailPage;
InquiryDetailPage.type = "detail";
InquiryDetailPage.title = "1:1 문의";
InquiryDetailPage.render = () => {
  return (
    <div
      className=" flex items-center justify-end "
      onClick={async () => {
        await Option.lists([
          {
            label: "문의글 수정",
            onClick: () => {
              router.push(`/inquiry/modify`);
            },
          },
          {
            label: "문의글 삭제",
            onClick: () => "",
          },
        ]);
      }}
    >
      <Image src="/images/assets/common/kebab-menu.svg" alt="" width="4" height="18" />
    </div>
  );
};
