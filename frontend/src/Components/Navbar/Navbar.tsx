import "./Navbar.scss";
import NavigationItems from "./NavigationItems";
import ThemeSwitch from "./ThemeSwitch";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="icon">M</h1>
      <NavigationItems />
      <ThemeSwitch />
    </nav>
  );
}
