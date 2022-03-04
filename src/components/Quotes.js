import { connect } from "react-redux";

const Quotes = (props) => {
  return (
    <div>
      <h2>Food for the brain:</h2>
      <h3>"{props.quote} "</h3>
    </div>
  );
};

export default connect(null)(Quotes);
