import Image from "next/image";
import { useRouter } from "next/router";

const NavigationFooter = () => {
  const router = useRouter();
  return (
    <div className="fixed bottom-0 w-full bg-[#ffffff] pt-[2.2rem]">
      <div className="flex  flex-1 justify-evenly bg-[#ffffff] text-[1rem]/[2.4rem] font-medium text-[#4a5360]">
        <div className="flex cursor-pointer flex-col items-center justify-center">
          <div
            className="relative h-[2.4rem] w-[2.4rem]"
            onClick={() => {
              router.push("/home");
            }}
          >
            <Image
              src={`/images/assets/common/${router.asPath.startsWith("/home") ? "home-active" : "home"}.svg`}
              alt="home"
              fill
              className="object-cover"
            />
          </div>
          <span>모임</span>
        </div>
        <div className="flex cursor-pointer flex-col items-center justify-center">
          <div
            className="relative h-[2.4rem] w-[2.4rem]"
            onClick={() => {
              router.push("/article");
            }}
          >
            <Image
              src={`/images/assets/common/${router.asPath.startsWith("/article") ? "article-active" : "article"}.svg`}
              fill
              className="object-cover"
              alt="article"
            />
          </div>
          <span>아티클</span>
        </div>
        <div className="flex cursor-pointer flex-col items-center justify-center">
          <div
            className="relative h-[2.4rem] w-[2.4rem]"
            onClick={() => {
              router.push("/around-location");
            }}
          >
            <Image
              src={`/images/assets/common/${
                router.asPath.startsWith("/around-location") ? "around-location-active" : "around-location"
              }.svg`}
              fill
              className="object-cover"
              alt="around-location"
            />
          </div>
          <span>주변 탐색</span>
        </div>
        <div className="flex cursor-pointer flex-col items-center justify-center">
          <div
            className="relative h-[2.4rem] w-[2.4rem]"
            onClick={() => {
              router.push("/chatting");
            }}
          >
            <Image
              src={`/images/assets/common/${
                router.asPath.startsWith("/chatting") ? "chatting-active" : "chatting"
              }.svg`}
              fill
              className="object-cover"
              alt="chatting"
            />
          </div>
          <span>채팅</span>
        </div>
        <div className="flex cursor-pointer flex-col items-center justify-center">
          <div
            className="relative h-[2.4rem] w-[2.4rem]"
            onClick={() => {
              router.push("/my-page");
            }}
          >
            <Image
              src={`/images/assets/common/${router.asPath.startsWith("/my-page") ? "my-page-active" : "my-page"}.svg`}
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

export default NavigationFooter;
