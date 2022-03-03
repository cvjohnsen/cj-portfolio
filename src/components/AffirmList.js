import { connect } from "react-redux";
import { fetchAffirm } from "../actions/actions";
import Quotes from "./Quotes";

const mapStateToProps = (state) => ({
  affirmation: state.affirmation,
  isLoading: state.isLoading,
  error: state.error,
});

export default connect(mapStateToProps, { fetchAffirm })(AffirmList);
