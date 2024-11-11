import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import WorkoutForm from "../component/workoutform";
import { listWorkout } from "../actions/workoutActions";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  // Dispatch is like saying, 'Use this action
  const dispatch = useDispatch();
  const asd = useSelector((state) => state.workoutList);
  const { error, loading, workouts } = asd;
  const nav = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("userInfo");

    console.log(token); 

    if (token) {
      dispatch(listWorkout());
    } else {
      nav("/");
    }
  }, []);

  return (
    <div>
      <WorkoutForm />
      <h2 class="mb-2"> Choose a workout!</h2>

      <div>
        {/* check if both are true */}
        {workouts &&
          workouts.map((workout) => (
            <div class="row">
              <div class="col-lg">
                <div key={workout.id}>
                  {/* needs {} becasue we are inside the react return so any js needs to be like that */}
                  <Link to={`${workout.id}`} class="text-decoration-none">
                    <div class="card mt-2">
                      <h2>{workout.title}</h2>
                      <h3> {workout.description}</h3>


                      {
                        workout.img ? (      <img src = {`http://localhost:5001/uploads/${workout.img}`}
                          alt={workout.title}
                          style={{ width: "30%", height: "30%" }}
                          />): (<span>No image </span>)
                      }


                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;

// forEach still needs to create a new array manually just to retunr data, while map create a new on its own
