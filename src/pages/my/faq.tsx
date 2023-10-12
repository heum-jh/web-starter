import FAQListCard from "src/components/my/list-card";
import { NextPageWithLayout } from "src/pages/_app";

const MyPageFAQPage: NextPageWithLayout = () => {
  const data = Array.from({ length: 3 });

  return (
    <div className="bg-[#F0F1F2]">
      <ul className="flex  flex-col ">
        {data.map((_, i) => {
          return (
            <FAQListCard
              key={i}
              title={"자주묻는 질문"}
              content={"가나다라마바사아자차카타파하하하하하하하하하하파타카차자아사바마라다나가"}
            ></FAQListCard>
          );
        })}
      </ul>
    </div>
  );
};

export default MyPageFAQPage;
MyPageFAQPage.type = "detail";
MyPageFAQPage.title = "자주묻는 질문";
