import { LOGIN_SUCCESS, LOGIN_FAILURE } from "./actionTypes";
import { getData, setData } from "../Utils/localStorage";

const token = getData("token");

const initState = {
  isAuth: token ? true : false,
  token: token || ""
};

export const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS: {
      setData("token", payload);
      return {
        ...state,
        isAuth: true,
        token: payload
      };
    }

    case LOGIN_FAILURE: {
      return {
        ...state,
        isAuth: false,
        token: ""
      };
    }

    default:
      return state;
  }
};
