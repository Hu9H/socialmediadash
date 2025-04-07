import Background from "./components/background";
import Header from "./components/header";


export default function Home() {
  return (
    <div>
      <Background/>
      <Header/>
      <main className="min-h-screen w-full max-w-8xl px-5 pb-2 pt-10 md:px-8 mx-auto ">
      </main>
    </div>
  );
}
