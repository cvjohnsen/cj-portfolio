import resume from "../cvj_resume.png";

const Resume = () => {
  return (
    <div style={align}>
      <img src={resume} width="650px" alt="" />
    </div>
  );
};

const align = {
  textAlign: "center",
  marginTop: "20px",
  height: "550px",
};

export default Resume;
