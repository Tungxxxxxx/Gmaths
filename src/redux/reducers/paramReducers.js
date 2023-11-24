import { SET_NAVIGATION, SET_USER_LOGIN, SET_SHOW_SIGN_IN_MODAL } from '../../constant/Action';
const initState = {
  navigation: null,
  userLogin: null,
  callBack: null,
};
export const setParamsReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_NAVIGATION:
      return { ...state, navigation: action.payload };
    case SET_USER_LOGIN:
      return { ...state, userLogin: action.payload };
    case SET_SHOW_SIGN_IN_MODAL:
      return { ...state, callBack: action.payload };

    default:
      return state;
  }
};
