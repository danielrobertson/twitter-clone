import Nav from "../components/nav";
import CreateTweet from "../components/create-tweet";
import TweetFeed from "../components/tweet-feed";
import WhatsHappening from "../components/whats-happening";
import WhoToFollow from "../components/who-to-follow";

export default function IndexPage() {
  return (
    <div className="container mx-auto flex flex-row h-screen">
      <div className="flex-grow-0">
        <Nav />
      </div>
      <div className="flex-grow border">
        <h2 className="text-2xl font-bold p-3">Home</h2>
        <CreateTweet />
        <TweetFeed />
      </div>
      <div className="flex-grow-0">
        <WhatsHappening />
        <WhoToFollow />
      </div>
    </div>
  );
}
