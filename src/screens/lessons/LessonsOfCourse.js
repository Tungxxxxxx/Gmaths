import React from 'react';
import { ImageBackground, StatusBar, Text, View, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { LESSON, EXERCISE, TEST_ONLINE, DETAILS, NUMBER_OF_LESSON } from '../../constant/Constant';
import { BG } from '../../assets/images/index';
import HeaderBar from '../../components/Header';
import { connect } from 'react-redux';
import LessonList from './LessonList';
import { fetchGetLessons } from '../../redux/actions/fetchLessonsOfCourse';
import { fetchGetLessonsOfUser } from '../../redux/actions/fetchGetLessonsOfUser';
import { fetchGetExercisesOfCourse } from '../../redux/actions/fetchGetExercisesOfCourse';
import { fetchGetExercisesOfUser } from '../../redux/actions/fetGetExercisesOfUser';
import { fetchGetTestsOnlineOfCourse } from '../../redux/actions/fetchGetTestsOnlineOfCourse';
import { fetchGetTestsOnlineOfUser } from '../../redux/actions/fetchGetTestsOnlineOfUser';
import { lessonStyles } from './Style';
import DetailsOfCourse from '../details/DetailsOfCourse';
class LessonsOfCourse extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cateActive: LESSON, dataOfCourse: [], dataOfUser: [], courseId: null, hasData: false };
    this.startIndex = 0;
  }
  handleLesson = async () => {
    const { courseId, cateActive } = this.state;
    if (cateActive === LESSON) {
      return;
    }
    this.startIndex = 0;
    const { userLogin, fetchGetLessons, fetchGetLessonsOfUser } = this.props;

    await fetchGetLessons(courseId, this.startIndex, NUMBER_OF_LESSON);
    await fetchGetLessonsOfUser(userLogin.id);
    const { lessons, lessonsOfUser } = this.props;
    this.setState((prevState) => {
      return {
        cateActive: LESSON,
        dataOfCourse: lessons,
        dataOfUser: lessonsOfUser,
      };
    });
  };
  handleExercise = async () => {
    const { courseId, cateActive } = this.state;
    if (cateActive === EXERCISE) {
      return;
    }
    this.startIndex = 0;
    const { userLogin, fetchGetExercisesOfCourse, fetchGetExercisesOfUser } = this.props;
    await fetchGetExercisesOfCourse(courseId);
    await fetchGetExercisesOfUser(userLogin.id);
    const { exercisesOfCourse, exercisesOfUser } = this.props;
    this.setState({
      cateActive: EXERCISE,
      dataOfCourse: exercisesOfCourse,
      dataOfUser: exercisesOfUser,
    });
  };
  handleTestOnline = async () => {
    const { courseId, cateActive } = this.state;
    if (cateActive === TEST_ONLINE) {
      return;
    }
    this.startIndex = 0;
    const { userLogin, fetchGetTestsOnlineOfCourse, fetchGetTestsOnlineOfUser } = this.props;
    await fetchGetTestsOnlineOfCourse(courseId);
    await fetchGetTestsOnlineOfUser(userLogin.id);
    const { testsOnlineOfCourse, testsOnlineOfUser } = this.props;
    this.setState({
      cateActive: TEST_ONLINE,
      dataOfCourse: testsOnlineOfCourse,
      dataOfUser: testsOnlineOfUser,
    });
  };
  handleDetails = () => {
    this.setState(() => {
      return { cateActive: DETAILS };
    });
  };
  updateStartIndex = async () => {
    const { courseId, cateActive } = this.state;
    console.log(this.startIndex);
    this.startIndex = this.startIndex + NUMBER_OF_LESSON;
    if (cateActive === LESSON) {
      await this.props.fetchGetLessons(courseId, this.startIndex, NUMBER_OF_LESSON);
      const { lessons } = this.props;
      this.setState((prevState) => {
        return {
          dataOfCourse: prevState.dataOfCourse.concat(lessons),
        };
      });
    }
  };
  async componentDidMount() {
    const { userLogin } = this.props;
    const { courseId } = this.props.route.params;
    this.setState({
      courseId: courseId,
    });
    await this.props.fetchGetLessons(courseId, this.startIndex, NUMBER_OF_LESSON);
    await this.props.fetchGetLessonsOfUser(userLogin.id);

    const { lessons, lessonsOfUser } = this.props;
    this.setState({
      dataOfCourse: lessons,
      dataOfUser: lessonsOfUser,
    });
  }
  render() {
    const { title, courseId } = this.props.route.params;
    const { cateActive } = this.state;
    return (
      <View style={lessonStyles.container}>
        <ImageBackground source={BG} style={lessonStyles.bgImage}>
          <HeaderBar title={title} isAvatar={true} />
          <View style={styles.category}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <TouchableOpacity
                style={[
                  styles.buttonCategory,
                  cateActive === LESSON ? styles.activeCategory : styles.noneActiveCategory,
                ]}
                onPress={() => {
                  this.handleLesson();
                }}
              >
                <Text style={styles.txtCategory}>{LESSON}</Text>
              </TouchableOpacity>
              <View style={styles.gapCategory} />
              <TouchableOpacity
                style={[
                  styles.buttonCategory,
                  cateActive === EXERCISE ? styles.activeCategory : styles.noneActiveCategory,
                ]}
                onPress={() => {
                  this.handleExercise();
                }}
              >
                <Text style={styles.txtCategory}>{EXERCISE}</Text>
              </TouchableOpacity>
              <View style={styles.gapCategory} />
              <TouchableOpacity
                style={[
                  styles.buttonCategory,
                  cateActive === TEST_ONLINE ? styles.activeCategory : styles.noneActiveCategory,
                ]}
                onPress={() => {
                  this.handleTestOnline();
                }}
              >
                <Text style={styles.txtCategory}>{TEST_ONLINE}</Text>
              </TouchableOpacity>
              <View style={styles.gapCategory} />
              <TouchableOpacity
                style={[
                  styles.buttonCategory,
                  cateActive === DETAILS ? styles.activeCategory : styles.noneActiveCategory,
                ]}
                onPress={() => {
                  this.handleDetails();
                }}
              >
                <Text style={styles.txtCategory}>{DETAILS}</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
          <View style={styles.content}>
            {cateActive !== DETAILS ? (
              <LessonList
                courseId={courseId}
                cateActive={cateActive}
                dataOfCourse={this.state.dataOfCourse}
                dataOfUser={this.state.dataOfUser}
                updateStartIndex={this.updateStartIndex}
              />
            ) : (
              <DetailsOfCourse />
            )}
          </View>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  category: { height: 72, width: '100%', paddingVertical: 12, justifyContent: 'center', paddingHorizontal: 16 },
  gapCategory: { width: 8 },
  buttonCategory: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  activeCategory: {
    backgroundColor: '#1976D2',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowColor: 'rgba(25, 118, 210, 0.3)',
    shadowOpacity: 1,
  },
  noneActiveCategory: { backgroundColor: '#FFFFFF' },
  txtCategory: { fontFamily: 'SF Pro', fontSize: 16, lineHeight: 24, letterSpacing: -0.4, fontWeight: '500' },
  content: { width: '100%', flex: 638 },
});
const mapStateToProps = (state) => {
  return {
    userLogin: state.userLogin.userLogin,
    lessons: state.lessons.lessons,
    lessonsOfUser: state.lessonsOfUser.lessonsOfUser,
    exercisesOfCourse: state.exercisesOfCourse.exercisesOfCourse,
    exercisesOfUser: state.exercisesOfUser.exercisesOfUser,
    testsOnlineOfCourse: state.testsOnlineOfCourse.testsOnlineOfCourse,
    testsOnlineOfUser: state.testsOnlineOfUser.testsOnlineOfUser,
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
  fetchGetTestsOnlineOfCourse,
  fetchGetTestsOnlineOfUser,
})(LessonsOfCourse);
