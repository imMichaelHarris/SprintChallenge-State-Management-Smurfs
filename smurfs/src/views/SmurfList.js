import React, { useContext } from "react";
import { SmurfContext } from "../contexts/SmurfContext";
import Smurf from "../components/Smurf";

const SmurfList = () => {
  const { state } = useContext(SmurfContext);
  return (
    <div>
      {state.smurfs.map(smurf => (
        <Smurf key={smurf.id} smurf={smurf}/>
      ))}
    </div>
  );
};

export default SmurfList;
