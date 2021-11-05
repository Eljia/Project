import { LOGIN_USER_SUCCESS, AUTH_FAIL } from "../const/index";
const initialState = {
  user: null,
  token: null,
  isLoading: true,
  isAuth: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_USER_SUCCESS:
      return {
        ...state,

        isLoading: false,
        isAuth: true,
        user: payload.user,
        token: payload.token,
      };

    default:
      return state;
  }
};
