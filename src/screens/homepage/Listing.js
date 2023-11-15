import React from 'react';
import { connect } from 'react-redux';
import { fetchGetGrades } from '../../redux/actions/fetchGetGrades';
import { fetchGetCourses } from '../../redux/actions/fetchGetCourses';
import { fetchGetPackages } from '../../redux/actions/fetchGetPackage';
import { StyleSheet, View, TouchableOpacity, Text, FlatList, Image } from 'react-native';
import PriceFormat from '../../components/PriceFormat';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { BUY_COURSE, DA_HOAN_THANH, CHUAN_BI } from '../../constant/Constant';
import * as colors from '../../color/Color';
const INFO = '• 19:35 - 10/12/2023';
class Listing extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeId: 0 };
  }
  async componentDidMount() {
    await this.props.fetchGetGrades();
    this.props.fetchGetCourses(this.state.activeId);
  }
  getGradeById = (gradeId) => {
    const grade = this.props.grades.filter((item) => item.id === gradeId)[0];
    return grade;
  };
  setActiveButtonCTA = (flag) => {
    this.props.setActiveButtonCTA(flag);
  };
  handleClickGrade = (id) => {
    if (this.state.activeId !== id) {
      id === 0 ? this.setActiveButtonCTA(false) : this.setActiveButtonCTA(true);
      this.props.scrollViewRef.current.scrollTo({ y: 359 });
      this.setState({ activeId: id });
      this.props.fetchGetCourses(id);
    } else {
      this.props.scrollViewRef.current.scrollTo({ y: 359 });
      return;
    }
  };
  courseOfUser = (course) => {
    const { userLogin, coursesOfUser } = this.props;
    let coursesFound = null;
    if (userLogin) {
      coursesFound = coursesOfUser.filter((item) => item.courseId === course.id && item.gradeId === course.gradeId);
    }
    if (coursesFound && coursesFound.length > 0) {
      return coursesFound[0];
    }
    return null;
  };
  getGradenameById = (id) => {
    const { grades } = this.props;
    return grades.filter((item) => item.id === id)[0].fullname;
  };
  render() {
    const { grades, courses, userLogin } = this.props;
    const { activeId } = this.state;
    // Sắp xếp mảng tăng dần theo name
    grades.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    return (
      <>
        <View style={styles.container}>
          <TouchableOpacity
            style={activeId === 0 ? [styles.buttonAllGrade, styles.activeButton] : styles.buttonAllGrade}
            onPress={() => {
              this.handleClickGrade(0);
            }}
          >
            <Text style={styles.txtAllGrade}>Tất cả</Text>
          </TouchableOpacity>
          {grades &&
            grades.length > 0 &&
            grades.map((grade, index) => {
              return (
                <TouchableOpacity
                  key={grade.id}
                  style={
                    activeId === grade.id
                      ? [index <= 3 ? styles.buttonChildGradeSmall : styles.buttonChildGradeLarge, styles.activeButton]
                      : index <= 3
                      ? styles.buttonChildGradeSmall
                      : styles.buttonChildGradeLarge
                  }
                  onPress={() => {
                    this.handleClickGrade(grade.id);
                  }}
                >
                  <Text style={styles.txtGradeName}>{grade.name}</Text>
                </TouchableOpacity>
              );
            })}
        </View>
        <FlatList
          scrollEnabled={false}
          data={courses}
          numColumns={1}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => {
            const courseOfUser = this.courseOfUser(item);
            const check = userLogin && courseOfUser;
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
                          : courseOfUser.status === DA_HOAN_THANH
                          ? colors.coursesCompleted
                          : courseOfUser.status === CHUAN_BI
                          ? colors.coursesPreparingBg
                          : null,
                        borderColor: !check
                          ? colors.coursesNotRegisteredBorder
                          : courseOfUser.status === DA_HOAN_THANH
                          ? colors.coursesCompletedBorder
                          : courseOfUser.status === CHUAN_BI
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
                    ) : courseOfUser.status === DA_HOAN_THANH ? (
                      <Ionicons style={styles.checkIcon} size={24} color={'#34C759'} name="checkmark-sharp" />
                    ) : courseOfUser.status === CHUAN_BI ? (
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
      </>
    );
  }
}
const styles = StyleSheet.create({
  container: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  activeButton: {
    backgroundColor: '#1976D2',
    shadowOffset: { width: 0, height: 2 },
    shadowColor: 'rgba(25, 118, 210, 0.3)',
    shadowRadius: 8,
    shadowOpacity: 1,
  },
  buttonAllGrade: {
    justifyContent: 'center',
    marginBottom: 4,
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    width: '22.45%',
    height: 48,
    borderRadius: 12,
  },
  buttonChildGradeSmall: {
    marginBottom: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    width: '17%',
    height: 48,
    borderRadius: 12,
  },
  buttonChildGradeLarge: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    width: '18.1%',
    height: 48,
    borderRadius: 12,
  },
  txtAllGrade: {},
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
    grades: state.grades.grades,
    courses: state.courses.courses,
    grades: state.grades.grades,
    coursesOfUser: state.coursesOfUser.coursesOfUser,
    userLogin: state.userLogin.userLogin,
    navigation: state.navigation.navigation,
  };
};
export default connect(mapStateToProps, { fetchGetGrades, fetchGetCourses, fetchGetPackages })(Listing);
