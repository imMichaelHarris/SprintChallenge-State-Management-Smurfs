import React, { useState } from "react";

const SmurfForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    age: "",
    height: ""
  });

  const handleChange = input => {
      setFormState({
          ...formState,
          [input.target.name]: input.target.value
      })
  };
  return (
    <form>
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
      </fieldset>
    </form>
  );
};

export default SmurfForm;
