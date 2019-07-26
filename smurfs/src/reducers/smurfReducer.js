export const initialSmurfState = {
  smurfs: [],
  loading: false,
  error: ""
};
export const smurfReducer = (state, { type, payload }) => {
  switch (type) {
    case "FETCH_START":
      return {
        ...state,
        loading: true,
        error: ""
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        smurfs: payload,
        loading: false
      };
    default:
      return state;
  }
};
