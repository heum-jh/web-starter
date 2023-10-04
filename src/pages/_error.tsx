import Layout from "src/components/common/layout";
import Seo from "src/components/common/seo";

export default function Error() {
  return (
    <Layout>
      <Seo title="Not Found" />
      <main>
        <section className="bg-white">
          <div className="flex min-h-screen flex-col items-center justify-center text-center text-black">
            <h1 className="text-24/24">ERROR:&nbsp;</h1>
            <h2 className="text-18/18">요청하신 페이지를 찾을 수 없습니다.</h2>
          </div>
        </section>
      </main>
    </Layout>
  );
}
