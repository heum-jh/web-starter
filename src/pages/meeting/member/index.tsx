import clsx from "clsx";
import { useRouter } from "next/router";
import MeetingMemberListCard from "src/components/meeting/member-list-card";
import Alert from "src/core/function/alert";
import { NextPageWithLayout } from "src/pages/_app";

const MeetingMemberPage: NextPageWithLayout = () => {
  const router = useRouter();

  const applicantList = Array.from({ length: 3 });
  const handleExile = async () => {
    const confrim = await Alert.confirm("닉네임 님을<br/>내보내시겠어요?", undefined, {
      cancelText: "취소",
      confirmText: "내보내기",
    });
    if (confrim) {
      router.push({
        pathname: "/meeting/member/exile",
        query: router.query,
      });
    }
  };
  return (
    <div>
      {applicantList.length > 0 && (
        <div className="border-b-[0.75rem] border-b-[#F6F6F6] px-5 pb-5">
          <div className="mb-5 py-[0.37rem] text-base font-semibold text-[#111111]">승인 대기</div>
          <ul className="space-y-6">
            <MeetingMemberListCard
              role="user"
              onApprove={() => Alert.alert("승인되었습니다.")}
              onReject={() => Alert.alert("거절되었습니다.")}
            />
            <MeetingMemberListCard
              role="user"
              onApprove={() => Alert.alert("승인되었습니다.")}
              onReject={() => Alert.alert("거절되었습니다.")}
            />
            <MeetingMemberListCard
              role="user"
              onApprove={() => Alert.alert("승인되었습니다.")}
              onReject={() => Alert.alert("거절되었습니다.")}
            />
            <MeetingMemberListCard
              role="user"
              onApprove={() => Alert.alert("승인되었습니다.")}
              onReject={() => Alert.alert("거절되었습니다.")}
            />
          </ul>
        </div>
      )}
      {/*  */}
      <div className="px-5 pb-5">
        <div
          className={clsx(
            "my-5 py-[0.37rem] text-base font-semibold text-[#111111]",
            applicantList.length > 0 ? "block" : "hidden",
          )}
        >
          모임원
        </div>
        <ul className="space-y-6">
          <MeetingMemberListCard role="writer" onExile={handleExile} />
          <MeetingMemberListCard role="writer" onExile={handleExile} />
          <MeetingMemberListCard role="writer" onExile={handleExile} />
          <MeetingMemberListCard role="writer" onExile={handleExile} />
        </ul>
      </div>
    </div>
  );
};

export default MeetingMemberPage;
MeetingMemberPage.type = "detail";
MeetingMemberPage.title = "모임원";
