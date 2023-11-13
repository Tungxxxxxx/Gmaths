import { GET_PACKAGE_REQUEST, GET_PACKAGE_SUCCESS, GET_PACKAGE_FAILURE } from '../../constant/Action';

const dataInit = [
  { id: 1, courseId: 1, code: 'GM1', name: 'Gói ngày' },
  { id: 2, courseId: 1, code: 'GM7', name: 'Gói 7 ngày' },
  { id: 3, courseId: 1, code: 'GM30', name: 'Gói 30 ngày' },
  { id: 4, courseId: 2, code: 'GM1', name: 'Gói ngày' },
  { id: 5, courseId: 3, code: 'GM1', name: 'Gói ngày' },
  { id: 6, courseId: 4, code: 'GM1', name: 'Gói ngày' },
  { id: 7, courseId: 5, code: 'GM1', name: 'Gói ngày' },
  { id: 8, courseId: 6, code: 'GM1', name: 'Gói ngày' },
];
const getCourses = (courseId) => {
  return dataInit.filter((item) => item.courseId === courseId);
};
//phải trả về 1 đối tượng
export const fetchGetPackageRequest = () => {
  return {
    type: GET_PACKAGE_REQUEST,
  };
};
export const fetchGetPackageSuccess = (data) => {
  return { type: GET_PACKAGE_SUCCESS, payload: data };
};
export const fetchGetPackageFailure = (error) => {
  return { type: GET_PACKAGE_FAILURE, payload: error.message };
};

//trả về 1 dispatch
export const fetchGetPackage = (courseId) => {
  return (dispatch) => {
    dispatch(fetchGetPackageRequest());
    try {
      const courses = courseId === 0 ? dataInit : getCourses(courseId);
      dispatch(fetchGetPackageSuccess(dataInit));
    } catch (error) {
      dispatch(fetchGetPackageFailure(error));
    }
  };
};
