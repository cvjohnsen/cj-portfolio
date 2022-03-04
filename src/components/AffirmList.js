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
  const { fetchAffirm, isLoading, affirmation, error } = props;
  useEffect(() => {
    fetchAffirm();
  }, [fetchAffirm]);
  console.log(props);

  return (
    <div>
      {isLoading ? "LOADING AFFIRMATION" : ""}
      {error ? props.error : ""}
      {affirmation ? <Quotes quote={affirmation} key={affirmation.id} /> : ""}
    </div>
  );
}

export default connect(mapStateToProps, { fetchAffirm })(AffirmList);
