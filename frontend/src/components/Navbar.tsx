import "./Navbar.css";
import Symbol from "./Symbol";

function Navbar() {
  return (
    <nav className="navbar">
      <button className="navbutton left"><Symbol>menu</Symbol></button>
      <button className="navbutton right"><Symbol>light_mode</Symbol></button>
    </nav>
  );
}

export default Navbar;