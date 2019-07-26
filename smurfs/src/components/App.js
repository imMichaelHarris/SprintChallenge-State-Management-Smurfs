import React, { useEffect, useReducer } from "react";
import { SmurfProvider } from "../contexts/SmurfContext";
import {initialSmurfState, smurfReducer} from '../reducers/smurfReducer'
import {myAxios} from '../myAxios';
import "./App.css";

const App = () => {
  const [state, dispatch] = useReducer(smurfReducer, initialSmurfState);

  const getSmurfs = () => {
    dispatch({type: "FETCH_START"})
    myAxios.get('/smurfs').then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err.response)
    })
  }

  useEffect(() => {

  }, [])
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>

      <SmurfProvider value={state.smurfs}>

      </SmurfProvider>
    </div>
  );
};

export default App;
