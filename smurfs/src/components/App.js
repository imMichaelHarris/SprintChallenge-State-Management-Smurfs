import React, { useEffect, useReducer } from "react";
import { SmurfProvider } from "../contexts/SmurfContext";
import { initialSmurfState, smurfReducer } from "../reducers/smurfReducer";
import { myAxios } from "../myAxios";
import "./App.css";

const App = () => {
  const [state, dispatch] = useReducer(smurfReducer, initialSmurfState);

  const getSmurfs = () => {
    dispatch({ type: "FETCH_START" });
    myAxios
      .get("/smufs")
      .then(res => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
        console.log(res);
      })
      .catch(err => {
        console.log(err.response);
        dispatch({ type: "FETCH_ERROR", payload: err.response.data });
      });
  };

  useEffect(() => {
    getSmurfs();
  }, []);
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>

      <SmurfProvider value={state.smurfs} />
    </div>
  );
};

export default App;
