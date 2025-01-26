import Background from "../components/Backgorund";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <main className="">
      <Background />
      <div className=" px-3 md:px-20 lg:px-52">
        <Navbar />
        <Hero />
      </div>
    </main>
  );
}
