import axios from "axios";

export const FETCH_AFFIRM_START = "FETCH_AFFIRM_START";
export const FETCH_AFFIRM_SUCCEED = "FETCH_AFFIRM_SUCCEED";
export const FETCH_AFFIRM_FAIL = "FETCH_AFFIRM_FAIL";

export const fetchAffirm = () => async (dispatch) => {
  dispatch({ type: FETCH_AFFIRM_START });

  try {
    const data = await axios.get(
      "https://dulce-affirmations-api.herokuapp.com/affirmation"
    );
    dispatch({ type: FETCH_AFFIRM_SUCCEED, payload: data.data[0].phrase });
  } catch (err) {
    dispatch({ type: FETCH_AFFIRM_FAIL, payload: err.message });
  }
};
