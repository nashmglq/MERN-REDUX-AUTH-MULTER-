import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DeleteWorkout from "../component/delete";
import UpdateWorkout from "../component/update";
import { useDispatch, useSelector } from "react-redux";
import { detailWorkoutActions } from "../actions/workoutActions";

const DetailView = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const fetchDetailWorkout = useSelector(state => state.workoutDetail)
  const {loading, detailWorkout, err} = fetchDetailWorkout
  const token = localStorage.getItem("userInfo")
  const nav = useNavigate()
  useEffect(()=>{

    if(token){
      dispatch(detailWorkoutActions(id))
    }else{
      nav("/")
    }

  }, []) // best for fetching data as soon as the page loaded

  return (
    <div>
      <DeleteWorkout />

      {detailWorkout &&
        detailWorkout.map((dworkout) => (
          <div>
            <h2>{dworkout.title}</h2>
            <h3>{dworkout.description}</h3>
          </div>
        ))}

      <UpdateWorkout />
    </div>
  );
};

export default DetailView;
