import {
  GET_EXERCISES_OF_USER_REQUEST,
  GET_EXERCISES_OF_USER_SUCCESS,
  GET_EXERCISES_OF_USER_FAILURE,
} from '../../constant/Action';
import { DA_HOAN_THANH, CHUAN_BI, PENDING } from '../../constant/Constant';
const dataInit = [
  { id: 1, exerciseId: 1, courseId: 7, gradeId: 3, userId: 1, status: DA_HOAN_THANH },
  { id: 2, exerciseId: 2, courseId: 7, gradeId: 3, userId: 1, status: PENDING },
  { id: 2, exerciseId: 3, courseId: 7, gradeId: 3, userId: 2, status: CHUAN_BI },
];
const getExercisesOfUser = (userId) => {
  return dataInit.filter((item) => item.userId === userId);
};
export const fetchGetExercisesOfUserRequest = () => {
  return { type: GET_EXERCISES_OF_USER_REQUEST };
};
export const fetchGetExercisesOfUserSuccess = (data) => {
  return { type: GET_EXERCISES_OF_USER_SUCCESS, payload: data };
};
export const fetchGetExercisesOfUserFailure = (error) => {
  return { type: GET_EXERCISES_OF_USER_FAILURE, payload: error.message };
};

//trả về 1 dispatch
export const fetchGetExercisesOfUser = (userId) => {
  return (dispatch) => {
    dispatch(fetchGetExercisesOfUserRequest());
    try {
      const exercisesOfUser = !userId || userId === 0 ? [] : getExercisesOfUser(userId);
      dispatch(fetchGetExercisesOfUserSuccess(exercisesOfUser));
    } catch (error) {
      dispatch(fetchGetExercisesOfUserFailure(error));
    }
  };
};
