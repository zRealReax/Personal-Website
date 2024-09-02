import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="icon">M</h1>
      <div className="navigation-items">
        {/* <button className="text">Home</button>
        <button className="text">About Me</button>
        <button className="text">Technologies</button>
        <button className="text">Projects</button>
        <button className="text">Contact</button> */}

        <input type="radio" id="Home" name="color" value="Home" />
        <label className="text" htmlFor="Home">
          Home
        </label>

        <input type="radio" id="About Me" name="color" value="About Me" />
        <label className="text" htmlFor="About Me">
          About Me
        </label>

        <input
          type="radio"
          id="Technologies"
          name="color"
          value="Technologies"
        />
        <label className="text" htmlFor="Technologies">
          Technologies
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
      <h1 className="switch">☀️</h1>
    </nav>
  );
}
