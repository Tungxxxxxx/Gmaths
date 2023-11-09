import { GET_COURSES_REQUEST, GET_COURSES_SUCCESS, GET_COURSES_FAILURE } from '../../constant/Action';

const dataInit = [
  { id: 1, gradeId: 1, name: 'Course 1', price: 300000 },
  { id: 2, gradeId: 1, name: 'Course 2', price: 300000 },
  { id: 3, gradeId: 1, name: 'Course 3', price: 300000 },
  { id: 4, gradeId: 1, name: 'Advanced Course', price: 600000 },
  { id: 5, gradeId: 1, name: 'Awarding Course', price: 900000 },
  { id: 6, gradeId: 2, name: 'Course 1', price: 300000 },
  { id: 7, gradeId: 3, name: 'Course 1', price: 300000 },
  { id: 8, gradeId: 4, name: 'Course 1', price: 300000 },
  { id: 9, gradeId: 5, name: 'Course 1', price: 300000 },
  { id: 10, gradeId: 6, name: 'Course 1', price: 300000 },
  { id: 11, gradeId: 7, name: 'Course 1', price: 300000 },
  { id: 12, gradeId: 8, name: 'Course 1', price: 300000 },
  { id: 13, gradeId: 9, name: 'Course 1', price: 300000 },
];
const getCourses = (gradeId) => {
  return dataInit.filter((item) => item.gradeId === gradeId);
};
export const fetchGetCoursesRequest = () => {
  return { type: GET_COURSES_REQUEST };
};
export const fetchGetCoursesSuccess = (data) => {
  return { type: GET_COURSES_SUCCESS, payload: data };
};
export const fetchGetCoursesFailure = (error) => {
  return { type: GET_COURSES_FAILURE, payload: error.message };
};

//trả về 1 dispatch
export const fetchGetCourses = (gradeId) => {
  return (dispatch) => {
    console.log('action');
    dispatch(fetchGetCoursesRequest());
    try {
      const courses = gradeId === 0 ? dataInit : getCourses(gradeId);
      dispatch(fetchGetCoursesSuccess(courses));
    } catch (error) {
      dispatch(fetchGetCoursesFailure(error));
    }
  };
};
