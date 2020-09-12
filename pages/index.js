const { gql } = require("@apollo/client");
import { useQuery } from "@apollo/react-hooks";

import withApollo from "../graphql/withApollo";
// import { apolloClient } from "../graphql/apollo";
import Nav from "../components/nav";
import CreateTweet from "../components/create-tweet";
import TweetFeed from "../components/tweet-feed";
import WhatsHappening from "../components/whats-happening";
import WhoToFollow from "../components/who-to-follow";

const FETCH_TWEETS_QUERY = gql`
  query {
    tweets(order_by: { created_at: desc }) {
      text
      retweet_count
      like_count
      comment_count
      created_at
      user {
        first_name
        image_url
        username
      }
    }
  }
`;
const FETCH_MOCK_SIGNED_IN_USER_QUERY = gql`
  query {
    users(where: { username: { _eq: "@fab" } }) {
      id
      first_name
      image_url
      username
    }
  }
`;

function IndexPage() {
  const { loading: tweetsLoading, data: tweetsResponse } = useQuery(
    FETCH_TWEETS_QUERY
  );
  const { loading: userLoading, data: signedInUserResponse } = useQuery(
    FETCH_MOCK_SIGNED_IN_USER_QUERY
  );

  return (
    <div className="container mx-auto flex flex-row h-screen">
      <div className="flex-grow-0">
        <Nav />
      </div>
      <div className="flex-grow border">
        <h2 className="text-2xl font-bold p-3">Home</h2>
        {/* Todo create gray outline placeholders while loading to avoid cumulative layout shift */}
        {signedInUserResponse && (
          <CreateTweet user={signedInUserResponse.users[0]} />
        )}
        {tweetsResponse && <TweetFeed tweets={tweetsResponse.tweets} />}
      </div>
      <div className="flex-grow-0">
        <form className="mx-6 my-4">
          <input
            className="rounded-full placeholder-gray-600 w-full bg-gray-300 px-4 py-2"
            placeholder="Search twitter"
          />
        </form>
        <WhatsHappening />
        <WhoToFollow />
      </div>
    </div>
  );
}

export default withApollo(IndexPage);

// export async function getStaticProps() {
//   const tweetsQueryResponse = await apolloClient.query({
//     query: gql`
//       query {
//         tweets(order_by: { created_at: desc }) {
//           text
//           retweet_count
//           like_count
//           comment_count
//           created_at
//           user {
//             first_name
//             image_url
//             username
//           }
//         }
//       }
//     `,
//   });
//   const tweets = tweetsQueryResponse.data.tweets;

//   // todo integrate Auth0 to handle signed in user
// const mockSignedInUserResponse = await apolloClient.query({
//   query: gql`
//     query {
//       users(where: { username: { _eq: "@fab" } }) {
//         id
//         first_name
//         image_url
//         username
//       }
//     }
//   `,
// });
//   const mockSignedInUser = mockSignedInUserResponse.data.users[0];

//   return {
//     props: { tweets, user: mockSignedInUser },
//   };
// }
