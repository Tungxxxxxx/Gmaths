import { GET_PACKAGES_REQUEST, GET_PACKAGES_SUCCESS, GET_PACKAGES_FAILURE } from '../../constant/Action';

const dataInit = [
  {
    id: 1,
    courseId: 1,
    code: 'GM1',
    name: 'Gói ngày',
    price: 5000,
    contents: ['12 bài giảng', '16 bài tập ôn luyện', '8 đề thi nâng cao'],
  },
  {
    id: 2,
    courseId: 1,
    code: 'GM7',
    name: 'Gói 7 ngày',
    price: 30000,
    contents: ['12 bài giảng', '16 bài tập ôn luyện', '8 đề thi nâng cao'],
  },
  {
    id: 3,
    courseId: 1,
    code: 'GM30',
    name: 'Gói 30 ngày',
    price: 120000,
    contents: ['12 bài giảng', '16 bài tập ôn luyện', '8 đề thi nâng cao'],
  },
  {
    id: 4,
    courseId: 2,
    code: 'GM1',
    name: 'Gói ngày',
    price: 5000,
    contents: ['12 bài giảng', '16 bài tập ôn luyện', '8 đề thi nâng cao'],
  },
  {
    id: 5,
    courseId: 3,
    code: 'GM1',
    name: 'Gói ngày',
    price: 5000,
    contents: ['12 bài giảng', '16 bài tập ôn luyện', '8 đề thi nâng cao'],
  },
  {
    id: 6,
    courseId: 4,
    code: 'GM1',
    name: 'Gói ngày',
    price: 5000,
    contents: ['12 bài giảng', '16 bài tập ôn luyện', '8 đề thi nâng cao'],
  },
  {
    id: 7,
    courseId: 5,
    code: 'GM1',
    name: 'Gói ngày',
    price: 5000,
    contents: ['12 bài giảng', '16 bài tập ôn luyện', '8 đề thi nâng cao'],
  },
  {
    id: 8,
    courseId: 6,
    code: 'GM1',
    name: 'Gói ngày',
    price: 5000,
    contents: ['12 bài giảng', '16 bài tập ôn luyện', '8 đề thi nâng cao'],
  },
];
const getPackages = (courseId) => {
  return dataInit.filter((item) => item.courseId === courseId);
};
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
export const fetchGetPackages = (courseId) => {
  return (dispatch) => {
    dispatch(fetchGetPackagesRequest());
    try {
      const packages = !courseId ? [] : getPackages(courseId);
      console.log('fetchGetPackages', packages);
      dispatch(fetchGetPackagesSuccess(packages));
    } catch (error) {
      dispatch(fetchGetPackagesFailure(error));
    }
  };
};
