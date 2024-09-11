import "./AboutMe.scss";
import ContactMe from "../Shared/Button/Button";

export default function AboutMe() {
  return (
    <section className="about-me">
      <div className="about-row">
        <div className="about-box-normal about-box about-box-1">
          <div className="about-box-text">
            <h1 className="about-box-title">About Max Arnold</h1>
            <h2 className="about-box-subtitle">
              Hi, I'm Max Arnold, a recent high school graduate with a diploma
              from the TFO J. PH. Fallmerayer. My interest for Web Development
              was fostered, specifically in the 5th grade, where I got the
              opportunity to explore Web Development in greater Detail.
            </h2>
          </div>
          <img className="about-img" src="/About_Gradient_1.jpg"></img>
        </div>
      </div>
      <div className="about-row">
        <div className="about-box-big about-box about-box-2">
          <h1 className="about-box-title">Motivation & </h1>
          <h1 className="about-box-title">Passion</h1>
          <h2 className="about-box-subtitle about-box-subtitle-wide">
            I’m passionate about creating beautiful and functional User
            Interfaces. Web Development has given me the chance to bring my
            desires into reality.
          </h2>
        </div>
        <div className="about-box-normal about-box about-box-3">
          <h1 className="about-box-title">Let's Connect</h1>
          <ContactMe />
        </div>
      </div>
      <div className="about-row">
        <div className="about-box-normal about-box about-box-4"></div>
        <div className="about-box-normal about-box about-box-5">
          <h1 className="about-box-title">Interests</h1>
          <h2 className="about-box-subtitle about-box-subtitle-wide">
            I enjoy exploring and learning about various non Web Development
            related skills and topics, in my Free Time, which aids me in
            reaching the best possible result.
          </h2>
        </div>
      </div>
    </section>
  );
}
