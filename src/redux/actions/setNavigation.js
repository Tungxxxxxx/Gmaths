import { SET_NAVIGATION } from '../../constant/Action';
export const setNavigation = (navigation) => {
  return (dispatch) => {
    dispatch({ type: SET_NAVIGATION, payload: navigation });
  };
};
