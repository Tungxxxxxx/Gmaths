import React from 'react';
import { ImageBackground, StatusBar, Text, View, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { LESSON, EXERCISE, TEST_ONLINE, DETAILS } from '../../constant/Constant';
import { BG } from '../../assets/images/index';
import HeaderBar from '../../components/Header';
import { connect } from 'react-redux';
import LessonList from './LessonList';
import { fetchGetLessons } from '../../redux/actions/fetchLessonsOfCourse';
import { fetchGetLessonsOfUser } from '../../redux/actions/fetchGetLessonsOfUser';
import { fetchGetExercisesOfCourse } from '../../redux/actions/fetchGetExercisesOfCourse';
import { fetchGetExercisesOfUser } from '../../redux/actions/fetGetExercisesOfUser';
class LessonsOfCourse extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cateActive: LESSON };
  }
  handleLesson = () => {
    const { courseId, userLogin, fetchGetLessons, fetchGetLessonsOfUser } = this.props;
    this.setState(
      () => {
        return {
          cateActive: LESSON,
        };
      },
      fetchGetLessons(courseId),
      fetchGetLessonsOfUser(userLogin.id),
    );
  };
  handleExercise = () => {
    this.setState({
      cateActive: EXERCISE,
    });
  };
  handleTestOnline = () => {
    this.setState({
      cateActive: TEST_ONLINE,
    });
  };
  handleDetails = () => {
    this.setState({
      cateActive: DETAILS,
    });
  };

  render() {
    const { avatar, title, courseId } = this.props.route.params;
    const { cateActive } = this.state;
    return (
      <View style={styles.container}>
        <ImageBackground source={BG} style={styles.bgImage}>
          <HeaderBar avatar={avatar} title={title} isAvatar={true} />
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
            <LessonList courseId={courseId} cateActive={cateActive} />
          </View>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: { flex: 1 },
  bgImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  category: { height: 72, width: '100%', paddingVertical: 12, justifyContent: 'center' },
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
  };
};
export default connect(mapStateToProps, {
  fetchGetLessons,
  fetchGetLessonsOfUser,
  fetchGetExercisesOfCourse,
  fetchGetExercisesOfUser,
})(LessonsOfCourse);
