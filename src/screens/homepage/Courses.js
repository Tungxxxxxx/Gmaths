import React from 'react';
import { FlatList, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { fetchGetCourses } from '../../redux/actions/fetchGetCourses';
class Courses extends React.Component {
  constructor(props) {
    super(props);
    this.state = { gradeId: 0 };
  }
  getGradeById = (gradeId) => {
    const grade = this.props.grades.filter((item) => item.id === gradeId)[0];
    return grade;
  };
  componentDidMount() {
    this.props.fetchGetCourses(this.state.gradeId);
  }
  render() {
    const { courses } = this.props;
    return (
      <FlatList
        scrollEnabled={true}
        data={courses}
        numColumns={1}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.childCourses}>
            <View style={styles.courseTxtAvatar}>
              <Text>{item.name}</Text>
            </View>
            <View style={styles.courseDetails}>
              <Text>{this.getGradeById(item.gradeId).fullname}</Text>
              <Text>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    );
  }
}
const styles = StyleSheet.create({
  childCourses: {
    width: '100%',
    height: 80,
    borderRadius: 12,
    borderBottomWidth: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.7',
    flexDirection: 'row',
  },
  courseTxtAvatar: {
    width: 56,
    height: 56,
  },
});
const mapStateToProps = (state) => {
  return { courses: state.courses.courses, grades: state.grades.grades };
};
export default connect(mapStateToProps, { fetchGetCourses })(Courses);
