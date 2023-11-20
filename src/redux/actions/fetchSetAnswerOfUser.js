import {
  SET_QUESTIONS_OF_USER_REQUEST,
  SET_QUESTIONS_OF_USER_SUCCESS,
  SET_QUESTIONS_OF_USER_FAILURE,
} from '../../constant/Action';
const dataInit = [
  { id: 1, questionId: 1, courseId: 7, userId: 1, answer: null },
  { id: 2, questionId: 2, courseId: 7, userId: 1, answer: null },
  { id: 3, questionId: 3, courseId: 7, userId: 1, answer: null },
  { id: 4, questionId: 4, courseId: 7, userId: 1, answer: null },
  { id: 5, questionId: 4, courseId: 7, userId: 2, answer: null },
];
const setQuestionsOfUser = (userId, questionId, answer) => {
  const questionsFound = dataInit.filter((item) => item.userId === userId && item.questionId === questionId);
};
export const fetchSetQuestionsOfUserRequest = () => {
  return { type: SET_QUESTIONS_OF_USER_REQUEST };
};
export const fetchSetQuestionsOfUserSuccess = (data) => {
  return { type: SET_QUESTIONS_OF_USER_SUCCESS, payload: data };
};
export const fetchSetQuestionsOfUserFailure = (error) => {
  return { type: SET_QUESTIONS_OF_USER_FAILURE, payload: error.message };
};

//trả về 1 dispatch
export const fetchSetQuestionsOfUser = (userId) => {
  return (dispatch) => {
    dispatch(fetchSetQuestionsOfUserRequest());
    try {
      const questions = !userId || userId === 0 ? [] : setQuestionsOfUser(userId);
      dispatch(fetchSetQuestionsOfUserSuccess(questions));
    } catch (error) {
      dispatch(fetchSetQuestionsOfUserFailure(error));
    }
  };
};
