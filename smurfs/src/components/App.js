import React, { useEffect } from "react";
import { SmurfProvider } from "../contexts/SmurfContext";
import "./App.css";

const App = () => {

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
