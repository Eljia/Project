import { LOGIN_USER_SUCCESS, AUTH_FAIL } from "../const";
import axios from "axios";

//login
export const login = (email, password) => async (dispatch) => {
  try {
    const config = {
      headres: {
        "content-type": "application/json",
      },
    };
    let { data } = await axios.post("/auth/login", { email, password }, config);
    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: data, // email password
    });
  } catch (error) {
    console.dir(error);

    error.response.data.forEach((elt) => {
      alert(elt.msg);
    });
    dispatch({
      type: AUTH_FAIL,
    });
  }
};
