import {
  GET_COURSES_OF_USER_REQUEST,
  GET_COURSES_OF_USER_SUCCESS,
  GET_COURSES_OF_USER_FAILURE,
} from '../../constant/Action';

const dataInit = [
  { id: 1, courseId: 1, gradeId: 1, userId: 1, status: 'Đã hoàn thành' },
  { id: 2, courseId: 2, gradeId: 1, userId: 1, status: 'Đã hoàn thành' },
  { id: 3, courseId: 1, gradeId: 2, userId: 1, status: 'Chuẩn bị' },
  { id: 4, courseId: 1, gradeId: 1, userId: 2, status: 'Chuẩn bị' },
  { id: 5, courseId: 2, gradeId: 1, userId: 2, status: 'Chuẩn bị' },
  { id: 6, courseId: 1, gradeId: 2, userId: 2, status: 'Chuẩn bị' },
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
      const coursesOfUser = userId || userId === 0 ? [] : getCourses(userId);
      dispatch(fetchGetCoursesOfUserSuccess(coursesOfUser));
    } catch (error) {
      dispatch(fetchGetCoursesOfUserFailure(error));
    }
  };
};
