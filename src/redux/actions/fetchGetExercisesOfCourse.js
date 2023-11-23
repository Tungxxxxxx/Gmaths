import {
  GET_EXERCISES_OF_COURSE_REQUEST,
  GET_EXERCISES_OF_COURSE_SUCCESS,
  GET_EXERCISES_OF_COURSE_FAILURE,
} from '../../constant/Action';
import { DA_HOAN_THANH, CHUAN_BI, PENDING, NUMBER_OF_LESSON } from '../../constant/Constant';
const dataOfUserInit = [
  { id: 1, exerciseId: 1, courseId: 7, gradeId: 3, userId: 1, status: DA_HOAN_THANH },
  { id: 2, exerciseId: 2, courseId: 7, gradeId: 3, userId: 1, status: PENDING },
  { id: 2, exerciseId: 3, courseId: 7, gradeId: 3, userId: 2, status: CHUAN_BI },
];

const dataOfCourseInit = [
  {
    id: 1,
    dataOfUser: null,
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
    dataOfUser: null,
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
    dataOfUser: null,
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
    dataOfUser: null,
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
    dataOfUser: null,
    code: 'E5',
    courseId: 7,
    gradeId: 3,
    name: 'Exercise 5',
    free: false,
    title: 'Multiplication: 2-digits number by 1-digit number',
    content: '',
  },
  {
    id: 6,
    dataOfUser: null,
    code: 'E6',
    courseId: 7,
    gradeId: 3,
    name: 'Exercise 6',
    free: false,
    title: 'Division',
    content: '',
  },
  {
    id: 7,
    dataOfUser: null,
    code: 'E7',
    courseId: 7,
    gradeId: 3,
    name: 'Exercise 7',
    free: false,
    title: 'Factions',
    content: '',
  },
  {
    id: 8,
    dataOfUser: null,
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
    dataOfUser: null,
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
    dataOfUser: null,
    code: 'E3',
    courseId: 1,
    gradeId: 1,
    name: 'Exercise 3',
    free: false,
    title: 'Multiplication: 2-digits number by 1-digit number',
    content: '',
  },
  {
    id: 11,
    dataOfUser: null,
    code: 'E4',
    courseId: 1,
    gradeId: 1,
    name: 'Exercise 4',
    free: true,
    title: 'Division',
    content: '',
  },
  {
    id: 13,
    dataOfUser: null,
    code: 'E5',
    courseId: 1,
    gradeId: 1,
    name: 'Exercise 5',
    free: false,
    title: 'Factions',
    content: '',
  },
  {
    id: 14,
    dataOfUser: null,
    code: 'E5',
    courseId: 1,
    gradeId: 1,
    name: 'Exercise 5',
    free: false,
    title: 'Factions',
    content: '',
  },
  {
    id: 15,
    dataOfUser: null,
    code: 'E5',
    courseId: 1,
    gradeId: 1,
    name: 'Exercise 5',
    free: false,
    title: 'Factions',
    content: '',
  },
  {
    id: 16,
    dataOfUser: null,
    code: 'E5',
    courseId: 1,
    gradeId: 1,
    name: 'Exercise 5',
    free: false,
    title: 'Factions',
    content: '',
  },
  {
    id: 17,
    dataOfUser: null,
    code: 'E5',
    courseId: 1,
    gradeId: 1,
    name: 'Exercise 5',
    free: false,
    title: 'Factions',
    content: '',
  },
  {
    id: 18,
    dataOfUser: null,
    code: 'E5',
    courseId: 1,
    gradeId: 1,
    name: 'Exercise 5',
    free: false,
    title: 'Factions',
    content: '',
  },
  {
    id: 19,
    dataOfUser: null,
    code: 'E5',
    courseId: 1,
    gradeId: 1,
    name: 'Exercise 5',
    free: false,
    title: 'Factions',
    content: '',
  },
  {
    id: 20,
    dataOfUser: null,
    code: 'E5',
    courseId: 1,
    gradeId: 1,
    name: 'Exercise 5',
    free: false,
    title: 'Factions',
    content: '',
  },
  {
    id: 21,
    dataOfUser: null,
    code: 'E5',
    courseId: 1,
    gradeId: 1,
    name: 'Exercise 5',
    free: false,
    title: 'Factions',
    content: '',
  },
  {
    id: 22,
    dataOfUser: null,
    code: 'E5',
    courseId: 1,
    gradeId: 1,
    name: 'Exercise 5',
    free: false,
    title: 'Factions',
    content: '',
  },
  {
    id: 23,
    dataOfUser: null,
    code: 'E5',
    courseId: 1,
    gradeId: 1,
    name: 'Exercise 5',
    free: false,
    title: 'Factions',
    content: '',
  },
];
const getExercisesOfCourse = (courseId, startIndex, numberOfElement) => {
  return dataOfCourseInit.filter((item) => item.courseId === courseId).splice(startIndex, startIndex + numberOfElement);
};
const getExercisesOfUser = (userId) => {
  return dataOfUserInit.filter((item) => item.userId === userId);
};
const getExercises = (courseId, startIndex, numberOfElement, userId) => {
  let exercisesOfCourse = getExercisesOfCourse(courseId, startIndex, numberOfElement);
  const exercisesOfUser = getExercisesOfUser(userId);

  for (let i = 0; i < exercisesOfUser.length; i++) {
    for (let j = 0; j < exercisesOfCourse.length; j++) {
      if (exercisesOfUser[i].exerciseId === exercisesOfCourse[j].id) {
        exercisesOfCourse[j].dataOfUser = exercisesOfUser[i];
      }
    }
  }
  return exercisesOfCourse;
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
export const fetchGetExercisesOfCourse = (courseId, startIndex, numberOfElement, userId) => {
  return async (dispatch) => {
    await dispatch(fetchGetExercisesOfCourseRequest());

    try {
      // Giả lập thời gian tốn thời gian
      // await new Promise((resolve) => setTimeout(resolve, 500));
      const exercises = getExercises(courseId, startIndex, numberOfElement, userId);
      dispatch(fetchGetExercisesOfCourseSuccess(exercises));
    } catch (error) {
      dispatch(fetchGetExercisesOfCourseFailure(error));
    }
  };
};
