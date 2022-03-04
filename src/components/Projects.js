import game from "../memory_game.png";
const Projects = () => {
  return (
    <div style={box1}>
      <div>
        <h1>Javascript Project</h1>
        <a
          href="https://dazzling-kare-5bcc4b.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={game} alt="memoryGame" width="500px" />
        </a>
      </div>
      <div>
        <h1>React Project</h1>
        <a
          href="https://dazzling-kare-5bcc4b.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={game} alt="memoryGame" width="500px" />
        </a>
      </div>
    </div>
  );
};

const box1 = {
  display: "flex",
  justifyContent: "space-around",
  height: "600px",
  fontFamily: "Shadows Into Light Two",
  textAlign: "center",
};

export default Projects;
