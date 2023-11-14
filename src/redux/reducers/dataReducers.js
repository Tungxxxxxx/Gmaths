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
  console.log('action', action.type);
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
  console.log('action', action.type);
  switch (action.type) {
    case Action.GET_PACKAGES_REQUEST:
      return { ...state, usersLoading: true, users: [], usersErrorMess: '' };
    case Action.GET_PACKAGES_SUCCESS:
      return { ...state, usersLoading: false, users: action.payload, usersErrorMess: '' };
    case Action.GET_PACKAGES_FAILURE:
      return { ...state, usersLoading: false, users: [], usersErrorMess: action.payload };
    default:
      return state;
  }
};
const initUserCoursesState = {
  usersCoursesLoading: false,
  usersCourses: [],
  usersCoursesErrorMess: '',
};
export const getUserCoursesReducer = (state = initUserCoursesState, action) => {
  console.log('action', action.type);
  switch (action.type) {
    case Action.GET_PACKAGES_REQUEST:
      return { ...state, usersCoursesLoading: true, usersCourses: [], usersCoursesErrorMess: '' };
    case Action.GET_PACKAGES_SUCCESS:
      return { ...state, usersCoursesLoading: false, usersCourses: action.payload, usersCoursesErrorMess: '' };
    case Action.GET_PACKAGES_FAILURE:
      return { ...state, usersCoursesLoading: false, usersCourses: [], usersCoursesErrorMess: action.payload };
    default:
      return state;
  }
};
