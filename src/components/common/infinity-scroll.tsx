import { useRouter } from "next/router";
import { ReactNode, useEffect, useRef } from "react";
import useInfiniteScroll from "src/core/hooks/use-infinite-scroll";

interface InfiniteScrollProps {
  name: string;
  fetchMoreData: () => Promise<void>;
  hasNextPage?: boolean;
  isLoading: boolean;
  children: ReactNode;
  options?: IntersectionObserverInit;
}

const InfinityScroll = ({
  name,
  fetchMoreData,
  hasNextPage = false,
  isLoading,
  children,
  options,
}: InfiniteScrollProps) => {
  const router = useRouter();
  const infinityScrollRef = useRef<HTMLDivElement>(null);
  const [setObserverRef, isCurrentLoading] = useInfiniteScroll(async () => {
    if (hasNextPage && !isLoading && !isCurrentLoading) {
      await fetchMoreData();
    }
  }, options);

  useEffect(() => {
    const handleRouteChange = () => {
      window.sessionStorage.setItem(name, window.pageYOffset.toString());
    };
    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [name, router.events]);
  useEffect(() => {
    const scrollPosition = window.sessionStorage.getItem(name);
    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition, 10));
    }
  }, [name]);
  return (
    <>
      <div ref={infinityScrollRef}>{children}</div>
      {isCurrentLoading && (
        <div className="w-full">
          <div className="my-8 text-black">로딩중</div>
        </div>
      )}
      <div ref={setObserverRef} />
    </>
  );
};

export default InfinityScroll;
