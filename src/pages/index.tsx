import TempImage from "src/components/common/temp-image";
import HomeCategory from "src/components/index/category";
import HomeMeetingList from "src/components/index/meeting-list";

const Home = () => {
  return (
    <section className="">
      <div className="px-5 py-4">
        <div className="flex items-center gap-3 rounded border border-[#F0F1F2] p-4">
          <div className="basis-[48px]">
            <TempImage width={48} height={48} />
          </div>
          <div className="flex-1">
            <div className="mb-[0.62rem] text-[1.75rem]/[1.375rem] font-semibold text-[#1E1E1E]">23℃</div>
            <div className="text-sm font-normal text-[#707888]">18℃ / 25℃</div>
          </div>
          <div className="flex-1 whitespace-nowrap text-base font-normal text-[#1E1E1E]">어제보다 1℃ 낮아요</div>
        </div>
      </div>
      <HomeCategory />
      <HomeMeetingList />
    </section>
  );
};

export default Home;
