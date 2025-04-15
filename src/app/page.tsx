
import Background from "./components/background";
import Header from "./components/header";
import MediaCard from "./components/mediaCard";
import { overviewTodayData, socialMediaAccounts } from "./data";
import Container from './components/container';
import Overviewtoday from "./components/overviewtoday";


export default function Home() {
  return (
    <div>
      <Background/>
      <main className="min-h-screen w-full max-w-8xl px-5 pb-2 pt-10 md:px-8 mx-auto ">
        <Header/>
        <Container>
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
        </Container>
        <section className="">
        <h2 className="mb-8 mt-4 text-center text-2xl font-semibold text-Dark-Grayish-Blue dark:text-White sm:text-start">
          Overview - Today
        </h2>
        </section>
        <Container>
          {overviewTodayData.map((d,i)=>(
            <Overviewtoday
            key={i}
            platform= {d.platform}
            type={d.type}
            icon={d.icon}
            value= {d.value}
            percentage={d.percentage}
    
            />
          ))}
        </Container>
      </main>
    </div>
  );
}
