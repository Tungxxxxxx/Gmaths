import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { DA_HOAN_THANH, CHUAN_BI } from '../../constant/Constant';
import { fetchGetLessons } from '../../redux/actions/fetchLessonsOfCourse';
import { fetchGetLessonsOfUser } from '../../redux/actions/fetchGetLessonsOfUser';
import { fetchGetExercisesOfCourse } from '../../redux/actions/fetchGetExercisesOfCourse';
import { fetchGetExercisesOfUser } from '../../redux/actions/fetGetExercisesOfUser';
import { connect } from 'react-redux';
import * as colors from '../../color/Color';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { LESSON, EXERCISE, TEST_ONLINE, DETAILS } from '../../constant/Constant';
class LessonList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getLessonOfUser = (lesson) => {
    const { userLogin, lessonsOfUser } = this.props;
    let lessonsFound = null;
    if (userLogin) {
      lessonsFound = lessonsOfUser.filter((item) => item.lessonId === lesson.id && item.courseId === lesson.courseId);
    }
    if (lessonsFound && lessonsFound.length > 0) {
      return lessonsFound[0];
    }
    return null;
  };
  render() {
    const { lessons, userLogin, cateActive, courseId, dataOfCourse, dataOfUser } = this.props;
    // console.log('>>>>render cateActive:', cateActive);
    // console.log('');
    // console.log('>>>>render dataOfCourse:', dataOfCourse);
    // console.log('');
    // console.log('>>>>render dataOfUser:', dataOfUser);
    // console.log('');
    // console.log('');
    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        data={lessons}
        numColumns={1}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => {
          const lessonOfUser = this.getLessonOfUser(item);
          const check = userLogin && lessonOfUser;
          return (
            <TouchableOpacity
              style={styles.childCourses}
              onPress={() => {
                if (userLogin) {
                  this.props.navigation.navigate('LessonDetail', {
                    title: item.name + ': ' + item.title,
                    avatar: userLogin.avatar,
                    content: item.content,
                  });
                } else {
                  // this.props.fetchGetPackages();
                }
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
                        : lessonOfUser.status === DA_HOAN_THANH
                        ? colors.coursesCompleted
                        : lessonOfUser.status === CHUAN_BI
                        ? colors.coursesPreparingBg
                        : null,
                      borderColor: !check
                        ? colors.coursesNotRegisteredBorder
                        : lessonOfUser.status === DA_HOAN_THANH
                        ? colors.coursesCompletedBorder
                        : lessonOfUser.status === CHUAN_BI
                        ? colors.coursesPreparingBorder
                        : null,
                    },
                  ]}
                >
                  {!check ? (
                    <Text style={[styles.txtAvatar, { color: [0, 1, 2, 3].includes(index) ? '#42A5F5' : '#1976D2' }]}>
                      {item.code}
                    </Text>
                  ) : lessonOfUser.status === DA_HOAN_THANH ? (
                    <Ionicons style={styles.checkIcon} size={24} color={'#34C759'} name="checkmark-sharp" />
                  ) : lessonOfUser.status === CHUAN_BI ? (
                    <Ionicons style={styles.checkIcon} size={24} color={'#FF9500'} name="play" />
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
  };
};
export default connect(mapStateToProps, {
  fetchGetLessons,
  fetchGetLessonsOfUser,
  fetchGetExercisesOfCourse,
  fetchGetExercisesOfUser,
})(LessonList);
