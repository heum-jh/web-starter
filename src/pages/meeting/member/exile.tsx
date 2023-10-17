import clsx from "clsx";
import { useState } from "react";
import DetailLayout from "src/components/common/detail-layout";
import TextArea from "src/components/common/textarea";
import Alert from "src/core/function/alert";
import { useRouter } from "next/router";
import { NextPageWithLayout } from "src/pages/_app";

const MeetingMemberExilePage: NextPageWithLayout = () => {
  const router = useRouter();
  const [text, setText] = useState<string>();
  return (
    <DetailLayout
      title="내보내기"
      render={() => (
        <button
          type="button"
          className={clsx("text-base font-medium", text ? "text-[#FF7314]" : "text-[#A2A9B5]")}
          onClick={async () => {
            if (true) {
              router.back();
              await Alert.alert("친구를 내보내기하였습니다.");
            }
          }}
        >
          등록
        </button>
      )}
    >
      <TextArea
        placeholder="내보내기 사유를 입력해주세요"
        className="h-full"
        value={text}
        onChange={e => setText(e.currentTarget.value)}
      />
    </DetailLayout>
  );
};
export default MeetingMemberExilePage;
MeetingMemberExilePage.getLayout = page => page;
