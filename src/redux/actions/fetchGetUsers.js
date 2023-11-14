import { GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAILURE } from '../../constant/Action';

const dataInit = [
  { id: 1, name: 'Le Van Luyen', phone: '0986189492', pass: '123456' },
  { id: 2, name: 'Pham Thanh Tung', phone: '0986189491', pass: '123456' },
  { id: 3, name: 'Lương Văn Can', phone: '0986189493', pass: '123456' },
];
//phải trả về 1 đối tượng
export const fetchGetUsersRequest = () => {
  return {
    type: GET_USERS_REQUEST,
  };
};
export const fetchGetUsersSuccess = (data) => {
  return { type: GET_USERS_SUCCESS, payload: data };
};
export const fetchGetUsersFailure = (error) => {
  return { type: GET_USERS_FAILURE, payload: error.message };
};

//trả về 1 dispatch
export const fetchGetUsers = () => {
  return (dispatch) => {
    dispatch(fetchGetUsersRequest());
    try {
      dispatch(fetchGetUsersSuccess(dataInit));
    } catch (error) {
      dispatch(fetchGetUsersFailure(error));
    }
  };
};
