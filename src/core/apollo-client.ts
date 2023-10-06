// import { ApolloClient, DefaultOptions, HttpLink, InMemoryCache, from } from "@apollo/client";
// import { onError } from "@apollo/client/link/error";
// import { isServerSide } from "./function/is-server-side";

// const SERVER_URL = new URL("/graphql", process.env.NEXT_PUBLIC_API_BASE_URL).href;

// const errorLink = onError(({ graphQLErrors, networkError }) => {
//   if (graphQLErrors) {
//     console.log("[graphQLErrors]", graphQLErrors);
//   }
//   if (networkError) {
//     console.log("[networkError]", networkError);
//   }
// });
// const httpLink = new HttpLink({
//   uri: SERVER_URL,
//   credentials: "same-origin",
// });
// const cache = new InMemoryCache({
//   typePolicies: {
//     Query: {
//       fields: {},
//     },
//   },
// });
// const defaultOptions: DefaultOptions = {
//   watchQuery: {
//     fetchPolicy: "no-cache",
//   },
//   query: {
//     fetchPolicy: "no-cache",
//   },
//   mutate: {
//     fetchPolicy: "no-cache",
//   },
// };
// export const client = new ApolloClient({
//   ssrMode: isServerSide(),
//   link: from([errorLink, httpLink]),
//   cache: cache,
//   defaultOptions: defaultOptions,
// });
