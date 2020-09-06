import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDove,
  faHome,
  faHashtag,
  faBell,
  faEnvelope,
  faBookmark,
  faListAlt,
  faUser,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Nav() {
  const navigations = [
    { label: "Home", href: "/", icon: faHome },
    { label: "Explore", href: "/", icon: faHashtag },
    { label: "Notifications", href: "/", icon: faBell },
    { label: "Messages", href: "/", icon: faEnvelope },
    { label: "Bookmarks", href: "/", icon: faBookmark },
    { label: "Lists", href: "/", icon: faListAlt },
    { label: "Profile", href: "/", icon: faUser },
    { label: "More", href: "/", icon: faEllipsisH },
  ];

  return (
    <nav>
      <FontAwesomeIcon
        className="text-3xl m-5 ml-12 text-gray-700"
        icon={faDove}
      />
      <ul className="justify-between items-center pl-12 p-">
        {navigations.map((n) => (
          <li key={n.label} className="flex text-xl py-1">
            <div className="w-5">
              <FontAwesomeIcon
                className="text-gray-700 text-2xl"
                icon={n.icon}
              />
            </div>
            <Link href={n.href}>
              <a className="pl-4 font-semibold text-gray-700 no-underline">
                {n.label}
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <div className="my-5 pl-10 pr-8">
        <button
          className="w-48 bg-blue-500 hover:bg-blue-700 duration-300 font-semibold text-white shadow py-3 rounded-full"
          type="submit"
        >
          Tweet
        </button>
      </div>
    </nav>
  );
}
