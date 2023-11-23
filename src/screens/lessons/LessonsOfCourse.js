import React from 'react';
import { ImageBackground, Text, View, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
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
class LessonsOfCourse extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cateActive: LESSON, courseId: null, hasData: false, isClick: false };
    this.lessonsListRef = React.createRef();
  }
  setCateActive = (cateActive) => {
    this.setState({
      cateActive: cateActive,
    });
  };
  setIsClick = (isClick) => {
    this.setState({
      isClick: isClick,
    });
  };
  handleLesson = () => {
    const { cateActive } = this.state;
    if (cateActive === LESSON) {
      return;
    }
    if (this.lessonsListRef.current) {
      this.lessonsListRef.current.resetStartIndex();
    }
    this.setState(
      {
        cateActive: LESSON,
        isClick: true,
      },
      async () => {
        if (this.lessonsListRef.current) {
          await this.lessonsListRef.current.showDataList();
        }
      },
    );
  };
  handleExercise = () => {
    const { cateActive } = this.state;
    if (cateActive === EXERCISE) {
      return;
    }

    if (this.lessonsListRef.current) {
      this.lessonsListRef.current.resetStartIndex();
    }
    this.setState(
      {
        cateActive: EXERCISE,
        isClick: true,
      },
      async () => {
        if (this.lessonsListRef.current) {
          await this.lessonsListRef.current.showDataList();
        }
      },
    );
  };
  handleTestOnline = () => {
    const { cateActive } = this.state;
    if (cateActive === TEST_ONLINE) {
      return;
    }
    if (this.lessonsListRef.current) {
      this.lessonsListRef.current.resetStartIndex();
    }
    this.setState(
      {
        cateActive: TEST_ONLINE,
        isClick: true,
      },
      async () => {
        if (this.lessonsListRef.current) {
          await this.lessonsListRef.current.showDataList();
        }
      },
    );
  };

  handleDetails = () => {
    this.setState(() => {
      return { cateActive: DETAILS };
    });
  };

  componentDidMount() {
    this.setState({
      cateActive: LESSON,
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
                cateActive={this.state.cateActive}
                ref={this.lessonsListRef}
                setIsClick={this.setIsClick}
                isClick={this.state.isClick}
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
