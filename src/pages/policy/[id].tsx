import { NextPageWithLayout } from "../_app";

const PolicyDetailPage: NextPageWithLayout = () => {
  return <div className="h-full p-[1.25rem]" dangerouslySetInnerHTML={{ __html: INNER_HTML }}></div>;
};
export default PolicyDetailPage;
PolicyDetailPage.type = "detail";
PolicyDetailPage.title = "이용약관명";
const INNER_HTML = `
    <h1 style="font-family: Pretendard; font-size: 20px; font-weight: 700; line-height: 28px; letter-spacing: 0em; text-align: left; margin-bottom: 4px;">제 1조</h1>
    <p style="font-family: Pretendard; font-size: 16px; font-weight: 500; line-height: 24px; letter-spacing: 0em; text-align: left; margin-bottom: 40px;">내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용</p>
   
    <h1 style="font-family: Pretendard; font-size: 20px; font-weight: 700; line-height: 28px; letter-spacing: 0em; text-align: left; margin-top: 28px; margin-bottom: 4px;">제 2조</h1>
    <p style="font-family: Pretendard; font-size: 16px; font-weight: 500; line-height: 24px; letter-spacing: 0em; text-align: left; margin-bottom: 40px;">내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용</p>
   
    <p style="font-family: Pretendard; font-size: 16px; font-weight: 500; line-height: 24px; letter-spacing: 0em; text-align: left; margin-top: 28px; margin-bottom: 28px;">내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용</p>
    <p style="font-family: Pretendard; font-size: 16px; font-weight: 500; line-height: 24px; letter-spacing: 0em; text-align: left;">내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용</p>
`;
