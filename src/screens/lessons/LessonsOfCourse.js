import React from 'react';
import {
  ImageBackground,
  StatusBar,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
  StyleSheet,
} from 'react-native';
import { LESSON, EXERCISE, TEST_ONLINE, DETAILS } from '../../constant/Constant';
import { BG } from '../../assets/images/index';
import HeaderBar from '../../components/Header';
import { fetchGetLessons } from '../../redux/actions/fetchLessonsOfCourse';
import { connect } from 'react-redux';
class LessonsOfCourse extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cateActive: LESSON };
  }
  handleLesson = () => {
    this.setState({
      cateActive: LESSON,
    });
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
  componentDidMount() {
    this.props.fetchGetLessons(this.props.route.params.courseId);
    this.props.fetchGetLessonsOfUser(this.props.userLogin.id);
  }
  getLessonOfUser = (lesson) => {
    const { userLogin, lessons } = this.props;
    let lessonsFound = null;
    if (userLogin) {
      lessonsFound = lessons.filter((item) => item.lessonId === lesson.id && item.courseId === lesson.courseId);
    }
    if (lessonsFound && lessonsFound.length > 0) {
      return lessonsFound[0];
    }
    return null;
  };
  render() {
    const { avatar, title, courseId } = this.props.route.params;
    const { lessons, lessonsOfUser, userLogin } = this.props;
    console.log(lessons);
    const { cateActive } = this.state;
    console.log(cateActive);
    console.log(avatar, title);
    return (
      <View style={styles.container}>
        <ImageBackground source={BG} style={styles.bgImage}>
          <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent />
          <View style={styles.top}></View>
          <HeaderBar style={{ height: 56 }} avatar={avatar} title={title} isAvatar={true} />
          <View style={styles.category}>
            <ScrollView horizontal={true}>
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
            <FlatList
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
                        this.props.navigation.navigate('LessonsOfCourse', {
                          title: this.getGradenameById(item.gradeId) + ' - ' + item.name,
                          avatar: userLogin.avatar,
                          courseId: item.id,
                        });
                      } else {
                        this.props.fetchGetPackages();
                        this.props.updateModal(BUY_COURSE);
                      }
                    }}
                  >
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
                          <Text
                            style={[
                              styles.txtAvatar,
                              { color: index === 0 || index === 1 ? '#42A5F5' : index === 2 ? '#1976D2' : '#1565C0' },
                            ]}
                          >
                            {this.getGradeById(item.gradeId).name}
                          </Text>
                        ) : lessonOfUser.status === DA_HOAN_THANH ? (
                          <Ionicons style={styles.checkIcon} size={24} color={'#34C759'} name="checkmark-sharp" />
                        ) : lessonOfUser.status === CHUAN_BI ? (
                          <Ionicons style={styles.checkIcon} size={24} color={'#FF9500'} name="play" />
                        ) : null}
                      </View>

                      <View style={styles.courseDetails}>
                        <Text style={styles.courseTitle}>
                          {this.getGradeById(item.gradeId).fullname + ' - ' + item.name}
                        </Text>

                        <Text style={styles.coursePrice}>
                          {!check ? (
                            <PriceFormat price={item.price} />
                          ) : courseOfUser.status === DA_HOAN_THANH ? (
                            courseOfUser.status
                          ) : courseOfUser.status === CHUAN_BI ? (
                            courseOfUser.status + ' ' + INFO
                          ) : null}
                        </Text>
                      </View>
                    </View>
                    <AntDesign name="right" size={16} style={styles.chevronRight} />
                  </TouchableOpacity>
                );
              }}
            />
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
  top: { width: '100%', height: 46 },
  category: { height: 72, width: '100%', paddingVertical: 12, borderWidth: 1 },
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
  noneActiveCategory: { backgroundColor: 'rgba(255, 255, 255, 0.75' },
  txtCategory: { fontFamily: 'SF Pro', fontSize: 16, lineHeight: 24, letterSpacing: -0.4, fontWeight: '500' },
  content: { width: '100%', flex: 638 },
});
const mapStateToProps = (state) => {
  return {
    lessons: state.lessons.lessons,
    userLogin: state.userLogin.userLogin,
    lessonsOfUser: state.lessonsOfUser.lessonsOfUser,
  };
};
export default connect(mapStateToProps, { fetchGetLessons })(LessonsOfCourse);
