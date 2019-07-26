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
    state.editMode && setFormState(state.editSmurf[0]) 
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
  return (
    <form onSubmit={addSmurf}>
      <fieldset>
        <legend>Add your smurf</legend>
        <label htmlFor="">Name</label>
        <input
          type="text"
          placeholder="Name"
          name="name"
          autoComplete="off"
          value={formState.name}
          onChange={handleChange}
        />
        <label htmlFor="">Age</label>
        <input
          type="number"
          placeholder="Age"
          name="age"
          autoComplete="off"
          value={formState.age}
          onChange={handleChange}
        />
        <label htmlFor="">Height</label>
        <input
          type="number"
          placeholder="Height"
          name="height"
          autoComplete="off"
          value={formState.height}
          onChange={handleChange}
        />
        <button>{state.editMode ? "Update smurf" : "Add Smurf"}</button>
      </fieldset>
    </form>
  );
};

export default SmurfForm;
