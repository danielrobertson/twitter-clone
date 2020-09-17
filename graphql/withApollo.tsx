import withApollo from "next-with-apollo";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { WebSocketLink } from "@apollo/client/link/ws";

export default withApollo(
  ({ initialState }) => {
    return new ApolloClient({
      uri: "https://selected-spaniel-87.hasura.app/v1/graphql",
      cache: new InMemoryCache().restore(initialState || {}),
    });
  },
  {
    render: ({ Page, props }) => {
      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} />
        </ApolloProvider>
      );
    },
  }
);
