import { useState } from "react";
import { NextPageWithLayout } from "../_app";
import clsx from "clsx";
import TextInput from "src/components/common/text-input";
import TextArea from "src/components/common/textarea";
import SelectPopup from "src/components/common/select-popup";
import { useRouter } from "next/router";

const CreatePet: NextPageWithLayout = () => {
  const router = useRouter();
  console.log("router: * 등록시 같이 넘길 데이터:", router.query.petName, router.query.image);
  const [gender, setgender] = useState<"Male" | "Female">();
  const [category, setCategory] = useState<string>();
  const [birthday, setBirthday] = useState<string | number>();
  const [size, setSize] = useState<string>();
  const [content, setContent] = useState<string>();

  return (
    <div>
      <div className="relative flex flex-col gap-5 px-5">
        <div className="mt-[1.125rem]">
          <span className="text-[0.875rem]/[1.25rem] font-semibold text-[#111111]">성별</span>
          <div className="mt-[0.375rem] flex gap-1 text-[1.125rem]/[1.5rem] font-semibold">
            <span
              onClick={() => {
                setgender("Male");
              }}
              className={clsx(
                "flex h-14 w-[10.344rem] flex-1 cursor-pointer items-center justify-center rounded-[0.25rem]",
                gender === "Male" ? "bg-[#FF7314] text-[#ffffff]" : "bg-[#F0F1F2] text-[#A2A9B5]",
              )}
            >
              남
            </span>
            <span
              onClick={() => {
                setgender("Female");
              }}
              className={clsx(
                "flex h-14 w-[10.344rem] flex-1 cursor-pointer items-center justify-center rounded-[0.25rem]",
                gender === "Female" ? "bg-[#FF7314] text-[#ffffff]" : "bg-[#F0F1F2] text-[#A2A9B5]",
              )}
            >
              여
            </span>
          </div>
        </div>
        <div>
          <span className="text-[0.875rem]/[1.25rem] font-semibold text-[#111111]">품종</span>
          <TextInput
            onChange={e => {
              setCategory(e.target.value);
            }}
            placeholder="품종을 입력해 주세요"
            className="mt-[0.375rem]"
          />
        </div>
        <div>
          <span className="text-[0.875rem]/[1.25rem] font-semibold text-[#111111]">생년월일(6자리 숫자)</span>
          <TextInput
            onChange={e => {
              setBirthday(e.target.value);
            }}
            placeholder="생년월일을 입력해 주세요"
            className="mt-[0.375rem]"
          />
        </div>
        <div>
          <span className="text-[0.875rem]/[1.25rem] font-semibold text-[#111111]">크기</span>
          <SelectPopup
            placeholder="크기를 선택해 주세요"
            plceholderColor="text-[#A2A9B5]"
            list={[
              { label: "소형", value: "소형" },
              { label: "중형", value: "중형" },
              { label: "대형", value: "대형" },
            ]}
            value={size}
            onChange={value => setSize(value)}
            className="mt-[0.375rem] flex h-[3.25rem] w-full appearance-none justify-between border-none bg-[#f4f4f5] px-4 text-[1.125rem]/[1.5rem] font-normal  outline-none"
          />
        </div>
        <div>
          <span className="text-[0.875rem]/[1.25rem] font-semibold text-[#111111]">성향</span>
          <TextArea
            onChange={e => {
              setContent(e.target.value);
            }}
            placeholder="성향을 입력해 주세요"
            className="mt-[0.375rem]"
          />
        </div>
        <button
          type="button"
          onClick={() => {}}
          disabled={
            !(
              gender != undefined &&
              category != undefined &&
              category != "" &&
              birthday != undefined &&
              birthday != "" &&
              size != undefined &&
              size != "" &&
              content != undefined &&
              content != ""
            )
          }
          className={clsx(
            "h-14 w-full rounded-[0.25rem] text-[1.125rem]/[1.5rem] font-normal text-[#ffffff]",
            gender != undefined &&
              category != undefined &&
              category != "" &&
              birthday != undefined &&
              birthday != "" &&
              size != undefined &&
              size != "" &&
              content != undefined &&
              content != ""
              ? "bg-[#FF7314]"
              : "bg-[#FDDCB0]",
          )}
        >
          등록
        </button>
      </div>
    </div>
  );
};

export default CreatePet;
CreatePet.type = "detail";
