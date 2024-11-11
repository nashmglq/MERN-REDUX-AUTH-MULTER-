import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import { workoutListReducer, workoutDetailReducer, workoutPostReducer, deleteWorkoutReducer, updateWorkoutReducer, registeruserReducer, loginuserReducer } from "../src/reducer/workoutReducer";


//where we put the reducer and use it to our  screen and components to pass the state and gets the payload

// The store is the central place that manages the entire state of the application. 
// It allows components to access the current state and updates whenever actions are dispatched, 
// ensuring that all parts of the app stay in sync.


const reducer = combineReducers({
  workoutList: workoutListReducer,
  workoutDetail: workoutDetailReducer,
  workoutPost : workoutPostReducer,
  deleteWorkout : deleteWorkoutReducer,
  updateWorkout : updateWorkoutReducer,
  registerUser : registeruserReducer,
  loginUser : loginuserReducer
});

//initialState defines the starting state. In the reducer, state = { workouts: [] } 
//sets the default state, and the default case returns the current state if no action matches.

//when the code start the initial state is empty or with an object from prev state
const initialState = {};

// middleware (thunk) to fully communicate with your server? yes or no
const middleware = [thunk];


// this put all things together which means store all of it
const store = configureStore({
  reducer,
  initialState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

export default store;
