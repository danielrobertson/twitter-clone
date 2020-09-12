import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faHeart,
  faShareSquare,
} from "@fortawesome/free-regular-svg-icons";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";

export default function TweetFeed({ tweets }) {
  return (
    <div>
      {tweets.map((t, idx) => (
        <div key={idx} className="flex border p-4">
          <div className="pr-2">
            <img
              className="rounded-full"
              src={t.user.image_url}
              alt="picture"
            ></img>
          </div>
          <div className="flex flex-col">
            <div className="flex">
              <div className="p-1 font-semibold ">{t.user.first_name}</div>
              <div className="p-1 text-gray-600">{t.user.username}</div>
              <div className="p-1 text-gray-600">· {t.created_at}</div>
            </div>
            <div className="p-1">{t.text}</div>
            <div className="flex pt-2">
              {[
                {
                  icon: faComment,
                  count: t.comment_count,
                },
                {
                  icon: faRetweet,
                  count: t.retweet_count,
                },
                {
                  icon: faHeart,
                  count: t.like_count,
                },
                {
                  icon: faShareSquare,
                },
              ].map((tweetData, idx) => (
                <div key={idx} className="pr-12 text-gray-700">
                  <FontAwesomeIcon className="w-2" icon={tweetData.icon} />
                  <span className="pl-3">
                    {tweetData.count && tweetData.count}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
