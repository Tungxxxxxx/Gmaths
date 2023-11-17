import {
  GET_TESTS_ONLINE_OF_COURSE_REQUEST,
  GET_TESTS_ONLINE_OF_COURSE_SUCCESS,
  GET_TESTS_ONLINE_OF_COURSE_FAILURE,
} from '../../constant/Action';

const dataInit = [
  {
    id: 1,
    code: 'T1',
    courseId: 7,
    gradeId: 3,
    name: 'Test Online 1',
    free: true,
    title: '3-digits numbers',
    content: '',
  },
  {
    id: 2,
    code: 'T2',
    courseId: 7,
    gradeId: 3,
    name: 'Test Online 2',
    title: 'Addition of 3-digits numbers',
    content:
      '“Global Maths – Global Citizen” - Khơi nguồn đam mê, phát triển tiềm năng Toán và Khoa học tiếng Anh. Chương trình Toán tiếng Anh GMaths kết hợp giữa chương trình Toán Quốc tế với chương trình Toán của Bộ Giáo dục và Đào tạo',
  },
  {
    id: 3,
    code: 'T3',
    courseId: 7,
    gradeId: 3,
    name: 'Test Online 3',
    free: false,
    title: 'Subtraction of 3-digits numbers',
    content: '',
  },
  {
    id: 4,
    code: 'T4',
    courseId: 7,
    gradeId: 3,
    name: 'Test Online 4',
    free: false,
    title: 'Multiplication: 1-digit number by 1-digit number',
    content: '',
  },
  {
    id: 5,
    code: 'T5',
    courseId: 7,
    gradeId: 3,
    name: 'Test Online 5',
    free: false,
    title: 'Multiplication: 2-digits number by 1-digit number',
    content: '',
  },
  { id: 6, code: 'T6', courseId: 7, gradeId: 3, name: 'Test Online 6', free: false, title: 'Division', content: '' },
  { id: 7, code: 'T7', courseId: 7, gradeId: 3, name: 'Test Online 7', free: false, title: 'Factions', content: '' },
  {
    id: 8,
    code: 'T1',
    courseId: 1,
    gradeId: 1,
    name: 'Test Online 1',
    free: false,
    title: 'Subtraction of 3-digits numbers',
    content: '',
  },
  {
    id: 9,
    code: 'T2',
    courseId: 1,
    gradeId: 1,
    name: 'Test Online 2',
    free: false,
    title: 'Multiplication: 1-digit number by 1-digit number',
    content: '',
  },
  {
    id: 10,
    code: 'T3',
    courseId: 1,
    gradeId: 1,
    name: 'Test Online 3',
    free: false,
    title: 'Multiplication: 2-digits number by 1-digit number',
    content: '',
  },
  { id: 11, code: 'T4', courseId: 1, gradeId: 1, name: 'Test Online 4', free: true, title: 'Division', content: '' },
  { id: 13, code: 'T5', courseId: 1, gradeId: 1, name: 'Test Online 5', free: false, title: 'Factions', content: '' },
  { id: 14, code: 'T5', courseId: 1, gradeId: 1, name: 'Test Online 5', free: false, title: 'Factions', content: '' },
  { id: 15, code: 'T5', courseId: 1, gradeId: 1, name: 'Test Online 5', free: false, title: 'Factions', content: '' },
  { id: 16, code: 'T5', courseId: 1, gradeId: 1, name: 'Test Online 5', free: false, title: 'Factions', content: '' },
  { id: 17, code: 'T5', courseId: 1, gradeId: 1, name: 'Test Online 5', free: false, title: 'Factions', content: '' },
  { id: 18, code: 'T5', courseId: 1, gradeId: 1, name: 'Test Online 5', free: false, title: 'Factions', content: '' },
  { id: 19, code: 'T5', courseId: 1, gradeId: 1, name: 'Test Online 5', free: false, title: 'Factions', content: '' },
  { id: 20, code: 'T5', courseId: 1, gradeId: 1, name: 'Test Online 5', free: false, title: 'Factions', content: '' },
  { id: 21, code: 'T5', courseId: 1, gradeId: 1, name: 'Test Online 5', free: false, title: 'Factions', content: '' },
  { id: 22, code: 'T5', courseId: 1, gradeId: 1, name: 'Test Online 5', free: false, title: 'Factions', content: '' },
  { id: 23, code: 'T5', courseId: 1, gradeId: 1, name: 'Test Online 5', free: false, title: 'Factions', content: '' },
];
const getTestsOnlineOfCourse = (courseId) => {
  return dataInit.filter((item) => item.courseId === courseId);
};
const fetchGetTestsOnlineOfCourseRequest = () => {
  return { type: GET_TESTS_ONLINE_OF_COURSE_REQUEST };
};
const fetchGetTestsOnlineOfCourseSuccess = (data) => {
  return { type: GET_TESTS_ONLINE_OF_COURSE_SUCCESS, payload: data };
};
const fetchGetTestsOnlineOfCourseFailure = (error) => {
  return { type: GET_TESTS_ONLINE_OF_COURSE_FAILURE, payload: error.message };
};

//trả về 1 dispatch
export const fetchGetTestsOnlineOfCourse = (courseId) => {
  return (dispatch) => {
    dispatch(fetchGetTestsOnlineOfCourseRequest());
    try {
      const testsOnline = getTestsOnlineOfCourse(courseId);
      dispatch(fetchGetTestsOnlineOfCourseSuccess(testsOnline));
    } catch (error) {
      dispatch(fetchGetTestsOnlineOfCourseFailure(error));
    }
  };
};
