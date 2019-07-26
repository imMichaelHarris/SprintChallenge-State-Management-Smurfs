export const initialSmurfState = {
  smurfs: [],
  loading: false,
  message: "",
  error: ""
};
export const smurfReducer = (state, { type, payload }) => {
  switch (type) {
    case "FETCH_START":
      return {
        ...state,
        loading: true,
        message: "",
        error: ""
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        smurfs: payload,
        loading: false
      };
    case "FETCH_ERROR":
      return {
        ...state,
        loading: false,
        error: payload
      };
    case "ADD_START":
      return {
        ...state,
        loading: true
      };
      case "ADD_SUCCESS":
          return {
              ...state,
              loading: false,
              smurfs: payload,
              message: "Your smurf was added"
          }
    default:
      return state;
  }
};
