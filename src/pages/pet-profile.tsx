import clsx from "clsx";
import Image from "next/image";
import { useRef, useState } from "react";
import Option from "src/core/function/option";

const PetProfile = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [petName, setPetName] = useState<string>();
  const cameraRef = useRef<HTMLInputElement>(null);
  const handleOpenAlbum = () => {
    try {
      const inputElement = document.createElement("input");
      inputElement.type = "file";
      inputElement.accept = "image/*";

      inputElement.addEventListener("change", event => {
        const target = event.target as HTMLInputElement;
        const file = target.files?.[0];

        if (file) {
          const imageURL = URL.createObjectURL(file);
          setSelectedImage(imageURL);
        }
      });

      inputElement.click();
    } catch (error) {
      console.error("앨범 열기 오류:", error);
    }
  };

  return (
    <div>
      <div className="px-5">
        <div className="text-[1.5rem]/[2.125rem] font-bold text-[#1e1e1e]">반려동물 프로필 작성하기</div>
        <div className="text-[0.875rem]/[1.25rem] font-normal text-[#707888]">나중에 추가로 등록할 수 있어요!</div>
      </div>
      <div
        onClick={async () => {
          await Option.lists([
            {
              label: "촬영하기",
              onClick: () => cameraRef.current?.click(),
            },
            {
              label: "앨범에서 선택하기",
              onClick: () => handleOpenAlbum(),
            },
          ]);
        }}
        className="relatvie mx-auto mt-[3.75rem] flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-full bg-[#f4f4f4]"
      >
        <input
          ref={cameraRef}
          className="hidden"
          type="file"
          accept="image/*"
          capture="environment"
          onChange={e => {
            const target = e.target as HTMLInputElement;
            const file = target.files?.[0];
            if (file) {
              const imageURL = URL.createObjectURL(file);
              setSelectedImage(imageURL);
            }
          }}
        />
        {selectedImage ? (
          <div className="relative h-full w-full">
            <Image alt="profile" fill src={selectedImage} className="absolute rounded-full object-cover" />
          </div>
        ) : (
          <div className="relative h-9 w-9">
            <Image alt="profile" fill src="/images/assets/common/basic-img.svg" className="absolute object-cover" />
          </div>
        )}
      </div>
      <div className="mt-[2.875rem] flex flex-col gap-6 px-5">
        <div className="text-[0.875rem]/[1.25rem] font-semibold text-[#111111]">반려동물 이름</div>
        <input
          onChange={e => {
            setPetName(e.currentTarget.value);
          }}
          className="h-[3.25rem] w-full rounded-[0.25rem] bg-[#f4f4f4] px-4"
          placeholder="반려동물 이름을 입력해 주세요"
          name="petName"
        />
      </div>
      <div className="fixed bottom-3 w-full px-5">
        <button
          type="button"
          className={clsx(
            "h-14 w-full cursor-pointer rounded-[0.25rem] text-[1.25rem]/[1.5rem] font-semibold text-[#ffffff]",
            petName ? "bg-[#FF7314]" : "bg-[#fddcb0]",
          )}
        >
          가입 완료
        </button>
      </div>
    </div>
  );
};

export default PetProfile;
