import { useRouter } from "next/router";
import ArticleCard from "src/components/article/article-card";
import { NextPageWithLayout } from "../_app";
import SelectPopup from "src/components/common/select-popup";
import { useState } from "react";
import Footer from "src/components/common/footer";

const ArticlePage: NextPageWithLayout = () => {
  const router = useRouter();
  const [sort, setSort] = useState("new");
  return (
    <main className="container pb-16">
      <h1 className="px-5 py-[0.94rem] font-SUITE text-2xl font-extrabold text-[#111111]">아티클</h1>
      <div className="flex items-center justify-between px-5 pb-[0.63rem] pt-3">
        <span className="text-base font-semibold text-[#111111]">00개의 발행</span>
        <SelectPopup
          list={[
            { label: "최신순", value: "new" },
            { label: "좋아요 순", value: "like" },
          ]}
          value={sort}
          onChange={setSort}
        />
      </div>
      <div>
        <ul className="divide-y divide-[#F0F1F2]">
          {Array.from({ length: 10 }).map((_, idx) => (
            <ArticleCard
              key={idx}
              onClick={() =>
                router.push({
                  pathname: `/article/${"id"}`,
                })
              }
            />
          ))}
        </ul>
      </div>
    </main>
  );
};
export default ArticlePage;
ArticlePage.getLayout = page => {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
