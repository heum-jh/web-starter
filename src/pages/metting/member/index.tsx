import MettingMemberListCard from "src/components/metting/member-list-card";
import { NextPageWithLayout } from "src/pages/_app";

const MemberPage: NextPageWithLayout = () => {
  return (
    <ul className="space-y-6 px-5">
      <MettingMemberListCard />
      <MettingMemberListCard />
      <MettingMemberListCard />
      <MettingMemberListCard />
    </ul>
  );
};

export default MemberPage;
MemberPage.type = "detail";
MemberPage.title = "모임원";
