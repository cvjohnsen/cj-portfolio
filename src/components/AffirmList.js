import { connect } from "react-redux";
import { fetchAffirm } from "../actions/actions";
import Quotes from "./Quotes";
import { useEffect } from "react";

const mapStateToProps = (state) => ({
  affirmation: state.affirmation,
  isLoading: state.isLoading,
  error: state.error,
});

function AffirmList(props) {
  useEffect(() => {
    props.fetchAffirm();
  }, []);
  console.log(props);

  return (
    <div>
      {props.isLoading ? "LOADING AFFIRMATION" : ""}
      {props.error ? props.error : ""}
      {props.affirmation ? (
        <Quotes quote={props.affirmation} key={props.affirmation.id} />
      ) : (
        ""
      )}
    </div>
  );
}

export default connect(mapStateToProps, { fetchAffirm })(AffirmList);
