import Image from "next/image";
import { NextPageWithLayout } from "../_app";
import clsx from "clsx";
import { useRef, useState } from "react";
import Option from "src/core/function/option";
import TextArea from "src/components/common/textarea";
import TextInput from "src/components/common/text-input";
const InfoChangePage: NextPageWithLayout = () => {
  const data = { nickName: "닉네임", content: "소개" };
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [nickName, setNickName] = useState<string>();
  const [_, setContent] = useState<string>();
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
        <div className="text-[1.5rem]/[2.125rem] font-bold text-[#1e1e1e]">프로필 수정하기</div>
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
            <Image alt="profile" fill src={selectedImage} className="absolute rounded-full object-contain" />
          </div>
        ) : (
          <div className="relative h-9 w-9">
            <Image alt="profile" fill src="/images/assets/common/basic-img.svg" className="absolute object-contain" />
          </div>
        )}
      </div>
      <div className="mt-[2.875rem] flex flex-col gap-[0.375rem] px-5">
        <div className="text-[0.875rem]/[1.25rem] font-semibold text-[#111111]">닉네임</div>
        <TextInput
          onChange={e => setNickName(e.currentTarget.value)}
          placeholder={data.nickName}
          value={nickName}
          maxLength={8}
          className="h-[3.25rem] w-full rounded-[0.25rem] bg-[#f4f4f4] px-4"
        />
        <div className="flex items-center gap-1 text-[0.875rem]/[1.25rem] font-normal text-[#6B7280]">
          <div className="relative h-4 w-4">
            <Image src={"/images/assets/common/info-text.svg"} alt="info" fill className="object-cover" />
          </div>
          닉네임은 한 달에 한 번만 변경할 수 있습니다.
        </div>
      </div>
      <div className="mt-[0.875rem] flex flex-col gap-[0.375rem] px-5">
        <div className="text-[0.875rem]/[1.25rem] font-semibold text-[#111111]">프로필 내용</div>
        <TextArea
          placeholder="내용을 입력해 주세요"
          onChange={e => {
            setContent(e.currentTarget.value);
          }}
        />
      </div>
      <div className="fixed bottom-3 w-full px-4">
        <button
          type="button"
          className={clsx(
            "h-14 w-full cursor-pointer rounded-[0.25rem] text-[1.25rem]/[1.5rem] font-semibold text-[#ffffff]",
            nickName ? "bg-[#FF7314]" : "bg-[#fddcb0]",
          )}
        >
          수정완료
        </button>
      </div>
    </div>
  );
};

export default InfoChangePage;
InfoChangePage.type = "detail";
