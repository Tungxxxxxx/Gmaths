import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, FlatList, RefreshControl, ActivityIndicator } from 'react-native';
import {
  DA_HOAN_THANH,
  CHUAN_BI,
  PENDING,
  NUMBER_OF_LESSON,
  LESSON,
  EXERCISE,
  TEST_ONLINE,
} from '../../constant/Constant';
import { fetchGetLessons } from '../../redux/actions/fetchLessonsOfCourse';
import { fetchGetExercisesOfCourse } from '../../redux/actions/fetchGetExercisesOfCourse';
import { fetchGetTestsOnlineOfCourse } from '../../redux/actions/fetchGetTestsOnlineOfCourse';
import { connect } from 'react-redux';
import * as colors from '../../color/Color';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome6';
import LoadingModal from '../../components/loading/LoadingModal';
class LessonList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isFetchData: false, dataOfCourse: [], refreshing: false, isLoading: false };
    this.startIndex = 0;
  }

  replaceString = (parentString, searchString, replacementString) => {
    return parentString.replace(new RegExp(searchString, 'g'), replacementString);
  };
  handleGoDetail = (name, title, content) => {
    const { cateActive, userLogin } = this.props;
    if (userLogin) {
      const params = { title: name + ': ' + title, content: content };
      if (cateActive === LESSON) {
        this.props.navigation.navigate('LessonDetail', params);
      }
      if (cateActive === EXERCISE) {
        this.props.navigation.navigate('ExerciseDetail', params);
      }
      if (cateActive === TEST_ONLINE) {
        const paramsTestOnline = {
          title: this.replaceString(name, 'Test Online', 'Exercise') + ': ' + title,
          isTestOnline: true,
        };
        this.props.navigation.navigate('ExerciseDetail', paramsTestOnline);
      }
    } else {
      // this.props.updateModal(BUY_COURSE);
      return;
    }
  };
  handleOnEndReached = async () => {
    this.setState({ isFetchData: true }, () => {
      this.updateStartIndex().then(() => {
        this.setState({ isFetchData: false });
      });
    });
  };
  resetStartIndex = () => {
    this.startIndex = 0;
  };
  updateStartIndex = async () => {
    const { userLogin, cateActive, courseId } = this.props;
    this.startIndex = this.startIndex + NUMBER_OF_LESSON;
    let concatData = [];
    if (cateActive === LESSON) {
      await this.props.fetchGetLessons(courseId, this.startIndex, NUMBER_OF_LESSON, userLogin.id);
      concatData = this.props.lessons;
    }
    if (cateActive === EXERCISE) {
      await this.props.fetchGetExercisesOfCourse(courseId, this.startIndex, NUMBER_OF_LESSON, userLogin.id);
      concatData = this.props.exercisesOfCourse;
    }
    if (cateActive === TEST_ONLINE) {
      await this.props.fetchGetTestsOnlineOfCourse(courseId, this.startIndex, NUMBER_OF_LESSON, userLogin.id);
      concatData = this.props.testsOnlineOfCourse;
    }
    if (!concatData || concatData.length < 1) {
      return;
    }
    this.setState((prevState) => {
      return {
        dataOfCourse: prevState.dataOfCourse.concat(concatData),
      };
    });
  };

  showDataList = async () => {
    const { courseId, cateActive } = this.props;
    const { userLogin, fetchGetLessons, fetchGetExercisesOfCourse, fetchGetTestsOnlineOfCourse } = this.props;
    let data = [];
    if (cateActive === LESSON) {
      await fetchGetLessons(courseId, 0, NUMBER_OF_LESSON, userLogin.id);
      data = this.props.lessons;
    }
    if (cateActive === EXERCISE) {
      await fetchGetExercisesOfCourse(courseId, 0, NUMBER_OF_LESSON, userLogin.id);
      data = this.props.exercisesOfCourse;
    }
    if (cateActive === TEST_ONLINE) {
      await fetchGetTestsOnlineOfCourse(courseId, 0, NUMBER_OF_LESSON, userLogin.id);
      data = this.props.testsOnlineOfCourse;
    }
    this.setState({
      dataOfCourse: data,
    });
  };
  handleOnRefresh = () => {
    this.resetStartIndex();
    this.setState(
      {
        refreshing: true,
      },
      () => {
        this.showDataList().then(() => {
          this.setState({
            refreshing: false,
          });
        });
      },
    );
  };
  async componentDidMount() {
    const { userLogin, courseId, fetchGetLessons, cateActive } = this.props;
    let data = [];
    if (cateActive === LESSON) {
      await fetchGetLessons(courseId, 0, NUMBER_OF_LESSON, userLogin.id);
      data = this.props.lessons;
    }
    this.setState({
      dataOfCourse: data,
    });
  }
  render() {
    const { loading } = this.props;
    const { dataOfCourse, refreshing, isFetchData } = this.state;
    return (
      <>
        {/* {loading && !refreshing && !isFetchData ? : null} */}
        <LoadingModal visible={loading && !refreshing && !isFetchData} />
        <FlatList
          style={{ flex: 1, paddingHorizontal: 16 }}
          showsVerticalScrollIndicator={false}
          data={dataOfCourse}
          numColumns={1}
          keyExtractor={(item) => item.id.toString()}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => {
                this.handleOnRefresh();
              }}
            />
          }
          onEndReached={() => {
            console.log('onEndReached');
            this.handleOnEndReached();
          }}
          onEndReachedThreshold={0.1}
          // ListFooterComponent={<LoadingModal visible={isFetchData} />}
          renderItem={({ item, index }) => {
            const dataSingleOfCourse = item.dataOfUser;
            return (
              <TouchableOpacity
                style={styles.childCourses}
                onPress={() => {
                  this.handleGoDetail(item.name, item.title, item.content);
                }}
              >
                {item.free && (
                  <View style={styles.freeContainer}>
                    <Text style={styles.txtFree}>FREE</Text>
                  </View>
                )}
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View
                    style={[
                      styles.courseTxtAvatar,
                      {
                        backgroundColor: !dataSingleOfCourse
                          ? colors.coursesNotRegisteredBg
                          : dataSingleOfCourse.status === DA_HOAN_THANH
                          ? colors.coursesCompleted
                          : dataSingleOfCourse.status === CHUAN_BI || dataSingleOfCourse.status === PENDING
                          ? colors.coursesPreparingBg
                          : null,
                        borderColor: !dataSingleOfCourse
                          ? colors.coursesNotRegisteredBorder
                          : dataSingleOfCourse.status === DA_HOAN_THANH
                          ? colors.coursesCompletedBorder
                          : dataSingleOfCourse.status === CHUAN_BI || dataSingleOfCourse.status === PENDING
                          ? colors.coursesPreparingBorder
                          : null,
                      },
                    ]}
                  >
                    {!dataSingleOfCourse ? (
                      <Text style={[styles.txtAvatar, { color: [0, 1, 2, 3].includes(index) ? '#42A5F5' : '#1976D2' }]}>
                        {item.code}
                      </Text>
                    ) : dataSingleOfCourse.status === DA_HOAN_THANH ? (
                      <Ionicons style={styles.checkIcon} size={24} color={'#34C759'} name="checkmark-sharp" />
                    ) : dataSingleOfCourse.status === CHUAN_BI ? (
                      <Ionicons style={styles.checkIcon} size={24} color={'#FF9500'} name="play" />
                    ) : dataSingleOfCourse.status === PENDING ? (
                      <Icon style={styles.checkIcon} size={24} color={'#FF9500'} name="pause" />
                    ) : null}
                  </View>

                  <View style={styles.courseDetails}>
                    <Text style={styles.courseTitle}>{item.name + ': ' + item.title}</Text>
                  </View>
                </View>
                <AntDesign name="right" size={16} style={styles.chevronRight} />
              </TouchableOpacity>
            );
          }}
        />
      </>
    );
  }
}
const styles = StyleSheet.create({
  childCourses: {
    width: '100%',
    height: 80,
    borderRadius: 12,
    // borderBottomWidth: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginTop: 12,
    justifyContent: 'space-between',
  },
  freeContainer: {
    width: 45,
    height: 20,
    position: 'absolute',
    top: 0,
    left: 17,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: '#FF9500',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 4,
  },
  txtFree: {
    fontFamily: 'SF Pro',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: -0.4,
    color: '#FFFFFF',
  },
  courseTxtAvatar: {
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    marginRight: 8,
    borderRadius: 6,
  },
  txtAvatar: {
    color: '#42A5F5',
    fontFamily: 'SF Pro',
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 32,
    letterSpacing: -0.4,
  },

  courseDetails: {
    width: '70%',
  },
  courseTitle: {
    fontFamily: 'SF Pro',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: -0.4,
    color: '#22313F',
  },
  coursePrice: {
    fontFamily: 'SF Pro',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.4,
    color: 'rgba(60, 60, 67, 0.6)',
  },
  chevronRight: {
    marginRight: 0,
  },
});
const mapStateToProps = (state) => {
  return {
    navigation: state.params.navigation,
    userLogin: state.data.userLogin,
    lessons: state.data.lessons,
    exercisesOfCourse: state.data.exercisesOfCourse,
    testsOnlineOfCourse: state.data.testsOnlineOfCourse,
    loading: state.data.loading,
  };
};
export default connect(
  mapStateToProps,
  { fetchGetLessons, fetchGetExercisesOfCourse, fetchGetTestsOnlineOfCourse },
  null,
  { forwardRef: true },
)(LessonList);
