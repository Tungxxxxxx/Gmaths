import {
  GET_TESTS_ONLINE_OF_COURSE_REQUEST,
  GET_TESTS_ONLINE_OF_COURSE_SUCCESS,
  GET_TESTS_ONLINE_OF_COURSE_FAILURE,
} from '../../constant/Action';
import { DA_HOAN_THANH, CHUAN_BI, PENDING } from '../../constant/Constant';
const dataOfUserInit = [
  { id: 1, testOnlineId: 1, courseId: 7, gradeId: 3, userId: 1, status: DA_HOAN_THANH },
  { id: 2, testOnlineId: 2, courseId: 7, gradeId: 3, userId: 1, status: PENDING },
  { id: 2, testOnlineId: 2, courseId: 7, gradeId: 3, userId: 2, status: CHUAN_BI },
];

const dataOfCourseInit = [
  {
    id: 1,
    dataOfUser: null,
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
    dataOfUser: null,
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
    dataOfUser: null,
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
    dataOfUser: null,
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
    dataOfUser: null,
    code: 'T5',
    courseId: 7,
    gradeId: 3,
    name: 'Test Online 5',
    free: false,
    title: 'Multiplication: 2-digits number by 1-digit number',
    content: '',
  },
  {
    id: 6,
    dataOfUser: null,
    code: 'T6',
    courseId: 7,
    gradeId: 3,
    name: 'Test Online 6',
    free: false,
    title: 'Division',
    content: '',
  },
  {
    id: 7,
    dataOfUser: null,
    code: 'T7',
    courseId: 7,
    gradeId: 3,
    name: 'Test Online 7',
    free: false,
    title: 'Factions',
    content: '',
  },
  {
    id: 8,
    dataOfUser: null,
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
    dataOfUser: null,
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
    dataOfUser: null,
    code: 'T3',
    courseId: 1,
    gradeId: 1,
    name: 'Test Online 3',
    free: false,
    title: 'Multiplication: 2-digits number by 1-digit number',
    content: '',
  },
  {
    id: 11,
    dataOfUser: null,
    code: 'T4',
    courseId: 1,
    gradeId: 1,
    name: 'Test Online 4',
    free: true,
    title: 'Division',
    content: '',
  },
  {
    id: 13,
    dataOfUser: null,
    code: 'T5',
    courseId: 1,
    gradeId: 1,
    name: 'Test Online 5',
    free: false,
    title: 'Factions',
    content: '',
  },
  {
    id: 14,
    dataOfUser: null,
    code: 'T5',
    courseId: 1,
    gradeId: 1,
    name: 'Test Online 5',
    free: false,
    title: 'Factions',
    content: '',
  },
  {
    id: 15,
    dataOfUser: null,
    code: 'T5',
    courseId: 1,
    gradeId: 1,
    name: 'Test Online 5',
    free: false,
    title: 'Factions',
    content: '',
  },
  {
    id: 16,
    dataOfUser: null,
    code: 'T5',
    courseId: 1,
    gradeId: 1,
    name: 'Test Online 5',
    free: false,
    title: 'Factions',
    content: '',
  },
  {
    id: 17,
    dataOfUser: null,
    code: 'T5',
    courseId: 1,
    gradeId: 1,
    name: 'Test Online 5',
    free: false,
    title: 'Factions',
    content: '',
  },
  {
    id: 18,
    dataOfUser: null,
    code: 'T5',
    courseId: 1,
    gradeId: 1,
    name: 'Test Online 5',
    free: false,
    title: 'Factions',
    content: '',
  },
  {
    id: 19,
    dataOfUser: null,
    code: 'T5',
    courseId: 1,
    gradeId: 1,
    name: 'Test Online 5',
    free: false,
    title: 'Factions',
    content: '',
  },
  {
    id: 20,
    dataOfUser: null,
    code: 'T5',
    courseId: 1,
    gradeId: 1,
    name: 'Test Online 5',
    free: false,
    title: 'Factions',
    content: '',
  },
  {
    id: 21,
    dataOfUser: null,
    code: 'T5',
    courseId: 1,
    gradeId: 1,
    name: 'Test Online 5',
    free: false,
    title: 'Factions',
    content: '',
  },
  {
    id: 22,
    dataOfUser: null,
    code: 'T5',
    courseId: 1,
    gradeId: 1,
    name: 'Test Online 5',
    free: false,
    title: 'Factions',
    content: '',
  },
  {
    id: 23,
    dataOfUser: null,
    code: 'T5',
    courseId: 1,
    gradeId: 1,
    name: 'Test Online 5',
    free: false,
    title: 'Factions',
    content: '',
  },
];
const getTestsOnlineOfCourse = (courseId, startIndex, numberOfElement) => {
  return dataOfCourseInit.filter((item) => item.courseId === courseId).splice(startIndex, startIndex + numberOfElement);
};
const getTestsOnlineOfUser = (userId) => {
  return dataOfUserInit.filter((item) => item.userId === userId);
};
const getTestsOnline = (courseId, startIndex, numberOfElement, userId) => {
  let testsOnlineOfCourse = getTestsOnlineOfCourse(courseId, startIndex, numberOfElement);
  const testsOnlineOfUser = getTestsOnlineOfUser(userId);

  for (let i = 0; i < testsOnlineOfUser.length; i++) {
    for (let j = 0; j < testsOnlineOfCourse.length; j++) {
      if (testsOnlineOfUser[i].testOnlineId === testsOnlineOfCourse[j].id) {
        testsOnlineOfCourse[j].dataOfUser = testsOnlineOfUser[i];
      }
    }
  }
  return testsOnlineOfCourse;
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
export const fetchGetTestsOnlineOfCourse = (courseId, startIndex, numberOfElement, userId) => {
  return async (dispatch) => {
    await dispatch(fetchGetTestsOnlineOfCourseRequest());
    try {
      // Giả lập thời gian tốn thời gian
      //  await new Promise((resolve) => setTimeout(resolve, 500));
      const testsOnline = getTestsOnline(courseId, startIndex, numberOfElement, userId);
      dispatch(fetchGetTestsOnlineOfCourseSuccess(testsOnline));
    } catch (error) {
      dispatch(fetchGetTestsOnlineOfCourseFailure(error));
    }
  };
};
