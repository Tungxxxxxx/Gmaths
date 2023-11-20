import {
  GET_QUESTIONS_OF_EXERCISE_REQUEST,
  GET_QUESTIONS_OF_EXERCISE_SUCCESS,
  GET_QUESTIONS_OF_EXERCISE_FAILURE,
} from '../../constant/Action';
const dataInit = [
  {
    id: 1,
    exerciseId: 2,
    courseId: 7,
    gradeId: 3,
    number: 1,
    image: require('../../assets/images/questions/question1.jpg'),
    result: 57,
    answers: [34, 12, 57, 23, 44, 55],
  },
  {
    id: 2,
    exerciseId: 2,
    courseId: 7,
    gradeId: 3,
    image: require('../../assets/images/questions/question2.jpg'),
    result: 4,
    answers: [1, 2, 3, 4, 5, 6],
  },
  {
    id: 3,
    exerciseId: 2,
    courseId: 7,
    gradeId: 3,
    image: require('../../assets/images/questions/question3.jpg'),
    result: 6,
    answers: [22, 5, 8, 2, 6, 1],
  },
  {
    id: 4,
    exerciseId: 1,
    courseId: 7,
    gradeId: 3,
    image: require('../../assets/images/questions/question3.jpg'),
    result: 6,
    answers: [22, 5, 8, 2, 6, 1],
  },
];
const getQuestionsOfExercise = (exeId) => {
  return dataInit.filter((item) => item.exerciseId === exeId);
};
export const fetchGetQuestionsOfExerciseRequest = () => {
  return { type: GET_QUESTIONS_OF_EXERCISE_REQUEST };
};
export const fetchGetQuestionsOfExerciseSuccess = (data) => {
  return { type: GET_QUESTIONS_OF_EXERCISE_SUCCESS, payload: data };
};
export const fetchGetQuestionsOfExerciseFailure = (error) => {
  return { type: GET_QUESTIONS_OF_EXERCISE_FAILURE, payload: error.message };
};

//trả về 1 dispatch
export const fetchGetQuestionsOfExercise = (exeId) => {
  return (dispatch) => {
    dispatch(fetchGetQuestionsOfExerciseRequest());
    try {
      const questions = !exeId || exeId === 0 ? [] : getQuestionsOfExercise(exeId);
      dispatch(fetchGetQuestionsOfExerciseSuccess(questions));
    } catch (error) {
      dispatch(fetchGetQuestionsOfExerciseFailure(error));
    }
  };
};
