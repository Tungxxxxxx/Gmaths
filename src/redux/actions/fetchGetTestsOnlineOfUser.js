import {
  GET_TESTS_ONLINE_OF_USER_REQUEST,
  GET_TESTS_ONLINE_OF_USER_SUCCESS,
  GET_TESTS_ONLINE_OF_USER_FAILURE,
} from '../../constant/Action';
import { DA_HOAN_THANH, CHUAN_BI, PENDING } from '../../constant/Constant';
const dataInit = [
  { id: 1, testOnlineId: 1, courseId: 7, gradeId: 3, userId: 1, status: DA_HOAN_THANH },
  { id: 2, testOnlineId: 2, courseId: 7, gradeId: 3, userId: 1, status: PENDING },
  { id: 2, testOnlineId: 2, courseId: 7, gradeId: 3, userId: 2, status: CHUAN_BI },
];
const getTestsOnlineOfUser = (userId) => {
  return dataInit.filter((item) => item.userId === userId);
};
export const fetchGetTestsOnlineOfUserRequest = () => {
  return { type: GET_TESTS_ONLINE_OF_USER_REQUEST };
};
export const fetchGetTestsOnlineOfUserSuccess = (data) => {
  return { type: GET_TESTS_ONLINE_OF_USER_SUCCESS, payload: data };
};
export const fetchGetTestsOnlineOfUserFailure = (error) => {
  return { type: GET_TESTS_ONLINE_OF_USER_FAILURE, payload: error.message };
};

//trả về 1 dispatch
export const fetchGetTestsOnlineOfUser = (userId) => {
  return (dispatch) => {
    dispatch(fetchGetTestsOnlineOfUserRequest());
    try {
      const testsOnlineOfUser = !userId || userId === 0 ? [] : getTestsOnlineOfUser(userId);
      dispatch(fetchGetTestsOnlineOfUserSuccess(testsOnlineOfUser));
    } catch (error) {
      dispatch(fetchGetTestsOnlineOfUserFailure(error));
    }
  };
};
