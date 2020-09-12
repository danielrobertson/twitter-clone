import Nav from "../components/nav";
import CreateTweet from "../components/create-tweet";
import TweetFeed from "../components/tweet-feed";
import WhatsHappening from "../components/whats-happening";
import WhoToFollow from "../components/who-to-follow";

const { gql } = require("@apollo/client");
const { ApolloClient, InMemoryCache } = require("@apollo/client");

export default function IndexPage({ tweets, user }) {
  return (
    <div className="container mx-auto flex flex-row h-screen">
      <div className="flex-grow-0">
        <Nav />
      </div>
      <div className="flex-grow border">
        <h2 className="text-2xl font-bold p-3">Home</h2>
        <CreateTweet user={user} />
        <TweetFeed tweets={tweets} />
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

export async function getStaticProps() {
  const apolloClient = new ApolloClient({
    // todo env var this
    uri: "https://selected-spaniel-87.hasura.app/v1/graphql",
    cache: new InMemoryCache(),
  });

  const tweetsQueryResponse = await apolloClient.query({
    query: gql`
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
    `,
  });
  const tweets = tweetsQueryResponse.data.tweets;

  // todo integrate Auth0 to handle signed in user
  const mockSignedInUserResponse = await apolloClient.query({
    query: gql`
      query {
        users(where: { username: { _eq: "@dan" } }) {
          id
          first_name
          image_url
          username
        }
      }
    `,
  });
  const mockSignedInUser = mockSignedInUserResponse.data.users[0];

  return {
    props: { tweets, user: mockSignedInUser },
  };
}
