import CVJ from "../cvj.jpg";

const Home = () => {
  return (
    <div style={body}>
      <div style={img}>
        <img src={CVJ} width="300px" alt="" />
      </div>

      <div style={fonts}>
        <h1>Hello, welcome to my portfolio site.</h1>
        <br />
        <p className="intro">
          I'm Cynthia V. Johnsen, I'm a Software Engineer <br />
          who specializes in front end development but not limited to.
        </p>
        <br />
        <br />
        <h2>Food for brain:</h2>
      </div>
    </div>
  );
};

const body = {
  display: "flex",
  justifyContent: "space-around",
  margin: "50px",
};

const fonts = {
  fontFamily: "Shadows Into Light Two",
  textAlign: "center",
};

const img = {
  margin: "5px",
  textAlign: "center",
};

export default Home;
