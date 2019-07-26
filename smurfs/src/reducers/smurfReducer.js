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
          }
    default:
      return state;
  }
};
