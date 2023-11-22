import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { logo } from '../../assets/images/index';
import { MOBI, VINA } from '../../constant/Constant';
import { connect } from 'react-redux';
import { fetchGetPackages } from '../../redux/actions/fetchGetPackage';
import PriceFormat from '../PriceFormat';
import { styles as modalStyles } from './Styles';
import { Portal, Modal as ModalPaper } from 'react-native-paper';

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
      //<View style={modalStyles.container}>
      <Portal>
        <ModalPaper
          animationType="slide"
          visible={visible}
          onDismiss={() => {
            this.closeModal();
          }}
          contentContainerStyle={modalStyles.modalContainer}
        >
          <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, width: '100%' }}>
            <View style={modalStyles.container}>
              <View style={modalStyles.grabber}></View>
              <View style={modalStyles.titleContainer}>
                <Text style={modalStyles.title}>Đăng ký</Text>
                <TouchableOpacity
                  style={[modalStyles.closeContainer, { right: 16 }]}
                  onPress={() => {
                    this.closeModal();
                  }}
                >
                  <Ionicons name="close" size={16} style={modalStyles.close} />
                </TouchableOpacity>
              </View>
              <View style={modalStyles.content}>
                <View style={modalStyles.logoView}>
                  <Image source={logo} style={modalStyles.logoImage} />
                  <Text style={modalStyles.logoTitle}>GMATHS EDUCATION</Text>
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
                    showsVerticalScrollIndicator={false}
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
                                  color: index === 0 || index === 1 ? '#42A5F5' : index === 2 ? '#1976D2' : '#1565C0',
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
                              item.contents.map((content, index) => {
                                return (
                                  <View key={content.id} style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                                    <Ionicons style={styles.checkIcon} name="checkmark-outline" />
                                    <Text style={styles.txtInfo}>{content.content}</Text>
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
          </ScrollView>
        </ModalPaper>
      </Portal>
      //</View>
    );
  }
}
const styles = StyleSheet.create({
  rightContainer: {
    right: 16,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(116, 116, 128, 0.08)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightIcon: { fontFamily: 'SF Pro', fontWeight: '900', lineHeight: 14, fontSize: 14 },
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
  return { packages: state.data.packages };
};
export default connect(mapStateToProps, { fetchGetPackages }, null, { forwardRef: true })(BuyCourse);
