import Head from "next/head";
export const defaultMeta = {
  title: "한국외식산업",
  siteName: "한국외식산업",
  description: "한국외식산업",
  url: "http://localhost:3000",
  type: "website",
  robots: "follow, index",
  // TODO: 파비콘 이미지 필요
  image: "https://picsum.photos/id/237/200/300",
};
const Seo = (props: Partial<typeof defaultMeta>) => {
  const meta = { ...defaultMeta, ...props };
  return (
    <Head>
      <title>{meta.title}</title>
      <meta property="og:title" content={meta.title} />
      <meta name="description" content={meta.description} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:site_name" content={meta.siteName} />
      <meta property="og:url" content={meta.url} />
      <meta property="og:type" content={meta.type} />
      <meta name="robots" content={meta.robots} />
      <meta name="image" property="og:image" content={meta.image} />
    </Head>
  );
};
export default Seo;
