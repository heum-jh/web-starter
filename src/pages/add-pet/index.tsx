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
      <div>
        {petLists.map((item, index) => {
          return <div key={index}></div>;
        })}
      </div>
    </div>
  );
};

export default AddPetPage;
AddPetPage.type = "detail";
