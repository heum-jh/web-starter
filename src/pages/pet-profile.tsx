import Image from "next/image";

const PetProfile = () => {
  return (
    <div className="px-5">
      <div>
        <div className="text-[1.5rem]/[2.125rem] font-bold text-[#1e1e1e]">반려동물 프로필 작성하기</div>
        <div className="text-[0.875rem]/[1.25rem] font-normal text-[#707888]">나중에 추가로 등록할 수 있어요!</div>
      </div>
      <label className="relatvie  mx-auto mt-[3.75rem] flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-full bg-[#f4f4f4]">
        <input type="file" className="hidden" />
        <div className="relative h-9 w-9">
          <Image alt="profile" fill src="/images/assets/common/basic-img.svg" className="absolute object-cover" />
        </div>
      </label>
      <div className="mt-[2.875rem] flex flex-col gap-6">
        <div className="text-[0.875rem]/[1.25rem] font-semibold text-[#111111]">반려동물 이름</div>
        <input
          className="h-[3.25rem] w-full rounded-[0.25rem] bg-[#f4f4f4] px-4"
          placeholder="반려동물 이름을 입력해 주세요"
        />
      </div>
      <div className="fixed bottom-3">
        <button
          type="button"
          className="h-14 w-[20.938rem] cursor-pointer rounded-[0.25rem] bg-[#fddcb0] text-[1.25rem]/[1.5rem] font-semibold text-[#ffffff]"
        >
          가입 완료
        </button>
      </div>
    </div>
  );
};

export default PetProfile;
