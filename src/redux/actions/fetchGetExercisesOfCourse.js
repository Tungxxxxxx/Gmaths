import {
  GET_EXERCISES_OF_COURSE_REQUEST,
  GET_EXERCISES_OF_COURSE_SUCCESS,
  GET_EXERCISES_OF_COURSE_FAILURE,
} from '../../constant/Action';

const dataInit = [
  {
    id: 1,
    code: 'E1',
    courseId: 7,
    gradeId: 3,
    name: 'Exercise 1',
    free: true,
    title: '3-digits numbers',
    content: '',
  },
  {
    id: 2,
    code: 'E2',
    courseId: 7,
    gradeId: 3,
    name: 'Exercise 2',
    title: 'Addition of 3-digits numbers',
    content:
      '“Global Maths – Global Citizen” - Khơi nguồn đam mê, phát triển tiềm năng Toán và Khoa học tiếng Anh. Chương trình Toán tiếng Anh GMaths kết hợp giữa chương trình Toán Quốc tế với chương trình Toán của Bộ Giáo dục và Đào tạo',
  },
  {
    id: 3,
    code: 'E3',
    courseId: 7,
    gradeId: 3,
    name: 'Exercise 3',
    free: false,
    title: 'Subtraction of 3-digits numbers',
    content: '',
  },
  {
    id: 4,
    code: 'E4',
    courseId: 7,
    gradeId: 3,
    name: 'Exercise 4',
    free: false,
    title: 'Multiplication: 1-digit number by 1-digit number',
    content: '',
  },
  {
    id: 5,
    code: 'E5',
    courseId: 7,
    gradeId: 3,
    name: 'Exercise 5',
    free: false,
    title: 'Multiplication: 2-digits number by 1-digit number',
    content: '',
  },
  { id: 6, code: 'E6', courseId: 7, gradeId: 3, name: 'Exercise 6', free: false, title: 'Division', content: '' },
  { id: 7, code: 'E7', courseId: 7, gradeId: 3, name: 'Exercise 7', free: false, title: 'Factions', content: '' },
  {
    id: 8,
    code: 'E1',
    courseId: 1,
    gradeId: 1,
    name: 'Exercise 1',
    free: false,
    title: 'Subtraction of 3-digits numbers',
    content: '',
  },
  {
    id: 9,
    code: 'E2',
    courseId: 1,
    gradeId: 1,
    name: 'Exercise 2',
    free: false,
    title: 'Multiplication: 1-digit number by 1-digit number',
    content: '',
  },
  {
    id: 10,
    code: 'E3',
    courseId: 1,
    gradeId: 1,
    name: 'Exercise 3',
    free: false,
    title: 'Multiplication: 2-digits number by 1-digit number',
    content: '',
  },
  { id: 11, code: 'E4', courseId: 1, gradeId: 1, name: 'Exercise 4', free: true, title: 'Division', content: '' },
  { id: 13, code: 'E5', courseId: 1, gradeId: 1, name: 'Exercise 5', free: false, title: 'Factions', content: '' },
  { id: 14, code: 'E5', courseId: 1, gradeId: 1, name: 'Exercise 5', free: false, title: 'Factions', content: '' },
  { id: 15, code: 'E5', courseId: 1, gradeId: 1, name: 'Exercise 5', free: false, title: 'Factions', content: '' },
  { id: 16, code: 'E5', courseId: 1, gradeId: 1, name: 'Exercise 5', free: false, title: 'Factions', content: '' },
  { id: 17, code: 'E5', courseId: 1, gradeId: 1, name: 'Exercise 5', free: false, title: 'Factions', content: '' },
  { id: 18, code: 'E5', courseId: 1, gradeId: 1, name: 'Exercise 5', free: false, title: 'Factions', content: '' },
  { id: 19, code: 'E5', courseId: 1, gradeId: 1, name: 'Exercise 5', free: false, title: 'Factions', content: '' },
  { id: 20, code: 'E5', courseId: 1, gradeId: 1, name: 'Exercise 5', free: false, title: 'Factions', content: '' },
  { id: 21, code: 'E5', courseId: 1, gradeId: 1, name: 'Exercise 5', free: false, title: 'Factions', content: '' },
  { id: 22, code: 'E5', courseId: 1, gradeId: 1, name: 'Exercise 5', free: false, title: 'Factions', content: '' },
  { id: 23, code: 'E5', courseId: 1, gradeId: 1, name: 'Exercise 5', free: false, title: 'Factions', content: '' },
];
const getExercisesOfCourse = (courseId) => {
  return dataInit.filter((item) => item.courseId === courseId);
};
const fetchGetExercisesOfCourseRequest = () => {
  return { type: GET_EXERCISES_OF_COURSE_REQUEST };
};
const fetchGetExercisesOfCourseSuccess = (data) => {
  return { type: GET_EXERCISES_OF_COURSE_SUCCESS, payload: data };
};
const fetchGetExercisesOfCourseFailure = (error) => {
  return { type: GET_EXERCISES_OF_COURSE_FAILURE, payload: error.message };
};

//trả về 1 dispatch
export const fetchGetExercisesOfCourse = (courseId) => {
  return (dispatch) => {
    dispatch(fetchGetExercisesOfCourseRequest());

    try {
      const exercises = getExercisesOfCourse(courseId);
      dispatch(fetchGetExercisesOfCourseSuccess(exercises));
    } catch (error) {
      dispatch(fetchGetExercisesOfCourseFailure(error));
    }
  };
};
