export const initialSmurfState = {
  smurfs: [],
  loading: false,
  message: "",
  error: "",
  editMode: false,
  editSmurf: {}
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
      };
    case "ADD_ERROR":
      return {
        ...state,
        loading: false,
        error: payload
      };
    case "EDIT_ON":
      return {
        ...state,
        loading: false,
        error: "",
        editMode: true,
        editSmurf: {...state.smurfs.filter(smurf => smurf.id === payload)[0]}
      };
    case "EDIT_SUCCESS":
      return {
        ...state,
        editMode: false,
        editSmurf: {},
        smurfs: payload
      };
    case "DELETE_SUCCESS":
      return {
        ...state,
        smurfs: payload
      };
    case "DELETE_ERROR":
      return {
        ...state,
        error: payload
      };
    default:
      return state;
  }
};
