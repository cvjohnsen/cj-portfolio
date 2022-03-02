import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div style={container}>
      <p>
        &copy; Copyright {new Date().getFullYear()} Cynthia V. Johnsen - All
        Rights Reserved
      </p>
    </div>
  );
};

const container = {
  // display: "flex",
  // justifyContent: "space-around",
  backgroundColor: "#BCABAE",
  color: "white",
  height: "40px",
  marginTop: "300px",
  fontFamily: "Shadows Into Light Two",
};

export default Footer;
