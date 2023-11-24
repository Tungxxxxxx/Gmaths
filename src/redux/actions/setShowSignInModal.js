import { SET_SHOW_SIGN_IN_MODAL } from '../../constant/Action';
export const setShowSignInModal = (callBack) => {
  return (dispatch) => {
    dispatch({ type: SET_SHOW_SIGN_IN_MODAL, payload: callBack });
  };
};
