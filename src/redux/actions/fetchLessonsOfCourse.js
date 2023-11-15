import {
  GET_LESSONS_OF_COURSE_REQUEST,
  GET_LESSONS_OF_COURSE_SUCCESS,
  GET_LESSONS_OF_COURSE_FAILURE,
} from '../../constant/Action';

const dataInit = [
  { id: 1, courseId: 7, gradeId: 3, name: 'Lesson 1', free: true, title: '3-digits numbers', content: '' },
  {
    id: 2,
    courseId: 7,
    gradeId: 3,
    name: 'Lesson 2',
    title: 'Addition of 3-digits numbers',
    content:
      '“Global Maths – Global Citizen” - Khơi nguồn đam mê, phát triển tiềm năng Toán và Khoa học tiếng Anh. Chương trình Toán tiếng Anh GMaths kết hợp giữa chương trình Toán Quốc tế với chương trình Toán của Bộ Giáo dục và Đào tạo',
  },
  {
    id: 3,
    courseId: 7,
    gradeId: 3,
    name: 'Lesson 3',
    free: false,
    title: 'Subtraction of 3-digits numbers',
    content: '',
  },
  {
    id: 4,
    courseId: 7,
    gradeId: 3,
    name: 'Lesson 4',
    free: false,
    title: 'Multiplication: 1-digit number by 1-digit number',
    content: '',
  },
  {
    id: 5,
    courseId: 7,
    gradeId: 3,
    name: 'Lesson 5',
    free: false,
    title: 'Multiplication: 2-digits number by 1-digit number',
    content: '',
  },
  { id: 6, courseId: 7, gradeId: 3, name: 'Lesson 6', free: false, title: 'Division', content: '' },
  { id: 7, courseId: 7, gradeId: 3, name: 'Lesson 7', free: false, title: 'Factions', content: '' },
  {
    id: 8,
    courseId: 1,
    gradeId: 1,
    name: 'Lesson 1',
    free: false,
    title: 'Subtraction of 3-digits numbers',
    content: '',
  },
  {
    id: 9,
    courseId: 1,
    gradeId: 1,
    name: 'Lesson 2',
    free: false,
    title: 'Multiplication: 1-digit number by 1-digit number',
    content: '',
  },
  {
    id: 10,
    courseId: 1,
    gradeId: 1,
    name: 'Lesson 3',
    free: false,
    title: 'Multiplication: 2-digits number by 1-digit number',
    content: '',
  },
  { id: 11, courseId: 1, gradeId: 1, name: 'Lesson 4', free: true, title: 'Division', content: '' },
  { id: 12, courseId: 1, gradeId: 1, name: 'Lesson 5', free: false, title: 'Factions', content: '' },
];
const getLessons = (courseId) => {
  return dataInit.filter((item) => item.courseId === courseId);
};
export const fetchGetLessonsRequest = () => {
  return { type: GET_LESSONS_OF_COURSE_REQUEST };
};
export const fetchGetLessonsSuccess = (data) => {
  return { type: GET_LESSONS_OF_COURSE_SUCCESS, payload: data };
};
export const fetchGetLessonsFailure = (error) => {
  return { type: GET_LESSONS_OF_COURSE_FAILURE, payload: error.message };
};

//trả về 1 dispatch
export const fetchGetLessons = (courseId) => {
  return (dispatch) => {
    dispatch(fetchGetLessonsRequest());
    try {
      const lessons = getLessons(courseId);
      dispatch(fetchGetLessonsSuccess(lessons));
    } catch (error) {
      dispatch(fetchGetLessonsFailure(error));
    }
  };
};
