import { createStore, combineReducers } from 'redux';
import { getGradesReducer, getCoursesReducer } from '../reducers/dataReducers';
import middleware from '../middleware/Middleware';

const reducers = combineReducers({
  grades: getGradesReducer,
  courses: getCoursesReducer,
});
const store = createStore(reducers, middleware);
export default store;
