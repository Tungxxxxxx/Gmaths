import React from 'react';
import {
  FlatList,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { logo } from '../../assets/images/index';
import { Dimensions } from 'react-native';
import { MOBI, VINA } from '../../constant/Constant';
const { width } = Dimensions.get('window');
import { connect } from 'react-redux';
import { fetchGetPackages } from '../../redux/actions/fetchGetPackage';
import PriceFormat from '../PriceFormat';
// import { v4 as uuidv4 } from 'uuid';
// import { v4 as uuidv4 } from 'react-native-get-random-values';

const contentWidth = width - 64;
const randomKey = () => {
  return Math.random().toString(36).substring(2, 10);
};
class BuyCourse extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false, activeButtonCTA: MOBI, showCourseIds: [] };
  }
  showModal = () => {
    this.setState(() => {
      return { visible: true };
    });
  };
  closeModal = () => {
    this.setState({
      visible: false,
    });
  };
  handleMobiClick = () => {
    this.setState({
      activeButtonCTA: MOBI,
    });
  };
  handleVinaClick = () => {
    this.setState({
      activeButtonCTA: VINA,
    });
  };
  showHideInfo = (id) => {
    this.setState((prevState) => {
      if (prevState.showCourseIds.includes(id)) {
        return { showCourseIds: prevState.showCourseIds.filter((item) => item !== id) };
      } else {
        return { showCourseIds: [...prevState.showCourseIds, id] };
      }
    });
  };
  render() {
    const { visible, activeButtonCTA, showCourseIds } = this.state;
    const { packages } = this.props;
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={visible}
          onRequestClose={() => {
            this.closeModal();
          }}
        >
          <TouchableOpacity
            style={{ flex: 1 }}
            activeOpacity={1}
            onPressOut={() => {
              this.closeModal();
            }}
          >
            <ScrollView contentContainerStyle={{ flex: 1 }} directionalLockEnabled={true}>
              <TouchableWithoutFeedback>
                <View style={styles.modalContainer}>
                  <View style={styles.grabber}></View>
                  <View style={styles.titleContainer}>
                    <Text style={styles.title}>Đăng ký</Text>
                    <TouchableOpacity
                      style={styles.closeContainer}
                      onPress={() => {
                        this.closeModal();
                      }}
                    >
                      <Ionicons name="close" size={16} style={styles.close} />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.content}>
                    <View style={styles.logoView}>
                      <Image source={logo} style={{ width: 80, height: 80 }} />
                      <Text style={styles.logoTitle}>GMATHS EDUCATION</Text>
                    </View>
                    <View style={styles.buttonCTAsContainer}>
                      <TouchableOpacity
                        style={[styles.buttonCTA, activeButtonCTA === MOBI && styles.activeButtonCTA]}
                        onPress={() => {
                          this.handleMobiClick();
                        }}
                      >
                        <Text style={[styles.txtButtonCTA, activeButtonCTA === MOBI && styles.activeTxtButtonCTA]}>
                          mobifone
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[styles.buttonCTA, activeButtonCTA === VINA && styles.activeButtonCTA]}
                        onPress={() => {
                          this.handleVinaClick();
                        }}
                      >
                        <Text style={[styles.txtButtonCTA, activeButtonCTA === VINA && styles.activeTxtButtonCTA]}>
                          vinaphone
                        </Text>
                      </TouchableOpacity>
                    </View>

                    <View style={styles.listing}>
                      <FlatList
                        scrollEnabled={false}
                        data={packages}
                        numColumns={1}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item, index }) => (
                          <View style={styles.packageContainer}>
                            <View style={styles.packageTitle}>
                              <View style={styles.courseTxtAvatar}>
                                <Text
                                  style={[
                                    styles.txtAvatar,
                                    {
                                      color:
                                        index === 0 || index === 1 ? '#42A5F5' : index === 2 ? '#1976D2' : '#1565C0',
                                    },
                                  ]}
                                >
                                  {item.code}
                                </Text>
                              </View>
                              <View style={styles.courseDetails}>
                                <Text style={styles.courseTitle}>{item.name}</Text>
                                <Text style={styles.coursePrice}>
                                  <PriceFormat price={item.price} /> đ / ngày
                                </Text>
                              </View>
                              <TouchableOpacity
                                style={styles.rightContainer}
                                onPress={() => {
                                  this.showHideInfo(item.id);
                                }}
                              >
                                <Ionicons
                                  name={showCourseIds.includes(item.id) ? 'chevron-up-outline' : 'chevron-down-outline'}
                                  size={16}
                                  style={styles.rightIcon}
                                  color={showCourseIds.includes(item.id) ? '#000000' : 'rgba(60, 60, 67, 0.6)'}
                                />
                              </TouchableOpacity>
                            </View>
                            {showCourseIds.includes(item.id) ? (
                              <View style={styles.info}>
                                {item.contents &&
                                  item.contents.length > 0 &&
                                  item.contents.map((content) => {
                                    return (
                                      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                                        <Ionicons style={styles.checkIcon} name="checkmark-outline" />
                                        <Text key={randomKey()} style={styles.txtInfo}>
                                          {content}
                                        </Text>
                                      </View>
                                    );
                                  })}
                              </View>
                            ) : null}
                            <TouchableOpacity style={styles.buttonContainer}>
                              <View style={styles.txtButtonView}>
                                <Text style={styles.txtSmallButton}>Soạn</Text>
                                <Text style={styles.txtLargeButton}> DK GM1 </Text>
                                <Text style={styles.txtSmallButton}>gửi </Text>
                                <Text style={styles.txtLargeButton}>****</Text>
                              </View>
                            </TouchableOpacity>
                          </View>
                        )}
                      />
                    </View>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </ScrollView>
          </TouchableOpacity>
        </Modal>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: { flex: 1 },
  modalContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    // height: '88%',
    alignItems: 'center',
    backgroundColor: 'rgba(242, 242, 247, 1)',
    borderRadius: 12,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 32,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 56,
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'SF Pro',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 28,
    letterSpacing: -0.4,
    color: 'rgba(0, 0, 0, 1)',
  },
  closeContainer: {
    position: 'absolute',
    top: 12,
    right: 16,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(116, 116, 128, 0.08)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(116, 116, 128, 0.08)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  close: { fontFamily: 'SF Pro', fontWeight: '900', lineHeight: 16, fontSize: 16, color: 'rgba(0, 0, 0, 1)' },
  rightIcon: { fontFamily: 'SF Pro', fontWeight: '900', lineHeight: 14, fontSize: 14 },
  grabber: { width: '11.58%', height: 5, backgroundColor: 'rgba(60, 60, 67, 0.3)', borderRadius: 100, top: 5 },
  content: { width: '100%', flex: 1, paddingHorizontal: 32, paddingTop: 24, alignItems: 'center' },
  logoView: { width: '100%', height: 116, alignItems: 'center', marginBottom: 24 },
  logoTitle: {
    fontFamily: 'SF Pro',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.4,
    color: '#1565C0',
    marginTop: 12,
  },
  buttonCTAsContainer: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    height: 48,
    gap: 8,
    marginBottom: 24,
  },
  buttonCTA: {
    flex: 1,
    height: 48,
    borderRadius: 12,
    marginBottom: 12,
    backgroundColor: 'rgba(255, 255, 255,0.7)',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
    gap: 4,
  },

  txtButtonCTA: {
    fontFamily: 'SF Pro',
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 26,
    letterSpacing: -0.4,
    color: '#42A5F5',
  },
  activeTxtButtonCTA: {
    color: '#FFFFFF',
  },
  activeButtonCTA: {
    backgroundColor: '#1976D2',
  },
  listing: {
    width: '100%',
    gap: 12,
  },
  packageContainer: {
    backgroundColor: '#FFFFFF',
    marginBottom: 12,
    padding: 16,
  },
  packageTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    gap: 12,
    backgroundColor: 'transparent',
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
    borderRadius: 12,
  },
  txtAvatar: {
    color: '#42A5F5',
    fontFamily: 'SF Pro',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.4,
  },
  courseDetails: {
    width: '70%',
  },
  courseTitle: {
    fontFamily: 'SF Pro',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.4,
    color: '#1976D2',
  },
  coursePrice: {
    fontFamily: 'SF Pro',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.4,
    color: 'rgba(60, 60, 67, 0.6)',
  },
  info: {
    gap: 8,
    backgroundColor: '#F2F2F7',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  txtInfo: {
    fontFamily: 'SF Pro',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.4,
    color: 'rgba(60, 60, 67, 0.6)',
  },
  checkIcon: { width: 16, height: 16, color: 'rgba(60, 60, 67, 0.6)' },
  buttonContainer: {
    width: '100%',
    height: 48,
    borderRadius: 12,
    marginBottom: 12,
    backgroundColor: '#1976D2',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
  },
  txtButtonView: { flexDirection: 'row', alignItems: 'center' },
  txtLargeButton: {
    fontFamily: 'SF Pro',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.4,
    color: '#FFFFFF',
  },
  txtSmallButton: {
    fontFamily: 'SF Pro',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.4,
    color: 'rgba(235, 235, 245, 0.6)',
  },
});
// sử dụng BuyCourse thông qua connect, điều này có thể tạo ra một functional component (do connect có thể trả về một functional component) => cần sử dụng forwardRef
const mapStateToProps = (state) => {
  return { packages: state.packages.packages };
};
export default connect(mapStateToProps, { fetchGetPackages }, null, { forwardRef: true })(BuyCourse);
