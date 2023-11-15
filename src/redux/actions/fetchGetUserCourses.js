import {
  GET_COURSES_OF_USER_REQUEST,
  GET_COURSES_OF_USER_SUCCESS,
  GET_COURSES_OF_USER_FAILURE,
} from '../../constant/Action';
import { DA_HOAN_THANH, CHUAN_BI } from '../../constant/Constant';
const dataInit = [
  { id: 1, courseId: 1, gradeId: 1, userId: 1, status: DA_HOAN_THANH },
  { id: 2, courseId: 2, gradeId: 1, userId: 1, status: DA_HOAN_THANH },
  { id: 3, courseId: 3, gradeId: 1, userId: 1, status: CHUAN_BI },
  { id: 4, courseId: 6, gradeId: 2, userId: 1, status: DA_HOAN_THANH },
  { id: 5, courseId: 1, gradeId: 3, userId: 1, status: CHUAN_BI },
  { id: 6, courseId: 2, gradeId: 4, userId: 1, status: CHUAN_BI },
  { id: 7, courseId: 1, gradeId: 5, userId: 1, status: CHUAN_BI },
];
const getCoursesOfUser = (userId) => {
  return dataInit.filter((item) => item.userId === userId);
};
export const fetchGetCoursesOfUserRequest = () => {
  return { type: GET_COURSES_OF_USER_REQUEST };
};
export const fetchGetCoursesOfUserSuccess = (data) => {
  return { type: GET_COURSES_OF_USER_SUCCESS, payload: data };
};
export const fetchGetCoursesOfUserFailure = (error) => {
  return { type: GET_COURSES_OF_USER_FAILURE, payload: error.message };
};

//trả về 1 dispatch
export const fetchGetCoursesOfUser = (userId) => {
  return (dispatch) => {
    dispatch(fetchGetCoursesOfUserRequest());
    try {
      const coursesOfUser = !userId || userId === 0 ? [] : getCoursesOfUser(userId);
      dispatch(fetchGetCoursesOfUserSuccess(coursesOfUser));
    } catch (error) {
      dispatch(fetchGetCoursesOfUserFailure(error));
    }
  };
};
