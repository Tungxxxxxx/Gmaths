import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  GET_USER_LOGIN_REQUEST,
  GET_USER_LOGIN_SUCCESS,
  GET_USER_LOGIN_FAILURE,
} from '../../constant/Action';

const dataInit = [
  {
    id: 1,
    name: 'Le Van Luyen',
    phone: '0986189492',
    username: 'tungx1',
    pass: '123456',
    avatar: require('../../assets/images/users/tungpt.png'),
  },
  { id: 2, name: 'Pham Thanh Tung', phone: '0986189491', pass: '123456', username: 'tungx1' },
  { id: 3, name: 'Lương Văn Can', phone: '0986189493', pass: '123456', username: 'tungx1' },
];
//phải trả về 1 đối tượng
const fetchGetUsersRequest = () => {
  return {
    type: GET_USERS_REQUEST,
  };
};
const fetchGetUsersSuccess = (data) => {
  return { type: GET_USERS_SUCCESS, payload: data };
};
const fetchGetUsersFailure = (error) => {
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
const fetchGetUserLoginRequest = () => {
  return {
    type: GET_USER_LOGIN_REQUEST,
  };
};
const fetchGetUserLoginSuccess = (user) => {
  return { type: GET_USER_LOGIN_SUCCESS, payload: user };
};
const fetchGetUserLoginFailure = (error) => {
  return { type: GET_USER_LOGIN_FAILURE, payload: error.message };
};
export const fetchGetUserLogin = (username, pass) => {
  return async (dispatch) => {
    dispatch(fetchGetUserLoginRequest());
    try {
      const user = await getUserLogin(username, pass);
      if (user) {
        dispatch(fetchGetUserLoginSuccess(user));
      }
    } catch (error) {
      dispatch(fetchGetUserLoginFailure(error));
    }
  };
};

getUserLogin = (username, pass) => {
  const userFounds = dataInit.filter(
    (item) => (item.phone === username || item.username === username) && item.pass === pass,
  );
  if (userFounds) {
    return userFounds[0];
  }
  return null;
};
