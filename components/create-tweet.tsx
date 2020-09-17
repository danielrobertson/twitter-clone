import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faChartBar,
  faSmile,
  faCalendar,
} from "@fortawesome/free-regular-svg-icons";
import { gql, useMutation } from "@apollo/client";

const CREATE_TWEET = gql`
  mutation($text: String!, $user_id: Int!) {
    insert_tweets_one(object: { text: $text, user_id: $user_id }) {
      id
    }
  }
`;

export default function CreateTweet({ user }) {
  const [tweet, setTweet] = useState("");
  const [createTweet, { data }] = useMutation(CREATE_TWEET);

  const submitTweet = async (e) => {
    e.preventDefault();

    // todo disable Submit button until there is content
    if (tweet == "") {
      return;
    }

    createTweet({ variables: { text: tweet, user_id: user.id } });
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
