import MeetingMemberListCard from "src/components/meeting/member-list-card";
import { NextPageWithLayout } from "src/pages/_app";

const MemberPage: NextPageWithLayout = () => {
  return (
    <ul className="space-y-6 px-5">
      <MeetingMemberListCard />
      <MeetingMemberListCard />
      <MeetingMemberListCard />
      <MeetingMemberListCard />
    </ul>
  );
};

export default MemberPage;
MemberPage.type = "detail";
MemberPage.title = "모임원";
