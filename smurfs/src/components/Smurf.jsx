import React, { useContext } from "react";
import {myAxios} from '../myAxios';
import { SmurfContext } from "../contexts/SmurfContext";

const Smurf = ({ smurf }) => {
  const { dispatch } = useContext(SmurfContext);

  const edit = () => {
      dispatch({type: "EDIT_ON", payload: smurf.id})
  }
  const deleteSmurf = () => {
      dispatch({type: "DELETE_START"})
  }
  return (
    <div>
      <h2>{smurf.name}</h2>
      <aside>
        <h4>Age: {smurf.age}</h4>
        <h4>Height: {smurf.height}cm</h4>
      </aside>
      <button onClick={edit}>Edit</button>
      <button>Delete</button>
    </div>
  );
};

export default Smurf;
