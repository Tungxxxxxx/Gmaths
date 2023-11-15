import * as Action from '../../constant/Action';
const initGradesState = {
  gradesLoading: false,
  grades: [],
  gradesErrorMess: '',
};
export const getGradesReducer = (state = initGradesState, action) => {
  switch (action.type) {
    case Action.GET_GRADES_REQUEST:
      return { ...state, gradesLoading: true, grades: [], gradesErrorMess: '' };
    case Action.GET_GRADES_SUCCESS:
      return { ...state, gradesLoading: false, grades: action.payload, gradesErrorMess: '' };
    case Action.GET_GRADES_FAILURE:
      return { ...state, gradesLoading: false, grades: [], gradesErrorMess: action.payload };
    default:
      return state;
  }
};
const initCoursesState = {
  coursesLoading: false,
  courses: [],
  coursesErrorMess: '',
};
export const getCoursesReducer = (state = initCoursesState, action) => {
  switch (action.type) {
    case Action.GET_COURSES_REQUEST:
      return { ...state, coursesLoading: true, courses: [], coursesErrorMess: '' };
    case Action.GET_COURSES_SUCCESS:
      return { ...state, coursesLoading: false, courses: action.payload, coursesErrorMess: '' };
    case Action.GET_COURSES_FAILURE:
      return { ...state, coursesLoading: false, courses: [], coursesErrorMess: action.payload };
    default:
      return state;
  }
};
const initPackageState = {
  packagesLoading: false,
  packages: [],
  packagesErrorMess: '',
};
export const getPackagesReducer = (state = initPackageState, action) => {
  switch (action.type) {
    case Action.GET_PACKAGES_REQUEST:
      return { ...state, packagesLoading: true, packages: [], packagesErrorMess: '' };
    case Action.GET_PACKAGES_SUCCESS:
      return { ...state, packagesLoading: false, packages: action.payload, packagesErrorMess: '' };
    case Action.GET_PACKAGES_FAILURE:
      return { ...state, packagesLoading: false, packages: [], packagesErrorMess: action.payload };
    default:
      return state;
  }
};
const initUserState = {
  usersLoading: false,
  users: [],
  usersErrorMess: '',
};
export const getUsersReducer = (state = initUserState, action) => {
  switch (action.type) {
    case Action.GET_USERS_REQUEST:
      return { ...state, usersLoading: true, users: [], usersErrorMess: '' };
    case Action.GET_USERS_SUCCESS:
      return { ...state, usersLoading: false, users: action.payload, usersErrorMess: '' };
    case Action.GET_USERS_FAILURE:
      return { ...state, usersLoading: false, users: [], usersErrorMess: action.payload };
    default:
      return state;
  }
};
const initUserLoginState = {
  userLoginLoading: false,
  userLogin: null,
  userLoginErrorMess: '',
};
export const getUserLoginReducer = (state = initUserLoginState, action) => {
  switch (action.type) {
    case Action.GET_USER_LOGIN_REQUEST:
      return { ...state, userLoginLoading: true, userLogin: null, userLoginErrorMess: '' };
    case Action.GET_USER_LOGIN_SUCCESS:
      return { ...state, userLoginLoading: false, userLogin: action.payload, userLoginErrorMess: '' };
    case Action.GET_USER_LOGIN_FAILURE:
      return { ...state, userLoginLoading: false, userLogin: null, userLoginErrorMess: action.payload };
    default:
      return state;
  }
};
const initUserCoursesState = {
  coursesOfUserLoading: false,
  coursesOfUser: [],
  coursesOfUserErrorMess: '',
};
export const getUserCoursesReducer = (state = initUserCoursesState, action) => {
  switch (action.type) {
    case Action.GET_COURSES_OF_USER_REQUEST:
      return { ...state, coursesOfUserLoading: true, coursesOfUser: [], coursesOfUserErrorMess: '' };
    case Action.GET_COURSES_OF_USER_SUCCESS:
      return { ...state, coursesOfUserLoading: false, coursesOfUser: action.payload, coursesOfUserErrorMess: '' };
    case Action.GET_COURSES_OF_USER_FAILURE:
      return { ...state, coursesOfUserLoading: false, coursesOfUser: [], coursesOfUserErrorMess: action.payload };
    default:
      return state;
  }
};
const initLessonsState = {
  lessonsLoading: false,
  lessons: [],
  lessonsErrorMess: '',
};
export const getLessonsReducer = (state = initLessonsState, action) => {
  switch (action.type) {
    case Action.GET_LESSONS_OF_COURSE_REQUEST:
      return { ...state, lessonsLoading: true, lessons: [], lessonsErrorMess: '' };
    case Action.GET_LESSONS_OF_COURSE_SUCCESS:
      return { ...state, lessonsLoading: false, lessons: action.payload, lessonsErrorMess: '' };
    case Action.GET_LESSONS_OF_COURSE_FAILURE:
      return { ...state, lessonsLoading: false, lessons: [], lessonsErrorMess: action.payload };
    default:
      return state;
  }
};
const initLessonsOfUserState = {
  lessonsOfUserLoading: false,
  lessonsOfUser: [],
  lessonsOfUserErrorMess: '',
};
export const getLessonsOfUserReducer = (state = initLessonsOfUserState, action) => {
  switch (action.type) {
    case Action.GET_LESSONS_OF_COURSE_REQUEST:
      return { ...state, lessonsOfUserLoading: true, lessonsOfUser: [], lessonsOfUserErrorMess: '' };
    case Action.GET_LESSONS_OF_COURSE_SUCCESS:
      return { ...state, lessonsOfUserLoading: false, lessonsOfUser: action.payload, lessonsOfUserErrorMess: '' };
    case Action.GET_LESSONS_OF_COURSE_FAILURE:
      return { ...state, lessonsOfUserLoading: false, lessonsOfUser: [], lessonsOfUserErrorMess: action.payload };
    default:
      return state;
  }
};
