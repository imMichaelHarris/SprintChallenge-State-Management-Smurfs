import React, { useContext } from "react";
import { myAxios } from "../myAxios";
import { SmurfContext } from "../contexts/SmurfContext";

const Smurf = ({ smurf }) => {
  const { dispatch } = useContext(SmurfContext);

  const edit = () => {
    dispatch({ type: "EDIT_ON", payload: smurf.id });
  };
  const deleteSmurf = () => {
    myAxios
      .delete(`/smurfs/${smurf.id}`)
      .then(res => {
        dispatch({ type: "DELETE_SUCCESS", payload: res.data });
      })
      .catch(err => {
        dispatch({ type: "DELETE_ERROR", payload: err.response.data });
      });
  };
  return (
    <div className="smurf">
      <h2>{smurf.name}</h2>
      <main>
        <aside>
          <h4>Age: {smurf.age}</h4>
          <h4>Height: {smurf.height}cm</h4>
        </aside>
        <footer>
          <button onClick={edit}>Edit</button>
          <button onDoubleClick={deleteSmurf}>Delete</button>
        </footer>
      </main>
    </div>
  );
};

export default Smurf;
