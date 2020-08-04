import axios from "axios";
import {
  GET_ERRORS,
  GET_BRAND_NAMES,
  GET_BRAND_NAME,
  DELETE_BRAND_NAME,
} from "../types";

export const add = (brandName, history) => async (dispatch) => {
  try {
    await axios.post("http://localhost:8080/admin/brandName/add", brandName);
    history.push("/admin/BrandName");
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
  const res = await axios.get("http://localhost:8080/admin/brandName/list");
  dispatch({
    type: GET_BRAND_NAMES,
    payload: res.data,
  });
};

export const remove= (brandNameId) => async (dispatch) => {
  if (
    window.confirm(
      `You are deleting project task ${brandNameId}, this action cannot be undone`
    )
  ) {
    await axios.delete(`http://localhost:8080/admin/brandName/${brandNameId}`);
    dispatch({
      type: DELETE_BRAND_NAME,
      payload: brandNameId,
    });
  }
};

export const get = (brandNameId, history) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:8080/admin/brandName/${brandNameId}`);
    dispatch({
      type: GET_BRAND_NAME,
      payload: res.data,
    });
  } catch (error) {
    history.push("/admin/BrandName");
  }
};
