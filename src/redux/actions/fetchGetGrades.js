import { GET_GRADES_REQUEST, GET_GRADES_SUCCESS, GET_GRADES_FAILURE } from '../../constant/Action';

const dataInit = [
  { id: 1, name: 'G1' },
  { id: 2, name: 'G2' },
  { id: 3, name: 'G3' },
  { id: 4, name: 'G4' },
  { id: 5, name: 'G5' },
  { id: 6, name: 'G6' },
  { id: 7, name: 'G7' },
  { id: 8, name: 'G8' },
  { id: 9, name: 'G9' },
];

export const fetchGetGradesRequest = () => {
  return (dispatch) => {
    dispatch({ type: GET_GRADES_REQUEST });
  };
};
export const fetchGetGradesSuccess = (data) => {
  return (dispatch) => {
    dispatch({ type: GET_GRADES_SUCCESS, payload: data });
  };
};
export const fetchGetGradesFailure = (error) => {
  return (dispatch) => {
    dispatch({ type: GET_GRADES_FAILURE, payload: error.message });
  };
};

export const fetchGetGrades = () => {
  fetchGetGradesRequest();
  try {
    fetchGetGradesSuccess(dataInit);
  } catch (error) {
    fetchGetGradesFailure(error);
  }
};
