import { useRouter } from "next/router";
import { useEffect, useState } from "react";
interface IPaginationProps {
  viewPageRange?: number;
  totalCount?: number;
  offset?: number;
}
export default function usePagination({ viewPageRange = 5, totalCount = 0, offset = 0 }: IPaginationProps) {
  const router = useRouter();
  const [currentTotalCount, setCurrentTotalCount] = useState(totalCount);
  const [currentOffset, setCurrentOffset] = useState(offset);

  const currentPage = parseInt(router.query.page as string, 10) || 1;
  const totalPages = Math.ceil(currentTotalCount / currentOffset);
  const prevPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };
  const nextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };
  const handleFirstClick = () => {
    handlePageChange(1);
  };
  const handleLastClick = () => {
    handlePageChange(totalPages);
  };
  const handlePageChange = async (page: number) => {
    const regex = /\[([^)]+)\]/g;
    const key = regex.exec(router.pathname);
    if (key) {
      let value: string | string[] | undefined;
      if (key) {
        value = router.query[key[1]];
        const path = router.pathname.replace(regex, "");
        router.push({
          pathname: `${path}${value}`,
          query: { ...router.query, page: page.toString() },
        });
      }
      return;
    }
    router.push({
      pathname: router.pathname,
      query: { ...router.query, page: page.toString() },
    });
  };
  const pageRange = (): number[] => {
    const start = Math.floor((currentPage - 1) / viewPageRange) * viewPageRange + 1;
    const end = Math.min(start + (viewPageRange - 1), totalPages);
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };
  useEffect(() => {
    setCurrentTotalCount(totalCount);
    setCurrentOffset(offset);
  }, [totalCount, offset]);

  return { prevPage, nextPage, handleFirstClick, handleLastClick, handlePageChange, pageRange };
}
