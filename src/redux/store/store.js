import { createStore, combineReducers } from 'redux';
import {
  getGradesReducer,
  getCoursesReducer,
  getPackagesReducer,
  getUsersReducer,
  getUserCoursesReducer,
  getUserLoginReducer,
  getLessonsReducer,
  getLessonsOfUserReducer,
} from '../reducers/dataReducers';
import { setNavigationReducer } from '../reducers/paramReducers';
import middleware from '../middleware/Middleware';

const reducers = combineReducers({
  grades: getGradesReducer,
  courses: getCoursesReducer,
  packages: getPackagesReducer,
  users: getUsersReducer,
  coursesOfUser: getUserCoursesReducer,
  navigation: setNavigationReducer,
  userLogin: getUserLoginReducer,
  lessons: getLessonsReducer,
  lessonsOfUser: getLessonsOfUserReducer,
});
const store = createStore(reducers, middleware);
export default store;
