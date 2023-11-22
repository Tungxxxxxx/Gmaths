import * as Action from '../../constant/Action';

const initState = {
  loading: false,
  grades: [],
  courses: [],
  packages: [],
  users: [],
  coursesOfUser: [],
  lessons: [],
  exercisesOfCourse: [],
  testsOnlineOfCourse: [],
  errorMess: '',
  userLogin: null,
};
export const getDataReducer = (state = initState, action) => {
  switch (action.type) {
    case Action.GET_GRADES_REQUEST:
      return { ...state, loading: true, grades: [], errorMess: '' };
    case Action.GET_GRADES_SUCCESS:
      return { ...state, loading: false, grades: action.payload, errorMess: '' };
    case Action.GET_GRADES_FAILURE:
      return { ...state, loading: false, grades: [], errorMess: action.payload };
    case Action.GET_COURSES_REQUEST:
      return { ...state, loading: true, courses: [], errorMess: '' };
    case Action.GET_COURSES_SUCCESS:
      return { ...state, loading: false, courses: action.payload, errorMess: '' };
    case Action.GET_COURSES_FAILURE:
      return { ...state, loading: false, courses: [], errorMess: action.payload };
    case Action.GET_PACKAGES_REQUEST:
      return { ...state, loading: true, packages: [], errorMess: '' };
    case Action.GET_PACKAGES_SUCCESS:
      return { ...state, loading: false, packages: action.payload, errorMess: '' };
    case Action.GET_PACKAGES_FAILURE:
      return { ...state, loading: false, packages: [], errorMess: action.payload };
    case Action.GET_USERS_REQUEST:
      return { ...state, loading: true, users: [], errorMess: '' };
    case Action.GET_USERS_SUCCESS:
      return { ...state, loading: false, users: action.payload, errorMess: '' };
    case Action.GET_USERS_FAILURE:
      return { ...state, loading: false, users: [], errorMess: action.payload };
    case Action.GET_USER_LOGIN_REQUEST:
      return { ...state, loading: true, userLogin: null, errorMess: '' };
    case Action.GET_USER_LOGIN_SUCCESS:
      return { ...state, loading: false, userLogin: action.payload, errorMess: '' };
    case Action.GET_USER_LOGIN_FAILURE:
      return { ...state, loading: false, userLogin: null, errorMess: action.payload };
    case Action.GET_COURSES_OF_USER_REQUEST:
      return { ...state, loading: true, coursesOfUser: [], errorMess: '' };
    case Action.GET_COURSES_OF_USER_SUCCESS:
      return { ...state, loading: false, coursesOfUser: action.payload, errorMess: '' };
    case Action.GET_COURSES_OF_USER_FAILURE:
      return { ...state, loading: false, coursesOfUser: [], errorMess: action.payload };
    case Action.GET_LESSONS_OF_COURSE_REQUEST:
      return { ...state, loading: true, lessons: [], errorMess: '' };
    case Action.GET_LESSONS_OF_COURSE_SUCCESS:
      return { ...state, loading: false, lessons: action.payload, errorMess: '' };
    case Action.GET_LESSONS_OF_COURSE_FAILURE:
      return { ...state, loading: false, lessons: [], errorMess: action.payload };
    case Action.GET_EXERCISES_OF_COURSE_REQUEST:
      return { ...state, loading: true, exercisesOfCourse: [], errorMess: '' };
    case Action.GET_EXERCISES_OF_COURSE_SUCCESS:
      return {
        ...state,
        loading: false,
        exercisesOfCourse: action.payload,
        errorMess: '',
      };

    case Action.GET_EXERCISES_OF_COURSE_FAILURE:
      return {
        ...state,
        loading: false,
        exercisesOfCourse: [],
        errorMess: action.payload,
      };
    case Action.GET_TESTS_ONLINE_OF_COURSE_REQUEST:
      return { ...state, loading: true, testsOnlineOfCourse: [], errorMess: '' };
    case Action.GET_TESTS_ONLINE_OF_COURSE_SUCCESS:
      return {
        ...state,
        loading: false,
        testsOnlineOfCourse: action.payload,
        errorMess: '',
      };
    case Action.GET_TESTS_ONLINE_OF_COURSE_FAILURE:
      return {
        ...state,
        loading: false,
        testsOnlineOfCourse: [],
        errorMess: action.payload,
      };

    default:
      return state;
  }
};
