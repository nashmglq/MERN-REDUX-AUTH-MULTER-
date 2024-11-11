import React, { act } from "react";

//EQUAL TO THE workout with empty payload
// ACTION.TYPE GLOBAL, WAITING LANG SIYA KUNG ANONG TATAMA NA CASE
export const workoutListReducer = (state = { workouts: [] }, action) => {
  console.log(action.type);
  switch (action.type) {
    case "WORKOUT_LIST_REQUEST":
      return { loading: true, workouts: [] };

    case "WORKOUT_LIST_FAIL":
      return { loading: false, err: action.payload };

    case "WORKOUT_LIST_SUCCESS":
      return { loading: false, workouts: action.payload };

    default:
      return state;
  }
};

// state is initialize
export const workoutDetailReducer = (state = { detailWorkout: [] }, action) => {
  switch (action.type) {
    case "WORKOUT_DETAIL_REQUEST":
      return { loading: true, detailWorkout: [] };
    case "WORKOUT_DETAIL_SUCCESS":
      return { loading: false, detailWorkout: action.payload }; // for naming only, this is what you will call in your screens
    case "WORKOUT_DETAIL_FAIL":
      return { loading: false, err: action.payload };

    default:
      return state;
  }
};

export const workoutPostReducer = (state = { post: [] }, action) => {
  switch (action.type) {
    case "WORKOUT_POST_REQUEST":
      return { loading: true, success: false };
    case "WORKOUT_POST_SUCCESS":
      return { loading: false, success: true };
    case "WORKOUT_POST_FAIL":
      return { loading: false, success: false };
    default:
      return state;
  }
};

export const deleteWorkoutReducer = (state = { delete: [] }, action) => {
  switch (action.type) {
    case "WORKOUT_DELETE_REQUEST":
      return { loading: true, success: false };
    case "WORKOUT_DELETE_SUCCESS":
      return { loading: false, success: true };
    case "WORKOUT_DELETE_FAIL":
      return { loading: false, success: false };
    default:
      return state;
  }
};

export const updateWorkoutReducer = (state = { update: [] }, action) => {
  switch (action.type) {
    case "WORKOUT_UPDATE_REQUEST":
      return { loading: true, success: false };
    case "WORKOUT_UPDATE_SUCCESS":
      return { loading: false, success: true };
    case "WORKOUT_UPDATE_FAIL":
      return { loading: false, success: false };
    default:
      return state;
  }
};

export const registeruserReducer = (state = { intialState: [] }, action) => {
  switch (action.type) {
    case "REGISTER_REQUEST":
      return { loading: true, success: false };
    case "REGISTER_SUCCESS":
      return { loading: false, success: true };
    case "REGISTER_FAIL":
      return { loading: false, success: false };

    default:
      return state;
  }
};

export const loginuserReducer = (state = { initialState: [] }, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return { loading: true, success: false };
    case "LOGIN_SUCCESS":
      return { loading: true, success: false };

    case "LOGIN_FALSE":
      return { loading: true, success: false };

    default:
      return state;
  }
};
