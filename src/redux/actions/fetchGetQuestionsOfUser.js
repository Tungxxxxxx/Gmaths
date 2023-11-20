import {
  GET_QUESTIONS_OF_USER_REQUEST,
  GET_QUESTIONS_OF_USER_SUCCESS,
  GET_QUESTIONS_OF_USER_FAILURE,
} from '../../constant/Action';
const dataInit = [
  { id: 1, questionId: 1, courseId: 7, userId: 1, answer: null },
  { id: 2, questionId: 2, courseId: 7, userId: 1, answer: null },
  { id: 3, questionId: 3, courseId: 7, userId: 1, answer: null },
  { id: 4, questionId: 4, courseId: 7, userId: 1, answer: null },
  { id: 5, questionId: 4, courseId: 7, userId: 2, answer: null },
];
const getQuestionsOfUser = (userId) => {
  return dataInit.filter((item) => item.userId === userId);
};
export const fetchGetQuestionsOfUserRequest = () => {
  return { type: GET_QUESTIONS_OF_USER_REQUEST };
};
export const fetchGetQuestionsOfUserSuccess = (data) => {
  return { type: GET_QUESTIONS_OF_USER_SUCCESS, payload: data };
};
export const fetchGetQuestionsOfUserFailure = (error) => {
  return { type: GET_QUESTIONS_OF_USER_FAILURE, payload: error.message };
};

//trả về 1 dispatch
export const fetchGetQuestionsOfUser = (userId) => {
  return (dispatch) => {
    dispatch(fetchGetQuestionsOfUserRequest());
    try {
      const questions = !userId || userId === 0 ? [] : getQuestionsOfUser(userId);
      dispatch(fetchGetQuestionsOfUserSuccess(questions));
    } catch (error) {
      dispatch(fetchGetQuestionsOfUserFailure(error));
    }
  };
};
