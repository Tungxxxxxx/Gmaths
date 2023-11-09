import { GET_GRADES_REQUEST, GET_GRADES_SUCCESS, GET_GRADES_FAILURE } from '../../constant/Action';

const dataInit = [
  { id: 1, name: 'G1', fullname: 'Grade 1' },
  { id: 2, name: 'G2', fullname: 'Grade 2' },
  { id: 3, name: 'G3', fullname: 'Grade 3' },
  { id: 4, name: 'G4', fullname: 'Grade 4' },
  { id: 5, name: 'G5', fullname: 'Grade 5' },
  { id: 6, name: 'G6', fullname: 'Grade 6' },
  { id: 7, name: 'G7', fullname: 'Grade 7' },
  { id: 8, name: 'G8', fullname: 'Grade 8' },
  { id: 9, name: 'G9', fullname: 'Grade 9' },
];
//phải trả về 1 đối tượng
export const fetchGetGradesRequest = () => {
  return {
    type: GET_GRADES_REQUEST,
  };
};
export const fetchGetGradesSuccess = (data) => {
  return { type: GET_GRADES_SUCCESS, payload: data };
};
export const fetchGetGradesFailure = (error) => {
  return { type: GET_GRADES_FAILURE, payload: error.message };
};

//trả về 1 dispatch
export const fetchGetGrades = () => {
  return (dispatch) => {
    dispatch(fetchGetGradesRequest());
    try {
      dispatch(fetchGetGradesSuccess(dataInit));
    } catch (error) {
      dispatch(fetchGetGradesFailure(error));
    }
  };
};
