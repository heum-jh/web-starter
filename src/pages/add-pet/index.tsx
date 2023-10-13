import Image from "next/image";
import { NextPageWithLayout } from "../_app";
import { useRouter } from "next/router";

const AddPetPage: NextPageWithLayout = () => {
  const petLists = Array.from({ length: 1 });
  const router = useRouter();
  return (
    <div>
      <div className="mt-5 px-5 text-[1.5rem]/[2.125rem] font-bold text-[#1e1e1e]">
        변려동물의
        <br /> 프로필을 추가 작성해주세요!
      </div>
      <div className="mt-5 text-[0.875rem]/[1.25rem] font-medium">
        {petLists.map((_, index) => {
          return (
            <div key={index} className="flex h-[5.5rem] cursor-pointer items-center justify-between px-5">
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12">
                  <Image
                    src="/images/assets/common/default-dog.svg"
                    alt="profile"
                    fill
                    className="rounded-full object-contain"
                  />
                </div>
                <div className="text-[#1E1E1E]">강아지이름</div>
              </div>
              <div className="relative h-6 w-6">
                <Image src="/images/assets/common/right.svg" alt="right" fill className="object-contain" />
              </div>
            </div>
          );
        })}
        <div className="w-full border-t border-[#F0F1F2]" />
        <div
          onClick={() => router.push({ pathname: "/pet-profile", query: { addPet: true } })}
          className="flex h-[5.5rem] cursor-pointer items-center justify-between px-5"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#F0F1F2]">
              <div className="relative h-[0.875rem] w-[0.875rem]">
                <Image src="/images/assets/common/plus.svg" alt="profile" fill className="object-contain" />
              </div>
            </div>
            <div className="text-[#A2A9B5]">반려동물추가하기</div>
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
