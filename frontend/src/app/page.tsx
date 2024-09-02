import Navbar from "./Navbar";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
import Technologies from "./Technologies";
import Projects from "./Projects";
import Demo from "./Demo";
import Footer from "./Footer";

export default function Home() {
  return (
    <main className="w-screen bg-neutral-100 min-h-screen">
      <Navbar />
      <Hero />
      <AboutMe />
      <Technologies />
      <Projects />
      <Demo />
      <Footer />
    </main>
  );
}
