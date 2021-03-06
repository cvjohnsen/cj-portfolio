import {
  FETCH_AFFIRM_START,
  FETCH_AFFIRM_SUCCEED,
  FETCH_AFFIRM_FAIL,
} from "../actions/actions";

let initialState = {
  affirmation: "",
  isLoading: false,
  error: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_AFFIRM_START:
      return {
        ...state,
        affirmation: "",
        isLoading: true,
      };
    case FETCH_AFFIRM_SUCCEED:
      return {
        ...state,
        isLoading: false,
        affirmation: action.payload,
        error: "",
      };
    case FETCH_AFFIRM_FAIL:
      return {
        ...state.isLoading,
        isLoading: false,
        ...state.error,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
