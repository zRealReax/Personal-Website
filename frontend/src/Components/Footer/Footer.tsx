import "./Footer.scss";
import Link from "next/link";

export default function Footer() {
  return (
    <section id="contact" className="footer">
      <h1 className="footer-text">Contact Me!</h1>
      <div className="footer-contacts">
        <a href="https://github.com/zRealReax" target="_blank">
          <img src="/github-brands-solid.svg" alt="" />
        </a>
        <img src="/envelope-solid.svg" alt="" />
        {/* <a href="mailto:aarnold.max@gmail.com" type="mail">
        </a>
        <a href="tel:+39 334 366789" type="phone">
        </a> */}
        <img src="/phone-solid.svg" alt="" />
      </div>
      <div className="footer-copyright">
        <p>@2024 Max Arnold</p>
        <p>Designed by Max Arnold</p>
      </div>
    </section>
  );
}
