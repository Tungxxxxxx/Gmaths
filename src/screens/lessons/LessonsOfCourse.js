import React from 'react';
import { ImageBackground, StatusBar, Text, View, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { LESSON, EXERCISE, TEST_ONLINE, DETAILS, NUMBER_OF_LESSON } from '../../constant/Constant';
import { BG } from '../../assets/images/index';
import HeaderBar from '../../components/Header';
import { connect } from 'react-redux';
import LessonList from './LessonList';
import { fetchGetLessons } from '../../redux/actions/fetchLessonsOfCourse';
import { fetchGetExercisesOfCourse } from '../../redux/actions/fetchGetExercisesOfCourse';
import { fetchGetTestsOnlineOfCourse } from '../../redux/actions/fetchGetTestsOnlineOfCourse';
import { lessonStyles } from './Style';
import DetailsOfCourse from '../details/DetailsOfCourse';
import Loading from '../../components/Loading';
class LessonsOfCourse extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cateActive: LESSON, dataOfCourse: [], courseId: null, hasData: false };
    this.lessonsListRef = React.createRef();
  }
  setCateActive = (cateActive) => {
    this.setState({
      cateActive: cateActive,
    });
  };
  handleLesson = async () => {
    const { cateActive } = this.state;
    if (cateActive === LESSON) {
      return;
    }
    this.setState({
      cateActive: LESSON,
    });
    this.lessonsListRef.showLessons();
  };
  handleExercise = async () => {
    const { cateActive } = this.state;
    if (cateActive === EXERCISE) {
      return;
    }
    this.setState({
      cateActive: EXERCISE,
    });
    this.lessonsListRef.showExercises();
  };
  handleTestOnline = async () => {
    const { cateActive } = this.state;
    if (cateActive === TEST_ONLINE) {
      return;
    }
    this.setState({
      cateActive: TEST_ONLINE,
    });
    this.lessonsListRef.showTestsOnline();
  };

  handleDetails = () => {
    this.setState(() => {
      return { cateActive: DETAILS };
    });
  };
  updateStartIndex = async () => {
    const { courseId, cateActive } = this.state;
    const { userLogin } = this.props;
    console.log(this.startIndex);
    this.startIndex = this.startIndex + NUMBER_OF_LESSON;
    if (cateActive === LESSON) {
      await this.props.fetchGetLessons(courseId, this.startIndex, NUMBER_OF_LESSON, userLogin.id);
      const { lessons } = this.props;
      if (!lessons) {
        return;
      }
      this.setState((prevState) => {
        return {
          dataOfCourse: prevState.dataOfCourse.concat(lessons),
        };
      });
    }
  };
  componentDidMount() {
    this.setState({
      cateActive: LESSON,
    });
  }
  render() {
    const { title, courseId } = this.props.route.params;
    const { cateActive } = this.state;
    const { loading } = this.props;
    return (
      <View style={lessonStyles.container}>
        <ImageBackground source={BG} style={lessonStyles.bgImage}>
          <HeaderBar title={title} isAvatar={true} />
          {loading ? <Loading /> : null}
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
                updateStartIndex={this.updateStartIndex}
                setCateActive={this.setCateActive}
                ref={this.lessonsListRef}
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
    state: state,
    userLogin: state.data.userLogin,
    lessons: state.data.lessons,
    exercisesOfCourse: state.data.exercisesOfCourse,
    testsOnlineOfCourse: state.data.testsOnlineOfCourse,
    loading: state.data.loading,
  };
};
export default connect(mapStateToProps, {
  fetchGetLessons,
  fetchGetExercisesOfCourse,
  fetchGetTestsOnlineOfCourse,
})(LessonsOfCourse);
