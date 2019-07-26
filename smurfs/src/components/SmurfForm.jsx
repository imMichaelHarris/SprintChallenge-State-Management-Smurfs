import React, { useState } from "react";

const SmurfForm = () => {
  return (
    <form>
      <fieldset>
        <legend>Add your smurf</legend>
        <label htmlFor="">Name</label>
        <input type="text" placeholder="Name" name="name" autoComplete="off" />
        <label htmlFor="">Age</label>
        <input type="number" placeholder="Age" name="age" autoComplete="off" />
        <label htmlFor="">Height</label>
        <input
          type="number"
          placeholder="Height"
          name="height"
          autoComplete="off"
        />
      </fieldset>
    </form>
  );
};

export default SmurfForm;
