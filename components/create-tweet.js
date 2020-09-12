import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faChartBar,
  faSmile,
  faCalendar,
} from "@fortawesome/free-regular-svg-icons";
const { gql } = require("@apollo/client");
const { ApolloClient, InMemoryCache } = require("@apollo/client");

export default function CreateTweet({ user }) {
  const [tweet, setTweet] = useState("");
  const submitTweet = async (e) => {
    e.preventDefault();
    const submittedTweet = {
      text: tweet,
      user_id: user.id,
    };
    const user_id = user.id;
    console.log(submittedTweet);

    // todo use useMutation hook and consolidate Hasura network connections
    const apolloClient = new ApolloClient({
      uri: "https://selected-spaniel-87.hasura.app/v1/graphql",
      cache: new InMemoryCache(),
    });

    const submitTweetResponse = await apolloClient.mutate({
      mutation: gql`
        mutation($text: String!, $user_id: Int!) {
          insert_tweets_one(object: { text: $text, user_id: $user_id }) {
            id
          }
        }
      `,
      variables: {
        text: tweet,
        user_id: user_id,
      },
    });

    setTweet("");
  };

  return (
    <form className="flex border p-2">
      <div className="pl-1 pt-1 pr-4">
        <img className="rounded-full" src={user.image_url} alt="picture"></img>
      </div>
      <div className="flex-grow">
        <textarea
          className="w-full text-lg outline-none placeholder-gray-600 focus:shadow-outline mt-3 border-b-2"
          type="text"
          placeholder="What's happening?"
          value={tweet}
          onChange={(e) => setTweet(e.target.value)}
        ></textarea>
        <div className="flex justify-between pr-2 py-1">
          <div className="flex pt-3">
            {[faImage, faChartBar, faSmile, faCalendar].map((i, idx) => (
              <div key={idx} className="pr-5">
                <FontAwesomeIcon
                  className="w-2 text-xl  text-blue-500"
                  icon={i}
                />
              </div>
            ))}
          </div>
          <button
            className="w-20 bg-blue-500 hover:bg-blue-700 duration-300 font-semibold text-white shadow p-2 rounded-full"
            type="submit"
            onClick={submitTweet}
          >
            Tweet
          </button>
        </div>
      </div>
    </form>
  );
}
