import { Link } from "react-router-dom";
import logo from "../web_logo.png";

const NavBar = () => {
  return (
    <nav style={container}>
      <div>
        <Link to="/">
          <img src={logo} width="65px" alt="" />
        </Link>
      </div>

      <Link to="/" style={{ color: "#0F0F0F" }}>
        Home
      </Link>

      <Link to="/about" style={{ color: "#0F0F0F" }}>
        About
      </Link>

      <Link to="/resume" style={{ color: "#0F0F0F" }}>
        Resume
      </Link>

      <Link to="/projects" style={{ color: "#0F0F0F" }}>
        Projects
      </Link>
    </nav>
  );
};

const container = {
  display: "flex",
  justifyContent: "space-around",
  backgroundColor: "#BCABAE",
  color: "white",
  height: "40px",
  fontFamily: "Shadows Into Light Two",

};

export default NavBar;
