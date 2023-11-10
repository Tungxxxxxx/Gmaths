import React from 'react';
import { connect } from 'react-redux';
import { fetchGetGrades } from '../../redux/actions/fetchGetGrades';
import { fetchGetCourses } from '../../redux/actions/fetchGetCourses';
import { StyleSheet, View, TouchableOpacity, Text, FlatList, Image } from 'react-native';
import PriceFormat from '../../components/PriceFormat';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
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

  render() {
    const { grades, courses } = this.props;
    const { activeId } = this.state;
    // console.log('render', courses);
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
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.childCourses}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseTxtAvatar}>
                  <Text style={styles.txtAvatar}>{this.getGradeById(item.gradeId).name}</Text>
                </View>
                <View style={styles.courseDetails}>
                  <Text style={styles.courseTitle}>{this.getGradeById(item.gradeId).fullname + ' - ' + item.name}</Text>

                  <Text style={styles.coursePrice}>
                    <PriceFormat price={item.price} />
                  </Text>
                </View>
              </View>
              <AntDesign name="right" size={16} style={styles.chevronRight} />
            </TouchableOpacity>
          )}
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
    borderColor: 'rgba(0, 122, 255, 0.1)',
    marginRight: 8,
    backgroundColor: 'rgba(255, 255, 255, 1)',
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
  return { grades: state.grades.grades, courses: state.courses.courses, grades: state.grades.grades };
};
export default connect(mapStateToProps, { fetchGetGrades, fetchGetCourses })(Listing);
