import Image from "next/image";

const BookMark = () => {
  // 폴더 만들기 제한 5개
  return (
    <div className="mb-20 mt-5 px-5">
      <div>
        <div className="flex h-14 cursor-pointer items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-full border border-[#DBDEE4]">
            <div className="relative h-[0.875rem] w-[0.875rem]">
              <Image src="/images/assets/common/plus.svg" alt="pet-profile" fill className="object-cover" />
            </div>
          </div>
          <span className="text-[1rem]/[1.5rem] font-medium text-[#707888]">새 폴더 만들기</span>
        </div>
        <div className="flex h-[4.25rem] w-full items-center gap-[0.641rem] border-t border-[#F0F1F2]">
          <div className="h-[1.406rem] w-[1.406rem] rounded-[0.25rem] bg-[#FF7A7A]" />
          <div>
            <div className="text-[1.125rem]/[1.5rem] font-medium">타이틀</div>
            <div className="text-[0.875rem]/[1.25rem] font-normal text-[#707888]">카페 · 1개</div>
          </div>
        </div>
        <div className="flex h-[4.25rem] w-full items-center gap-[0.641rem] border-t border-[#F0F1F2]">
          <div className="h-[1.406rem] w-[1.406rem] rounded-[0.25rem] bg-[#FFBB55]" />
          <div>
            <div className="text-[1.125rem]/[1.5rem] font-medium">타이틀</div>
            <div className="text-[0.875rem]/[1.25rem] font-normal text-[#707888]">카테고리 · 1개</div>
          </div>
        </div>
        <div className="flex h-[4.25rem] w-full items-center gap-[0.641rem] border-t border-[#F0F1F2]">
          <div className="h-[1.406rem] w-[1.406rem] rounded-[0.25rem] bg-[#5F6FFF]" />
          <div>
            <div className="text-[1.125rem]/[1.5rem] font-medium">타이틀</div>
            <div className="text-[0.875rem]/[1.25rem] font-normal text-[#707888]">카테고리 · 1개</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookMark;
