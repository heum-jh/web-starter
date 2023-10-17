import clsx from "clsx";
import { useState } from "react";
import DetailLayout from "src/components/common/detail-layout";
import TextArea from "src/components/common/textarea";
import { NextPageWithLayout } from "../_app";
import Alert from "src/core/function/alert";
import { useRouter } from "next/router";

const MeetingDeletePage: NextPageWithLayout = () => {
  const router = useRouter();
  const [text, setText] = useState<string>();
  return (
    <DetailLayout
      title="모임 삭제"
      render={() => (
        <button
          type="button"
          className={clsx("text-base font-medium", text ? "text-[#FF7314]" : "text-[#A2A9B5]")}
          onClick={async () => {
            if (true) {
              router.push("/");
              await Alert.alert("모임 삭제가 완료되었습니다!");
            }
          }}
        >
          등록
        </button>
      )}
    >
      <TextArea
        placeholder="모임 삭제 사유를 입력해주세요"
        className="h-full"
        value={text}
        onChange={e => setText(e.currentTarget.value)}
      />
    </DetailLayout>
  );
};
export default MeetingDeletePage;
MeetingDeletePage.getLayout = page => page;
