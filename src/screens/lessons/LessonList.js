import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { DA_HOAN_THANH, CHUAN_BI, PENDING } from '../../constant/Constant';
import { fetchGetLessons } from '../../redux/actions/fetchLessonsOfCourse';
import { fetchGetLessonsOfUser } from '../../redux/actions/fetchGetLessonsOfUser';
import { fetchGetExercisesOfCourse } from '../../redux/actions/fetchGetExercisesOfCourse';
import { fetchGetExercisesOfUser } from '../../redux/actions/fetGetExercisesOfUser';
import { connect } from 'react-redux';
import * as colors from '../../color/Color';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { LESSON, EXERCISE, TEST_ONLINE, DETAILS } from '../../constant/Constant';
import Loading from '../../components/Loading';
class LessonList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  getDataSingleOfUser = (dataSingleOfCourse) => {
    const { userLogin, dataOfUser, cateActive } = this.props;
    let dataFound = null;
    if (userLogin && dataOfUser && dataSingleOfCourse) {
      if (cateActive === LESSON) {
        dataFound = dataOfUser.filter(
          (item) => item.lessonId === dataSingleOfCourse.id && item.courseId === dataSingleOfCourse.courseId,
        );
      }
      if (cateActive === EXERCISE) {
        dataFound = dataOfUser.filter(
          (item) => item.exerciseId === dataSingleOfCourse.id && item.courseId === dataSingleOfCourse.courseId,
        );
      }
      if (cateActive === TEST_ONLINE) {
        dataFound = dataOfUser.filter(
          (item) => item.testOnlineId === dataSingleOfCourse.id && item.courseId === dataSingleOfCourse.courseId,
        );
      }
    }
    if (dataFound && dataFound.length > 0) {
      return dataFound[0];
    }
    return null;
  };
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

  render() {
    const { userLogin, dataOfCourse } = this.props;

    return (
      <>
        <FlatList
          style={{ paddingHorizontal: 16 }}
          showsVerticalScrollIndicator={false}
          data={dataOfCourse}
          numColumns={1}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => {
            const dataSingleOfCourse = this.getDataSingleOfUser(item);
            const check = userLogin && dataSingleOfCourse;
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
                        backgroundColor: !check
                          ? colors.coursesNotRegisteredBg
                          : dataSingleOfCourse.status === DA_HOAN_THANH
                          ? colors.coursesCompleted
                          : dataSingleOfCourse.status === CHUAN_BI || dataSingleOfCourse.status === PENDING
                          ? colors.coursesPreparingBg
                          : null,
                        borderColor: !check
                          ? colors.coursesNotRegisteredBorder
                          : dataSingleOfCourse.status === DA_HOAN_THANH
                          ? colors.coursesCompletedBorder
                          : dataSingleOfCourse.status === CHUAN_BI || dataSingleOfCourse.status === PENDING
                          ? colors.coursesPreparingBorder
                          : null,
                      },
                    ]}
                  >
                    {!check ? (
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
    navigation: state.navigation.navigation,
    userLogin: state.userLogin.userLogin,
    lessons: state.lessons.lessons,
    lessonsOfUser: state.lessonsOfUser.lessonsOfUser,
    exercisesOfCourse: state.exercisesOfCourse.exercisesOfCourse,
    exercisesOfUser: state.exercisesOfUser.exercisesOfUser,
    exercisesOfCourseLoading: state.exercisesOfCourse.exercisesOfCourseLoading,
    lessonsOfUserLoading: state.lessonsOfUser.lessonsOfUserLoading,
    lessonsLoading: state.lessons.lessonsLoading,
    exercisesOfUserLoading: state.exercisesOfUser.exercisesOfUserLoading,
  };
};
export default connect(mapStateToProps, {
  fetchGetLessons,
  fetchGetLessonsOfUser,
  fetchGetExercisesOfCourse,
  fetchGetExercisesOfUser,
})(LessonList);
