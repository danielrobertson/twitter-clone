import { useState } from "react";

export default function CreateTweet() {
  const [tweet, setTweet] = useState("");
  const subscribe = async (e) => {
    console.log(tweet);
    e.preventDefault();
  };

  return (
    <form className="border p-2">
      <textarea
        className="w-full text-lg outline-none focus:shadow-outline my-3"
        type="text"
        placeholder="What's happening?"
        value={tweet}
        onChange={(e) => setTweet(e.target.value)}
      ></textarea>
      <br className="border-1" />
      <div className="flex justify-end pr-2">
        <button
          className="w-20 bg-blue-500 hover:bg-blue-700 duration-300 font-semibold text-white shadow p-2 rounded-full"
          type="submit"
          onClick={subscribe}
        >
          Tweet
        </button>
      </div>
    </form>
  );
}
