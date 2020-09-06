import { useState } from "react";

export default function TweetFeed() {
  const [happenings, setHappenings] = useState([
    {
      topic: "Politics",
      text: "Multiple boats sink during Trump Boat Parade on Lake Travis ",
      statistics: "#LakeTravis",
    },
    { topic: "Trending", text: "Dumbkirk", statistics: "#LakeTravis" },
    {
      topic: "#BoatersForTrump",
      text: "Antifa Navy ⚓️",
      statistics: "19.7K Tweets",
    },
  ]);

  return (
    <div className="border rounded-lg my-3 mx-6">
      <h2 className="text-2xl font-bold px-3 py-3">What's happening</h2>
      {happenings.map((t) => (
        <div key={t.text} className="border p-5">
          <div className="text-gray-600">{t.topic}</div>
          <div className="font-semibold w-64">{t.text}</div>
          <div className="text-gray-600">{t.statistics}</div>
        </div>
      ))}
    </div>
  );
}
