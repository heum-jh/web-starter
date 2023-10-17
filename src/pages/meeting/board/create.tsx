import { useState } from "react";
import DetailLayout from "src/components/common/detail-layout";
import WriteModify from "src/components/common/write-modify";
import { NextPageWithLayout } from "src/pages/_app";

const MeetingBoardModifyPage: NextPageWithLayout = () => {
  const [content, setContent] = useState("");
  return (
    <DetailLayout
      title="게시글"
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
        content={content}
        contentPlaceholder="게시글을 작성해주세요"
        onChangeContent={setContent}
      />
    </DetailLayout>
  );
};
export default MeetingBoardModifyPage;
MeetingBoardModifyPage.type = "detail";
MeetingBoardModifyPage.title = "게시글";
MeetingBoardModifyPage.getLayout = page => page;
