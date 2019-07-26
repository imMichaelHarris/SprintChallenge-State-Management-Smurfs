import React, { useEffect, useReducer } from "react";
import { SmurfProvider } from "../contexts/SmurfContext";
import {initialSmurfState, smurfReducer} from '../reducers/smurfReducer'
import {myAxios} from '../myAxios';
import SmurfList from "../views/SmurfList";
import "./App.css";
import SmurfForm from "./SmurfForm";

const App = () => {
  const [state, dispatch] = useReducer(smurfReducer, initialSmurfState);

  const getSmurfs = () => {
    dispatch({type: "FETCH_START"})
    myAxios.get('/smurfs').then(res => {
      dispatch({type: "FETCH_SUCCESS", payload: res.data})
    }).catch(err => {
      dispatch({type: "FETCH_ERROR", payload: err.response.data})
    })
  }

  useEffect(() => {
    getSmurfs()
  }, [])
  console.log(state)
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>

      <SmurfProvider value={state.smurfs}>
        <SmurfForm />
        <SmurfList />
      </SmurfProvider>
    </div>
  );
};

export default App;
