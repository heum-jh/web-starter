import { useCallback, useEffect, useRef, useState } from "react";
import Alert from "../function/alert";
export type IntersectHandler = () => void;
const useInfiniteScroll = (onIntersect: IntersectHandler, options?: IntersectionObserverInit) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const callback = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      setIsLoading(true);
      try {
        entries.forEach(entry => {
          if (entry.isIntersecting && !isLoading) {
            observer.unobserve(entry.target);
            onIntersect();
          }
        });
      } catch (err) {
        Alert.alert("데이터를 불러올 수 없습니다.");
      }
      setIsLoading(false);
    },
    [onIntersect, isLoading],
  );

  useEffect(() => {
    if (ref.current === null) return;
    const initPptions: IntersectionObserverInit = options
      ? options
      : {
          root: null,
          rootMargin: "0px",
          threshold: 0.5,
        };
    const observer = new IntersectionObserver(callback, initPptions);
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
      setIsLoading(false);
    };
  }, [ref, options, callback]);
  return [ref, isLoading] as const;
};

export default useInfiniteScroll;
