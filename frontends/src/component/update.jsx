import React from "react";

import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateWorkout } from "../actions/workoutActions";

const UpdateWorkout = () => {
  //success
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const handleUpdate = (e) => {
    e.preventDefault()
    const dataUpdate = {title, description}

    dispatch(updateWorkout(id, dataUpdate))
  }


  return (
    <form onSubmit={handleUpdate}>
      <label>Title</label>
      {/* onChagne when something change? e is the event of change */}
      <input type="text" onChange={(e) => setTitle(e.target.value)}></input>

      <label>Description</label>
      <input
        type="text"
        onChange={(e) => setDescription(e.target.value)}
      ></input>

      <button>Update</button>
    </form>
  );
};

export default UpdateWorkout;
