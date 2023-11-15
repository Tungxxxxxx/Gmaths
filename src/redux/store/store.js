import { createStore, combineReducers } from 'redux';
import {
  getGradesReducer,
  getCoursesReducer,
  getPackagesReducer,
  getUsersReducer,
  getUserCoursesReducer,
} from '../reducers/dataReducers';
import { setNavigationReducer } from '../reducers/paramReducers';
import middleware from '../middleware/Middleware';

const reducers = combineReducers({
  grades: getGradesReducer,
  courses: getCoursesReducer,
  packages: getPackagesReducer,
  users: getUsersReducer,
  userCourses: getUserCoursesReducer,
  navigation: setNavigationReducer,
});
const store = createStore(reducers, middleware);
export default store;
