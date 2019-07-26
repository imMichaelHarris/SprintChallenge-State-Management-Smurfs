import React, { useState } from "react";

const SmurfForm = () => {
  return (
    <form>
      <fieldset>
        <legend>Add your smurf</legend>
        <label htmlFor=""></label>
        <input type="text" placeholder="Name" name="name" />
      </fieldset>
    </form>
  );
};

export default SmurfForm;
