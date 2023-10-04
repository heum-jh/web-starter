/**
 * 서버사이드에서 동작하고 있는지 확인합니다.
 * @returns 서버사이드 여부
 */
export const isServerSide = () => {
  return typeof window === "undefined";
};
