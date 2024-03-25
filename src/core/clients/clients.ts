import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const httpLink = new HttpLink({
  uri: import.meta.env.VITE_CONTENT_API_URL,
  headers: {
    "x-api-key": import.meta.env.VITE_SECRET_KEY,
  },
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
