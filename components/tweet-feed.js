import { useState } from "react";

export default function TweetFeed({ tweet }) {
  const [tweets, setTweets] = useState([
    "They threw the ball! 🏈 #sports ",
    "What year is it",
    "Tweety mctweetface",
  ]);

  return (
    <div>
      {tweets.map((t) => (
        <div key={t} className="border p-5">
          {t}
        </div>
      ))}
    </div>
  );
}
