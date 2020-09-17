const { ApolloClient, InMemoryCache } = require("@apollo/client");

export const apolloClient = new ApolloClient({
  // todo env var this
  uri: "https://selected-spaniel-87.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
});
