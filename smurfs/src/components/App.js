import React, { useEffect, useReducer } from "react";
import { SmurfProvider } from "../contexts/SmurfContext";
import {initialSmurfState, smurfReducer} from '../reducers/smurfReducer'
import "./App.css";

const App = () => {
  const [smurfs, dispatch] = useReducer(smurfReducer, initialSmurfState)

  useEffect(() => {

  }, [])
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>

      <SmurfProvider value={}>

      </SmurfProvider>
    </div>
  );
};

export default App;
