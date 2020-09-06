import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faHeart,
  faShareSquare,
} from "@fortawesome/free-regular-svg-icons";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";

export default function TweetFeed() {
  const [tweets, setTweets] = useState([
    "They threw the ball! 🏈 #sports ",
    "What year is it",
    "Tweety mctweetface",
  ]);

  const tweetIcon = (icon) => {
    return (
      <div key={icon} className="pr-16">
        <FontAwesomeIcon className="w-2 text-gray-800" icon={icon} />
      </div>
    );
  };

  return (
    <div>
      {tweets.map((t) => (
        <div key={t} className="border p-5">
          {t}
          <div className="flex pt-3">
            {[faComment, faRetweet, faHeart, faShareSquare].map((i) =>
              tweetIcon(i)
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
