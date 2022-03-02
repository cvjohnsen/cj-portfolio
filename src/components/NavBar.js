import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav style={container}>
      {/* <div>
        <Link to="/">
          <img src={logo} width="40px" alt="" />
        </Link>
      </div> */}

      <Link to="/" style={{ color: "white" }}>
        Home
      </Link>
      <Link to="/affirmation" style={{ color: "white" }}>
        Resume
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
