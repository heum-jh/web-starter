import Image from "next/image";
import { NextPageWithLayout } from "../_app";

const AddPetPage: NextPageWithLayout = () => {
  const petLists = Array.from({ length: 4 });
  //   특수문자 X
  // 최대 8글자
  // 생년월일 유효성검사까지
  return (
    <div className="px-5">
      <div className="mt-5 text-[1.5rem]/[2.125rem] font-bold text-[#1e1e1e]">
        변려동물의
        <br /> 프로필을 추가 작성해주세요!
      </div>
      <div className="mt-5">
        {petLists.map((_, index) => {
          return (
            <div key={index} className="flex h-[5.5rem] cursor-pointer items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12">
                  <Image
                    src="/images/assets/common/article.svg"
                    alt="profile"
                    fill
                    className="rounded-full object-contain"
                  />
                </div>
                <div>강아지이름</div>
              </div>
              <div className="relative h-6 w-6">
                <Image src="/images/assets/common/right.svg" alt="right" fill className="object-contain" />
              </div>
            </div>
          );
        })}
        <div className="flex h-[5.5rem] cursor-pointer items-center justify-between">
          <div className="flex items-center gap-3">
            <div className=" h-12 w-12 rounded-full border border-[#F0F1F2]">
              <div className="relative h-[0.875] w-[0.875rem]">
                <Image src="/images/assets/common/plus.svg" alt="profile" fill className="object-contain" />
              </div>
            </div>
            <div>반려동물추가하기</div>
          </div>
          <div className="relative h-6 w-6">
            <Image src="/images/assets/common/right.svg" alt="right" fill className="object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPetPage;
AddPetPage.type = "detail";
