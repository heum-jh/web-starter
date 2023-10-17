import { useState } from "react";
import DetailLayout from "src/components/common/detail-layout";
import WriteModify from "src/components/common/write-modify";
import { NextPageWithLayout } from "src/pages/_app";

const MeetingNoticeCreatePage: NextPageWithLayout = () => {
  const [content, setContent] = useState("");
  return (
    <DetailLayout
      title="공지"
      render={() => {
        return (
          <button
            type="button"
            className="text-base font-medium text-[#FF7314] disabled:text-[#A2A9B5]"
            disabled={content === ""}
          >
            등록
          </button>
        );
      }}
    >
      <WriteModify
        type="write"
        titleCheck
        titlePlaceholder="제목을 입력해주세요"
        content={content}
        contentPlaceholder="내용을 입력해주세요"
        onChangeContent={setContent}
      />
    </DetailLayout>
  );
};
export default MeetingNoticeCreatePage;
MeetingNoticeCreatePage.type = "detail";
MeetingNoticeCreatePage.title = "공지";
MeetingNoticeCreatePage.getLayout = page => page;
