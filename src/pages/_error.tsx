import { NextPage } from "next";
import Seo from "src/components/common/seo";

const Error: NextPage = () => {
  return (
    <>
      <Seo title="Not Found" />
      <main>
        <section className="bg-white">
          <div className="flex min-h-screen flex-col items-center justify-center text-center text-black">
            <h1 className="text-3xl">ERROR:&nbsp;</h1>
            <h2 className="text-xl">요청하신 페이지를 찾을 수 없습니다.</h2>
          </div>
        </section>
      </main>
    </>
  );
};
export default Error;
Error.displayName = "error";
