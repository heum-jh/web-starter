import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

export default function useScrollRestoration() {
  const router = useRouter();
  const cacheScrollPositions = useRef<Array<[number, number]>>([]);
  const shouldScrollRestore = useRef<null | { x: number; y: number }>(null);

  useEffect(() => {
    window.history.scrollRestoration = "auto";

    router.beforePopState(() => {
      if (cacheScrollPositions.current.length > 0) {
        const scrollPosition = cacheScrollPositions.current.pop();
        if (scrollPosition) {
          shouldScrollRestore.current = {
            x: scrollPosition[0],
            y: scrollPosition[1],
          };
        }
      }
      window.history.scrollRestoration = "manual";
      return true;
    });

    const handleRouteChange = () => {
      cacheScrollPositions.current.push([window.scrollX, window.scrollY]);
    };

    const handleRouteChangeComplete = () => {
      if (shouldScrollRestore.current) {
        const { x, y } = shouldScrollRestore.current;
        window.scrollTo(x, y);
        shouldScrollRestore.current = null;
      }
      window.history.scrollRestoration = "auto";
    };

    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [router]);

  return null;
}
