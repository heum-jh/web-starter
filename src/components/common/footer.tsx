import Image from "next/image";
import { useRouter } from "next/router";
import { cn } from "src/core/function/cn";

const Footer = ({ className }: { className: string }) => {
  const router = useRouter();
  return (
    <div className={cn("sticky bottom-0 w-full bg-[#ffffff] pt-5", className)}>
      <div className="flex justify-evenly bg-[#ffffff] text-[0.625rem]/[1.5rem] font-medium text-[#4a5360]">
        <div className="flex flex-1 cursor-pointer flex-col items-center justify-center">
          <div
            className="relative h-[1.5rem] w-[1.5rem]"
            onClick={() => {
              router.push("/");
            }}
          >
            <Image
              src={`/images/assets/common/${router.asPath.startsWith("/") ? "home-active" : "home"}.svg`}
              alt="home"
              fill
              className="object-cover"
            />
          </div>
          <span>모임</span>
        </div>
        <div className="flex flex-1 cursor-pointer flex-col items-center justify-center">
          <div
            className="relative h-[1.5rem] w-[1.5rem]"
            onClick={() => {
              router.push("/");
            }}
          >
            <Image
              src={`/images/assets/common/${!router.asPath.startsWith("/") ? "article-active" : "article"}.svg`}
              fill
              className="object-cover"
              alt="article"
            />
          </div>
          <span>아티클</span>
        </div>
        <div className="flex flex-1 cursor-pointer flex-col items-center justify-center">
          <div
            className="relative h-[1.5rem] w-[1.5rem]"
            onClick={() => {
              router.push("/");
            }}
          >
            <Image
              src={`/images/assets/common/${
                !router.asPath.startsWith("/") ? "around-location-active" : "around-location"
              }.svg`}
              fill
              className="object-cover"
              alt="around-location"
            />
          </div>
          <span>주변 탐색</span>
        </div>
        <div className="flex flex-1 cursor-pointer flex-col items-center justify-center">
          <div
            className="relative h-[1.5rem] w-[1.5rem]"
            onClick={() => {
              router.push("/");
            }}
          >
            <Image
              src={`/images/assets/common/${!router.asPath.startsWith("/") ? "chatting-active" : "chatting"}.svg`}
              fill
              className="object-cover"
              alt="chatting"
            />
          </div>
          <span>채팅</span>
        </div>
        <div className="flex flex-1 cursor-pointer flex-col items-center justify-center">
          <div
            className="relative h-[1.5rem] w-[1.5rem]"
            onClick={() => {
              router.push("/my-page");
            }}
          >
            <Image
              src={`/images/assets/common/${!router.asPath.startsWith("my-page") ? "my-page-active" : "my-page"}.svg`}
              fill
              className="object-cover"
              alt="my-page"
            />
          </div>
          <span>마이페이지</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
