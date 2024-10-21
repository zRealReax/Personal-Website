import "./Hero.scss";
import Button from "../Shared/Button/Button";

export default function Hero() {
  return (
    <section className="hero-container" id="home">
      <div className="hero-content">
        <div>
          {/* <img
            src="/Highlight_Tape.png"
            alt=""
            className="hero-title-highlight"
          /> */}
          <h1 className="hero-title">
            Hi! I’m <span className="hero-title-highlight">Max Arnold</span>, a
          </h1>
          <h1 className="hero-title">Web Developer</h1>
          <h2 className="hero-subtitle">
            Focused on crafting Beautiful, Intuitive and Pleasant Digital
            Interfaces
          </h2>
        </div>
        <Button />
      </div>
      <div className="hero-image">
        <div className="hero-image-img">
          <img className="hero-image-img" src="/Hero_Image_Downscaled.webp" />
        </div>
      </div>
    </section>
  );
}
