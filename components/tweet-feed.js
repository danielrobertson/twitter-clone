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
        <div key={idx} className="flex border p-5">
          <div className="pr-2">
            <img
              className="rounded-full"
              src={t.user.avatar}
              alt="picture"
            ></img>
          </div>
          <div className="flex flex-col">
            <div className="flex">
              <div className="p-1 font-semibold ">{t.user.name}</div>
              <div className="p-1 text-gray-600">{t.user.username}</div>
              <div className="p-1 text-gray-600">· {t.timestamp}</div>
            </div>
            <div className="p-1">{t.text}</div>
            <div className="flex pt-3">
              {[faComment, faRetweet, faHeart, faShareSquare].map((i, idx) => (
                <div key={idx} className="pr-16">
                  <FontAwesomeIcon className="w-2 text-gray-800" icon={i} />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
