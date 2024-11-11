import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteWorkout } from "../actions/workoutActions";

const DeleteWorkout = () => {
  const { id } = useParams(); 
  const dispatch = useDispatch();
  
  const handleDelete = (e) =>{
    e.preventDefault()
    dispatch(deleteWorkout(id))
  }
  
  return (
    <form onSubmit={handleDelete}>
      <button type="submit"> Delete </button>
    </form>
  );
};

export default DeleteWorkout;
