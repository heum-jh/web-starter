import { useEffect, useRef, useState } from "react";
const useIsVisible = (options?: IntersectionObserverInit, initialVisible?: boolean) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(initialVisible ?? false);
  useEffect(() => {
    if (targetRef.current === null) return;
    const initPptions: IntersectionObserverInit = options
      ? options
      : {
          root: null,
          rootMargin: "0px",
          threshold: 0,
        };
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        setIsVisible(entry.isIntersecting);
      });
    }, initPptions);
    observer.observe(targetRef.current);

    return () => {
      observer.disconnect();
    };
  }, [targetRef, options]);

  return [targetRef, isVisible] as const;
};

export default useIsVisible;
