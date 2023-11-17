import React from 'react';
import { Text, View, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Dimensions } from 'react-native';
import { Avatar } from 'react-native-paper';
import { INTRO, LESSON_CONTACT_1, LESSON_CONTACT_2 } from '../../constant/Message';
import { connect } from 'react-redux';
import { SIGN_IN } from '../../constant/Constant';
import PriceFormat from '../../components/PriceFormat';
import Contact from '../../components/Contact';
const { width } = Dimensions.get('window');
const bannerWidth = width - 32;
class DetailsOfCourse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleOnPressCourse = () => {
    const { userLogin, navigation } = this.props;
    if (userLogin) {
      this.props.navigation.navigate('LessonsOfCourse', {
        title: 'Grade 3 - Advanced Course',
        avatar: require('../../assets/images/users/tungpt.png'),
        courseId: 10,
      });
    } else {
      //   this.props.updateModal(SIGN_IN);
      return;
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <View style={styles.targetContainer}>
              <Text style={styles.targetTitle}>Bạn sẽ học được gì?</Text>
              <View style={styles.targetContent}>
                <View style={styles.targetChildContent}>
                  <View style={styles.checkIcon}>
                    <Ionicons size={16} color={'#1976D2'} name="checkmark-sharp" />
                  </View>
                  <View style={styles.gapHorizontal} />
                  <Text style={styles.txtTarget}>Khả năng tự học, sáng tạo</Text>
                </View>
                <View style={styles.gapVertical} />
                <View style={styles.targetChildContent}>
                  <View style={styles.checkIcon}>
                    <Ionicons size={16} color={'#1976D2'} name="checkmark-sharp" />
                  </View>
                  <View style={styles.gapHorizontal} />
                  <Text style={styles.txtTarget}>Nâng cấp kĩ năng sống, kĩ năng giao tiếp</Text>
                </View>
                <View style={styles.gapVertical} />
                <View style={[styles.targetChildContent, { borderBottomWidth: 0, paddingBottom: 0 }]}>
                  <View style={styles.checkIcon}>
                    <Ionicons size={16} color={'#1976D2'} name="checkmark-sharp" />
                  </View>
                  <View style={styles.gapHorizontal} />
                  <Text style={styles.txtTarget}>Làm quen với Tư duy toàn cầu ngay từ những giai đoạn đầu đời</Text>
                </View>
              </View>
            </View>
            <View style={styles.targetContainer}>
              <Text style={styles.targetTitle}>Giới thiệu</Text>
              <View style={styles.targetContent}>
                <Text style={styles.txtTarget}>{INTRO}</Text>
                <TouchableOpacity>
                  <View style={styles.labelButton}>
                    <Text style={styles.txtLabelButton}>Xem thêm</Text>
                    <View style={{ width: 16, height: 16, justifyContent: 'center', alignItems: 'center' }}>
                      <Ionicons name="chevron-down-outline" size={12} color={'#1565C0'} />
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.targetContainer}>
              <Text style={styles.targetTitle}>Giảng viên</Text>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.teacher}>
                  <Avatar.Image
                    style={styles.avatarTeacher}
                    source={require('../../assets/images/users/tungpt.png')}
                    size={128}
                  />
                  <Text style={styles.teacherName}>Cô Lê Thị Kim Dung</Text>
                  <Text style={styles.teacherJob}>Thạc sĩ - Giáo viên Gmaths Education</Text>
                  <View style={styles.addContainer}>
                    <AntDesign name="plus" size={16} color={'rgba(60, 60, 67, 0.6)'} />
                  </View>
                </View>
                <View style={styles.gapHorizontal} />
                <View style={styles.teacher}>
                  <Avatar.Image
                    style={styles.avatarTeacher}
                    source={require('../../assets/images/users/tungpt.png')}
                    size={128}
                  />
                  <Text style={styles.teacherName}>Cô Lê Thị Kim Dung</Text>
                  <Text style={styles.teacherJob}>Thạc sĩ - Giáo viên Gmaths Education</Text>
                  <View style={styles.addContainer}>
                    <AntDesign name="plus" size={16} color={'rgba(60, 60, 67, 0.6)'} />
                  </View>
                </View>
                <View style={styles.gapHorizontal} />
                <View style={styles.teacher}>
                  <Avatar.Image
                    style={styles.avatarTeacher}
                    source={require('../../assets/images/users/tungpt.png')}
                    size={128}
                  />
                  <Text style={styles.teacherName}>Cô Lê Thị Kim Dung</Text>
                  <Text style={styles.teacherJob}>Thạc sĩ - Giáo viên Gmaths Education</Text>
                  <View style={styles.addContainer}>
                    <AntDesign name="plus" size={16} color={'rgba(60, 60, 67, 0.6)'} />
                  </View>
                </View>
              </ScrollView>
            </View>
            <View style={styles.targetContainer}>
              <Text style={styles.targetTitle}>Chứng chỉ</Text>
              <View style={styles.targetContent}>
                <View style={styles.targetChildContent}>
                  <Text style={styles.txtTarget}>Chứng chỉ 1</Text>
                  <View style={styles.gapHorizontal} />
                  <View style={styles.checkIcon}>
                    <MaterialIcons size={16} color={'#1976D2'} name="open-in-new" />
                  </View>
                </View>
                <View style={styles.gapVertical} />
                <View style={styles.targetChildContent}>
                  <Text style={styles.txtTarget}>Chứng chỉ 2</Text>
                  <View style={styles.gapHorizontal} />
                  <View style={styles.checkIcon}>
                    <MaterialIcons size={16} color={'#1976D2'} name="open-in-new" />
                  </View>
                </View>
                <View style={styles.gapVertical} />
                <View style={[styles.targetChildContent, { borderBottomWidth: 0, paddingBottom: 0 }]}>
                  <Text style={styles.txtTarget}>Chứng chỉ 3</Text>
                  <View style={styles.gapHorizontal} />
                  <View style={styles.checkIcon}>
                    <MaterialIcons size={16} color={'#1976D2'} name="open-in-new" />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.targetContainer}>
              <Text style={styles.targetTitle}>Phù hợp với bạn</Text>
              <View style={styles.targetContent}>
                <TouchableOpacity style={styles.childCourses}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View
                      style={[
                        styles.courseTxtAvatar,
                        { backgroundColor: '#FFFFFF', borderColor: 'rgba(0, 122, 255, 0.1)' },
                      ]}
                    >
                      <Text style={[styles.txtAvatar, { color: '#42A5F5' }]}>G1</Text>
                    </View>
                    <View style={styles.courseDetails}>
                      <Text style={styles.courseTitle}>Grade 3 - Advanced Course</Text>
                      <Text style={styles.coursePrice}>
                        <PriceFormat price={600000} />
                      </Text>
                    </View>
                  </View>
                  <AntDesign name="right" size={16} style={styles.chevronRight} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.childCourses}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View
                      style={[
                        styles.courseTxtAvatar,
                        { backgroundColor: '#FFFFFF', borderColor: 'rgba(0, 122, 255, 0.1)' },
                      ]}
                    >
                      <Text style={[styles.txtAvatar, { color: '#42A5F5' }]}>G1</Text>
                    </View>
                    <View style={styles.courseDetails}>
                      <Text style={styles.courseTitle}>Grade 3 - Awarding Course</Text>
                      <Text style={styles.coursePrice}>
                        <PriceFormat price={900000} />
                      </Text>
                    </View>
                  </View>
                  <AntDesign name="right" size={16} style={styles.chevronRight} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.footer}>
              <Contact contentContact1={LESSON_CONTACT_1} contentContact2={LESSON_CONTACT_2} />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  footer: {},
  container: { flex: 1, backgroundColor: '#F2F2F7', paddingHorizontal: 16 },
  content: { flex: 1, paddingTop: 12, paddingBottom: 40 },
  targetContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.08)',
    paddingBottom: 24,
    backgroundColor: 'transparent',
    marginBottom: 24,
  },
  targetTitle: {
    fontFamily: 'SF Pro',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 28,
    letterSpacing: -0.4,
    color: '#1565C0',
    marginBottom: 12,
  },
  targetContent: { borderRadius: 16, backgroundColor: 'transparent', justifyContent: 'center' },
  targetChildContent: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'flex-start',
    paddingBottom: 12,
  },
  checkIcon: {
    alignItems: 'center',
    paddingTop: 4,
  },
  txtTarget: {
    fontFamily: 'SF Pro',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.4,
    color: '#22313F',
  },
  labelButton: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtLabelButton: {
    fontFamily: 'SF Pro',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.4,
    color: '#1565C0',
  },
  teacher: {
    width: 240,
    height: 304,
    borderRadius: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  avatarTeacher: { marginBottom: 16 },
  teacherName: {
    fontFamily: 'SF Pro',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.4,
    color: '#22313F',
  },
  teacherJob: {
    fontFamily: 'SF Pro',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.4,
    color: '#22313F',
  },
  addContainer: {
    marginTop: 16,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(116, 116, 128, 0.08)',
    justifyContent: 'center',
    alignItems: 'center',
  },
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
  gapHorizontal: { width: 12 },
  gapVertical: { width: '100%', height: 12 },
});
// const mapStateToProps = (state) => {
//   return { navigation: state.navigation.navigation, userLogin: state.userLogin.userLogin };
// };
// export default connect(mapStateToProps)(DetailsOfCourse);
export default DetailsOfCourse;
