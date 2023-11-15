import { SET_NAVIGATION, SET_USER_LOGIN } from '../../constant/Action';
const initState = {
  navigation: null,
  userLogin: null,
};
export const setNavigationReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_NAVIGATION:
      return { ...state, navigation: action.payload };
    case SET_USER_LOGIN:
      return { ...state, userLogin: action.payload };

    default:
      return state;
  }
};
