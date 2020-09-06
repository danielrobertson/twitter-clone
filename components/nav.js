import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDove } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Nav() {
  const navigations = [
    { label: "Home", href: "/", icon: "" },
    { label: "Explore", href: "/", icon: "" },
    { label: "Notifications", href: "/", icon: "" },
    { label: "Messages", href: "/", icon: "" },
    { label: "Bookmarks", href: "/", icon: "" },
    { label: "Lists", href: "/", icon: "" },
    { label: "Profile", href: "/", icon: "" },
    { label: "More", href: "/", icon: "" },
  ];

  return (
    <nav>
      <FontAwesomeIcon
        className="text-5xl m-5 ml-8 text-blue-500"
        icon={faDove}
      />
      <ul className="justify-between items-center pl-12 p-">
        {navigations.map((n) => (
          <li className="text-xl py-1">
            <Link href={n.href}>
              <a className="font-semibold text-blue-500 no-underline">
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
