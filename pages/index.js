import Nav from "../components/nav";
import CreateTweet from "../components/create-tweet";
import TweetFeed from "../components/tweet-feed";
import WhatsHappening from "../components/whats-happening";
import WhoToFollow from "../components/who-to-follow";

export default function IndexPage({ tweets }) {
  return (
    <div className="container mx-auto flex flex-row h-screen">
      <div className="flex-grow-0">
        <Nav />
      </div>
      <div className="flex-grow border">
        <h2 className="text-2xl font-bold p-3">Home</h2>
        <CreateTweet />
        <TweetFeed tweets={tweets} />
      </div>
      <div className="flex-grow-0">
        <WhatsHappening />
        <WhoToFollow />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://randomuser.me/api/?results=3");
  const users = await response.json();

  const tweets = [
    {
      user: {
        name: users.results[0].name.first,
        username: `@${users.results[0].name.first}`,
        avatar: users.results[0].picture.thumbnail,
      },
      text: "They threw the ball! 🏈 #sports ",
      timestamp: "Just now",
    },
    {
      user: {
        name: users.results[1].name.first,
        username: `@${users.results[1].name.first}`,
        avatar: users.results[1].picture.thumbnail,
      },
      text: "What year is it",
      timestamp: "20m",
    },
    {
      user: {
        name: users.results[2].name.first,
        username: `@${users.results[2].name.first}`,
        avatar: users.results[2].picture.thumbnail,
      },
      text: "Tweety mctweetface",
      timestamp: "1h",
    },
  ];
  return {
    props: { tweets },
  };
}
