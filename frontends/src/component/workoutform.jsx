import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {postWorkout} from "../actions/workoutActions";

const WorkoutForm = () => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const handelSubmit = (e) => {
    e.preventDefault()
    // we give value, not destructuring
    const workoutData = {title, description}

    dispatch(postWorkout(workoutData))
  }



  return (
    <form onSubmit={handelSubmit}>
      <label>Title</label>
      <input
        type="text"
        // onChange triggers when the input value changes
        // (e) is the event object that represents the change
        // e.target refers to the input element, and e.target.value gets its new value
        onChange = {e => setTitle(e.target.value)}
      ></input>

    <label> Description</label>
    <input 
    type = "text"
    onChange = {e => setDescription(e.target.value)}
    ></input>

    <button> Submit </button>

    </form>
  );
};

export default WorkoutForm;
