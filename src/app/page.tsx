
import Background from "./components/background";
import Header from "./components/header";
import MediaCard from "./components/mediaCard";
import { socialMediaAccounts } from "./data";


export default function Home() {
  return (
    <div>
      <Background/>
      <main className="min-h-screen w-full max-w-8xl px-5 pb-2 pt-10 md:px-8 mx-auto ">
        <Header/>
        <section className="mt-5 flex flex-row justify-between gap-5">
        {socialMediaAccounts.map((d,i) => (
          <MediaCard
            key={i}
            platform={d.platform}
            username={d.username}
            followers={d.followers}
            changeToday={d.changeToday}
            type={d.type}
            updown={d.updown}
            icon={d.icon}
            color={d.color}
          
          />
        ))}
        </section>
      </main>
    </div>
  );
}
