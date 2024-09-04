export default function NavigationItems() {
  return (
    <div className="navigation-items">
      <input type="radio" id="Home" name="color" value="Home" />
      <label className="text" htmlFor="Home">
        Home
      </label>

      <input type="radio" id="About Me" name="color" value="About Me" />
      <label className="text" htmlFor="About Me">
        About Me
      </label>

      <input type="radio" id="Skills" name="color" value="Skills" />
      <label className="text" htmlFor="Skills">
        Skills
      </label>

      <input type="radio" id="Projects" name="color" value="Projects" />
      <label className="text" htmlFor="Projects">
        Projects
      </label>

      <input type="radio" id="Contact" name="color" value="Contact" />
      <label className="text" htmlFor="Contact">
        Contact
      </label>

      <div className="selector"></div>
    </div>
  );
}
