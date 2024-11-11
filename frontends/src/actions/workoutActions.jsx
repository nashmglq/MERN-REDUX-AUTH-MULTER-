import React from "react";
import axios from "axios";
import {
  WORKOUT_LIST_FAIL,
  WORKOUT_LIST_REQUEST,
  WORKOUT_LIST_SUCCESS,
  WORKOUT_DETAIL_REQUEST,
  WORKOUT_DETAIL_SUCCESS,
  WORKOUT_DETAIL_FAIL,
  WORKOUT_POST_REQUEST,
  WORKOUT_POST_SUCCESS,
  WORKOUT_POST_FAIL,
  WORKOUT_DELETE_REQUEST,
  WORKOUT_DELETE_SUCCESS,
  WORKOUT_DELETE_FAIL,
  WORKOUT_UPDATE_REQUEST,
  WORKOUT_UPDATE_SUCCESS,
  WORKOUT_UPDATE_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
} from "../constants/workoutConstants";
import { useParams } from "react-router-dom";

// dispatch tell store.js what happpened like request, fail, or success
// dispatch is for saying what to get in the server or waht action to use
// seperate for clarity
export const listWorkout = () => async (dispatch) => {
  try {
    dispatch({ type: WORKOUT_LIST_REQUEST });
    const { data } = await axios.get("http://localhost:5001/");

    dispatch({
      type: WORKOUT_LIST_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: WORKOUT_LIST_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const detailWorkoutActions = (id) => async (dispatch) => {
  try {
    dispatch({ type: WORKOUT_DETAIL_REQUEST });
    const { data } = await axios.get(`http://localhost:5001/workout/${id}`);

    dispatch({ type: WORKOUT_DETAIL_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: WORKOUT_DETAIL_FAIL, payload: err });
  }
};

export const postWorkout = (formData) => async (dispatch) => {
  try {
    dispatch({ type: WORKOUT_POST_REQUEST });
    const response = await axios.post("http://localhost:5001/post", formData); // this is like saying (url, what to recieve)

    if (response.ok) {
      dispatch({ type: WORKOUT_POST_SUCCESS });
    }
  } catch (err) {
    dispatch({ type: WORKOUT_POST_FAIL });
  }
};

export const deleteWorkout = (id) => async (dispatch) => {
  try {
    dispatch({ type: WORKOUT_DELETE_REQUEST });
    const response = await axios.delete(`http://localhost:5001/delete/${id}`);
    dispatch({ type: WORKOUT_DELETE_SUCCESS });
  } catch (err) {
    dispatch({ type: WORKOUT_DELETE_FAIL });
  }
};

export const updateWorkout = (id, formdata) => async (dispatch) => {
  try {
    dispatch({ type: WORKOUT_UPDATE_REQUEST });
    const response = await axios.put(
      `http://localhost:5001/update/${id}`,
      formdata
    );

    if (response.ok) {
      dispatch({ type: WORKOUT_UPDATE_SUCCESS });
    }
  } catch (err) {
    dispatch({ type: WORKOUT_UPDATE_FAIL });
  }
};

export const registerAction = (formData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_REQUEST });
    const response = await axios.post(
      "http://localhost:5001/register",
      formData
    );

    if (response.ok) {
      dispatch({ type: REGISTER_SUCCESS });
    }
  } catch (err) {
    dispatch({ type: REGISTER_FAIL });
  }
};

export const loginAction = (formData, nav) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const response = await axios.post("http://localhost:5001/login", formData);

    if (response.data && response.data.userInfo) {
      // if response.data (get all the data with userInfo or all json reposne)
      // if reponse.data.userInfo (get all data inside that thing)
      localStorage.setItem("userInfo", JSON.stringify(response.data.userInfo))

      dispatch({ type: LOGIN_SUCCESS });

      nav("/home") // after success navigate, we use the passed navigate function
    }
  } catch (err) {
    dispatch({ type: LOGIN_FAIL });
  }
};
