import type { GetServerSidePropsContext } from "next";
// import { File as GraphqlFile } from "src/core/graphql";
type GraphqlFile = {};

export async function uploadFile(
  targetFiles: File[],
  _context?: Pick<GetServerSidePropsContext, "req" | "res">,
): Promise<GraphqlFile[]> {
  const formData = new FormData();
  for (const target of targetFiles) {
    formData.append("file", target);
  }

  const url = new URL(`/files/upload`, process.env.NEXT_PUBLIC_API_BASE_URL).href;
  const response = await fetch(url, {
    method: "POST",
    body: formData,
  });

  if (response.ok !== true) {
    throw new Error(await response.text());
  }

  const files = await response.json();
  return files;
}
