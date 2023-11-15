import { SET_USER_LOGIN } from '../../constant/Action';
export const setUserLogin = (user) => {
  return (dispatch) => {
    dispatch({ type: SET_USER_LOGIN, payload: user });
  };
};
