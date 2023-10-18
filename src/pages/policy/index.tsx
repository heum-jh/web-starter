import { useRouter } from "next/router";
import { Order, useTermsOfServicesQuery } from "src/core/graphql";
import { NextPageWithLayout } from "src/pages/_app";

const PolicyPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { data } = useTermsOfServicesQuery({
    variables: {
      sort: [
        {
          updatedAt: {
            order: Order.Descending,
          },
        },
      ],
    },
  });

  return (
    <div className="bg-[#F6F6F6]">
      <ul className="flex  flex-col ">
        {data?.termsOfServices?.edges.map((edge, i) => {
          return (
            <li
              key={i}
              className="flex h-[4rem] items-center justify-between border-b border-[#F0F1F2] bg-[#ffffff] pl-[1.25rem] pr-[1.25rem]"
              onClick={() => router.push(`/policy/${edge?.node.id}`)}
            >
              <div className=" text-lg/[1.5rem] font-medium">{edge?.node.name}</div>
              <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 7L4 4L1 1"
                  stroke="#707888"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PolicyPage;
PolicyPage.type = "detail";
PolicyPage.title = "이용 약관";
