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
