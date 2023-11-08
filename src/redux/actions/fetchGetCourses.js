import { GET_COURSES_REQUEST, GET_COURSES_SUCCESS, GET_COURSES_FAILURE } from '../../constant/Action';

const dataInit = [
  { id: 1, gradeId: 1, name: 'Course 1', price: 300000 },
  { id: 2, gradeId: 1, name: 'Course 2', price: 300000 },
  { id: 3, gradeId: 1, name: 'Course 3', price: 300000 },
  { id: 4, gradeId: 1, name: 'Advanced Course', price: 600000 },
  { id: 5, gradeId: 1, name: 'Awarding Course', price: 900000 },
  { id: 2, gradeId: 2, name: 'Course 1' },
  { id: 3, gradeId: 3, name: 'Course 1' },
  { id: 4, gradeId: 4, name: 'Course 1' },
  { id: 5, gradeId: 5, name: 'Course 1' },
  { id: 6, gradeId: 6, name: 'Course 1' },
  { id: 7, gradeId: 7, name: 'Course 1' },
  { id: 8, gradeId: 8, name: 'Course 1' },
  { id: 9, gradeId: 9, name: 'Course 1' },
];
const getCourses = (gradeId) => {
  return dataInit.filter((item) => item.gradeId === gradeId);
};
export const fetchGetCoursesRequest = () => {
  return (dispatch) => {
    dispatch({ type: GET_COURSES_REQUEST });
  };
};
export const fetchGetCoursesSuccess = (data) => {
  return (dispatch) => {
    dispatch({ type: GET_COURSES_SUCCESS, payload: data });
  };
};
export const fetchGetCoursesFailure = (error) => {
  return (dispatch) => {
    dispatch({ type: GET_COURSES_FAILURE, payload: error.message });
  };
};

export const fetchGetCourses = (gradeId) => {
  fetchGetCoursesRequest();
  try {
    const courses = getCourses(gradeId);
    fetchGetCoursesSuccess(courses);
  } catch (error) {
    fetchGetCoursesFailure(error);
  }
};
