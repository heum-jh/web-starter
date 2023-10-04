const processGetQueryString = (queryStringValue: string | string[] | undefined): string | undefined => {
  if (queryStringValue === undefined) return queryStringValue;
  if (typeof queryStringValue === "object") {
    return processGetQueryString(queryStringValue.toString());
  }
  const decodedQueryString = decodeURIComponent(queryStringValue);
  const trimmedQueryString = decodedQueryString.trim();
  return trimmedQueryString;
};
const processSetQueryString = (value: string): string => {
  const trimmedQueryString = value.trim();
  const encodedQueryString = encodeURIComponent(trimmedQueryString);
  return encodedQueryString;
};

export { processGetQueryString, processSetQueryString };
