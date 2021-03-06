import React, { useState, useContext, useEffect } from "react";
import { SmurfContext } from "../contexts/SmurfContext";
import { myAxios } from "../myAxios";

const SmurfForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    age: "",
    height: ""
  });

  const { dispatch, state } = useContext(SmurfContext);

  useEffect(() => {
    console.log(state.editSmurf)
    state.editMode && setFormState(state.editSmurf);
  }, [state.editMode]);

  const handleChange = input => {
    setFormState({
      ...formState,
      [input.target.name]: input.target.value
    });
  };

  const addSmurf = e => {
    e.preventDefault();
    dispatch({ type: "ADD_START" });
    myAxios
      .post("/smurfs", formState)
      .then(res => {
        dispatch({ type: "ADD_SUCCESS", payload: res.data });
        console.log(res);
      })
      .catch(err => {
        dispatch({ type: "ADD_ERROR", payload: err.response.data });
        console.log(err.response);
      });
    setFormState({
      name: "",
      age: "",
      height: ""
    });
  };

  const updateSmurf = e => {
    e.preventDefault();
    console.log(state.editSmurf)
    myAxios
      .put(`/smurfs/${state.editSmurf.id}`, formState)
      .then(res => {
        console.log(res)
        dispatch({ type: "EDIT_SUCCESS", payload: res.data });
      })
      .catch(err => {
        dispatch({ type: "EDIT_ERROR", payload: err.response.data });
      });
  };
  return (
    <form onSubmit={state.editMode ? updateSmurf : addSmurf}>
      <fieldset>
          <div>

        <input
          type="text"
          placeholder="Name"
          name="name"
          autoComplete="off"
          value={formState.name}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Age"
          name="age"
          autoComplete="off"
          value={formState.age}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Height"
          name="height"
          autoComplete="off"
          value={formState.height}
          onChange={handleChange}
        />
          </div>
        <legend>Add your smurf</legend>
        <button>{state.editMode ? "Update smurf" : "Add Smurf"}</button>
      </fieldset>
    </form>
  );
};

export default SmurfForm;
