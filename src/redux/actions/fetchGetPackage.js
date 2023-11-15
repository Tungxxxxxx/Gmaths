import { GET_PACKAGES_REQUEST, GET_PACKAGES_SUCCESS, GET_PACKAGES_FAILURE } from '../../constant/Action';

const dataInit = [
  {
    id: 1,
    courseId: 1,
    code: 'GM1',
    name: 'Gói ngày',
    price: 5000,
    contents: [
      { id: 1, content: '12 bài giảng' },
      { id: 2, content: '16 bài tập ôn luyện' },
      { id: 3, content: '8 đề thi nâng cao' },
    ],
  },
  {
    id: 2,
    courseId: 1,
    code: 'GM7',
    name: 'Gói 7 ngày',
    price: 30000,
    contents: [
      { id: 1, content: '12 bài giảng' },
      { id: 2, content: '16 bài tập ôn luyện' },
      { id: 3, content: '8 đề thi nâng cao' },
    ],
  },
  {
    id: 3,
    courseId: 1,
    code: 'GM30',
    name: 'Gói 30 ngày',
    price: 120000,
    contents: [
      { id: 1, content: '12 bài giảng' },
      { id: 2, content: '16 bài tập ôn luyện' },
      { id: 3, content: '8 đề thi nâng cao' },
    ],
  },
];

//phải trả về 1 đối tượng
const fetchGetPackagesRequest = () => {
  return {
    type: GET_PACKAGES_REQUEST,
  };
};
const fetchGetPackagesSuccess = (data) => {
  return { type: GET_PACKAGES_SUCCESS, payload: data };
};
const fetchGetPackagesFailure = (error) => {
  return { type: GET_PACKAGES_FAILURE, payload: error.message };
};

//trả về 1 dispatch
export const fetchGetPackages = () => {
  return (dispatch) => {
    dispatch(fetchGetPackagesRequest());
    try {
      dispatch(fetchGetPackagesSuccess(dataInit));
    } catch (error) {
      dispatch(fetchGetPackagesFailure(error));
    }
  };
};
