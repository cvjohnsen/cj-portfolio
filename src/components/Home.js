import CVJ from "../cvj.jpg";

const Home = () => {
  return (
    <div>
      <div style={img}>
        <img src={CVJ} width="300px" alt="" />
      </div>

      <div style={fonts}>
        <h1>Hello, I'm Cynthia V. Johnsen.</h1>
        <br />
        <h2>
          I'm a Software Engineer who specializes in front end development but
          not limited to.
        </h2>
      </div>
    </div>
  );
};

const fonts = {
  fontFamily: "Shadows Into Light Two",
  textAlign: "center",
};

const img = {
  margin: "50px",
  textAlign: "center",
};

export default Home;
