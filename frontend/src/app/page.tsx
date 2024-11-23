import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import AboutMe from "../Components/AboutMe/AboutMe";
import Technologies from "../Components/Technologies/Technologies";
import Projects from "../Components/Projects/Projects";
import Footer from "../Components/Footer/Footer";

export default function Home() {
  return (
    <main className="w-screen overflow-x-hidden pt-24 flex flex-col items-center text-black bg-neutral-100 min-h-screen">
      <Navbar />
      <Hero />
      <AboutMe />
      <Technologies />
      <Projects />
      <Footer />
      {/* <div className="h-screen my-96">dsfds</div> */}
    </main>
  );
}
