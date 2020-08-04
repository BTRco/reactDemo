import axios from "axios";
import {
  GET_ERRORS,
  GET_BEHAVIOR_VERSIONS,
  GET_BEHAVIOR_VERSION,
  DELETE_BEHAVIOR_VERSION,
} from "../types";

export const add = (behaviorVersion, history) => async (dispatch) => {
  try {
    await axios.post("http://localhost:8080/admin/behaviorVersion/add", behaviorVersion);
    history.push("/admin/behaviorVersion");
    dispatch({
      type: GET_ERRORS,
      payload: {},
    });
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data,
    });
  }
};

export const list = () => async (dispatch) => {
  const res = await axios.get("http://localhost:8080/admin/behaviorVersion/list");
  dispatch({
    type: GET_BEHAVIOR_VERSIONS,
    payload: res.data,
  });
};

export const remove = (behaviorVersionId) => async (dispatch) => {
  if (
    window.confirm(
      `You are deleting project task ${behaviorVersionId}, this action cannot be undone`
    )
  ) {
    await axios.delete(`http://localhost:8080/admin/behaviorVersion/${behaviorVersionId}`);
    dispatch({
      type: DELETE_BEHAVIOR_VERSION,
      payload: behaviorVersionId,
    });
  }
};

export const get = (behaviorVersionId, history) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:8080/admin/behaviorVersion/${behaviorVersionId}`);
    dispatch({
      type: GET_BEHAVIOR_VERSION,
      payload: res.data,
    });
  } catch (error) {
    history.push("/admin/behaviorVersion");
  }
};
