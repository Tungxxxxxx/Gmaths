import {
  GET_LESSONS_OF_USER_REQUEST,
  GET_LESSONS_OF_USER_SUCCESS,
  GET_LESSONS_OF_USER_FAILURE,
} from '../../constant/Action';
import { DA_HOAN_THANH, CHUAN_BI } from '../../constant/Constant';
const dataInit = [
  { id: 1, lessonId: 1, courseId: 7, gradeId: 3, userId: 1, status: DA_HOAN_THANH },
  { id: 2, lessonId: 2, courseId: 7, gradeId: 3, userId: 1, status: CHUAN_BI },
  { id: 2, lessonId: 2, courseId: 7, gradeId: 3, userId: 2, status: CHUAN_BI },
];
const getLessonsOfUser = (userId) => {
  return dataInit.filter((item) => item.userId === userId);
};
export const fetchGetLessonsOfUserRequest = () => {
  return { type: GET_LESSONS_OF_USER_REQUEST };
};
export const fetchGetLessonsOfUserSuccess = (data) => {
  return { type: GET_LESSONS_OF_USER_SUCCESS, payload: data };
};
export const fetchGetLessonsOfUserFailure = (error) => {
  return { type: GET_LESSONS_OF_USER_FAILURE, payload: error.message };
};

//trả về 1 dispatch
export const fetchGetLessonsOfUser = (userId) => {
  return (dispatch) => {
    dispatch(fetchGetLessonsOfUserRequest());
    try {
      const lessonsOfUser = !userId || userId === 0 ? [] : getLessonsOfUser(userId);
      dispatch(fetchGetLessonsOfUserSuccess(lessonsOfUser));
    } catch (error) {
      dispatch(fetchGetLessonsOfUserFailure(error));
    }
  };
};
