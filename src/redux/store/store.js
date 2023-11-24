import { createStore, combineReducers } from 'redux';
import { getDataReducer } from '../reducers/dataReducers';
import { setParamsReducer } from '../reducers/paramReducers';
import middleware from '../middleware/Middleware';

const reducers = combineReducers({
  params: setParamsReducer,
  data: getDataReducer,
});
const store = createStore(reducers, middleware);
export default store;
