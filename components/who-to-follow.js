import { useState } from "react";

export default function WhoToFollow() {
  const [whoToFollowList, setWhoToFollowList] = useState([
    {
      avatar: "",
      name: "Alexa🤖",
      username: "@alexa99",
    },
    { avatar: "", name: "ninki minjaj", username: "@hunter" },
    {
      avatar: "",
      name: "kat Maddox",
      username: "@ctrlshifti",
    },
  ]);

  return (
    <div className="border rounded-lg my-3 mx-6">
      <h2 className="text-2xl font-bold px-3 py-3">Who to follow</h2>
      {whoToFollowList.map((t) => (
        <div key={t.name} className="border p-5">
          <div className="font-semibold w-64">{t.name}</div>
          <div className="text-gray-600">{t.username}</div>
        </div>
      ))}
    </div>
  );
}
