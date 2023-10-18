import { useTermsOfServiceQuery } from "src/core/graphql";
import { NextPageWithLayout } from "../_app";
import { useRouter } from "next/router";
import DetailLayout from "src/components/common/detail-layout";

const PolicyDetailPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { data } = useTermsOfServiceQuery({
    variables: {
      termsOfServiceId: router.query.id as string,
    },
  });

  return (
    <DetailLayout title={data?.termsOfService.name}>
      <div className="h-full p-[1.25rem]" dangerouslySetInnerHTML={{ __html: `${data?.termsOfService.content}` }}></div>
    </DetailLayout>
  );
};
export default PolicyDetailPage;
PolicyDetailPage.type = "detail";
PolicyDetailPage.getLayout = page => page;
