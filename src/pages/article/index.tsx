import { useRouter } from "next/router";
import ArticleCard from "src/components/article/article-card";
import { NextPageWithLayout } from "../_app";

const ArticlePage: NextPageWithLayout = () => {
  const router = useRouter();
  return (
    <main className="container">
      <h1 className="px-5 py-[0.94rem] font-SUITE text-2xl font-extrabold text-[#111111]">아티클</h1>
      <div className="flex items-center justify-between px-5 pb-[0.63rem] pt-3">
        <span className="text-base font-semibold text-[#111111]">00개의 발행</span>
        <button>TEST</button>
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
  return page;
};
