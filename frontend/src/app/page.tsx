import Navbar from "./Navbar";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
import Technologies from "./Technologies";
import Projects from "./Projects";
import Demo from "./Demo";
import Footer from "./Footer";

export default function Home() {
  return (
    <main className="w-screen pt-24 flex flex-col items-center text-black bg-neutral-100 min-h-screen">
      <img
        src="https://images.nationalgeographic.org/image/upload/v1638892272/EducationHub/photos/hoh-river-valley.jpg"
        alt=""
      />
      <Navbar />
      <Hero />
      <AboutMe />
      <Technologies />
      <Projects />
      <Demo />
      <Footer />
      <div className="h-screen my-96">dsfds</div>
    </main>
  );
}
