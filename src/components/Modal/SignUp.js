import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, TouchableWithoutFeedback } from 'react-native';
import LeftIconInput from '../Input/LeftIconInput';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { SvgXml } from 'react-native-svg';
import { zaloIcon, messenger, phone, logo } from '../../assets/images/index';
import { Dimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Portal, Modal as ModalPaper } from 'react-native-paper';
const { width } = Dimensions.get('window');
const contentWidth = width - 64;
class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }
  showModal = () => {
    this.setState(() => {
      return { visible: true };
    });
  };
  closeModal = () => {
    this.setState(() => {
      return {
        visible: false,
      };
    }, this.props.showSignInModal());
  };
  pressOutModal = () => {
    this.setState({
      visible: false,
    });
  };
  render() {
    const { visible } = this.state;
    return (
      <View style={styles.container}>
        <Portal>
          <ModalPaper
            animationType="slide"
            visible={visible}
            onDismiss={() => {
              this.closeModal();
            }}
            contentContainerStyle={styles.modalContainer}
          >
            <KeyboardAwareScrollView
              style={{ flex: 1, width: '100%' }}
              extraScrollHeight={50}
              showsVerticalScrollIndicator={false}
            >
              <View style={{ flex: 1 }}>
                <View style={styles.grabber}></View>
                <View style={styles.titleContainer}>
                  <Text style={styles.title}>Đăng ký</Text>
                  <TouchableOpacity
                    style={styles.backContainer}
                    onPress={() => {
                      this.closeModal();
                    }}
                  >
                    <AntDesign name="left" size={16} style={styles.back} />
                  </TouchableOpacity>
                </View>
                <View style={styles.content}>
                  <View style={styles.logoView}>
                    <Image source={logo} style={{ width: 80, height: 80 }} />
                    <Text style={styles.logoTitle}>GMATHS EDUCATION</Text>
                  </View>
                  <View style={styles.signUpForm}>
                    <LeftIconInput name={'phone-portrait-outline'} transform={[{ rotate: '180deg' }]} />
                    <TouchableOpacity style={styles.buttonContainer}>
                      <Text style={styles.txtButton}>Gửi mã OTP</Text>
                    </TouchableOpacity>
                    <View style={styles.links}>
                      <TouchableOpacity>
                        <Text style={styles.forgetPass}>Đã có tài khoản? Đăng nhập ngay!</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                      <Text style={styles.txtBottom}>
                        Bằng cách điền thông tin sau đó nhấp vào "Đăng ký", bạn mặc nhiên đồng ý với{` `}
                      </Text>
                      <TouchableOpacity>
                        <Text style={[styles.txtLink, styles.txtBottom]}>Điều khoản</Text>
                      </TouchableOpacity>
                      <Text style={styles.txtBottom}>, </Text>
                      <TouchableOpacity>
                        <Text style={[styles.txtLink, styles.txtBottom]}>Quy chế hoạt động</Text>
                      </TouchableOpacity>
                      <Text style={styles.txtBottom}> và </Text>
                      <TouchableOpacity>
                        <Text style={[styles.txtLink, styles.txtBottom]}>Chính sách bảo mật</Text>
                      </TouchableOpacity>
                      <Text style={styles.txtBottom}> của Gmaths.vn!</Text>
                    </View>
                    <View style={styles.dividerFull}></View>
                    <Text style={styles.txtBottom}>Gặp vấn đề về đăng ký tài khoản mới?</Text>
                    <Text style={styles.txtBottom}>Liên hệ với Gmaths để nhận được sự trợ giúp kịp thời</Text>
                  </View>

                  <View style={styles.contact}>
                    <View style={styles.iconContactView}>
                      <SvgXml xml={phone} style={styles.iconContact} />
                    </View>
                    <View style={styles.iconContactView}>
                      <SvgXml xml={zaloIcon} style={styles.iconContact} />
                    </View>
                    <View style={styles.iconContactView}>
                      <SvgXml xml={messenger} style={styles.iconContact} />
                    </View>
                  </View>
                </View>
              </View>
            </KeyboardAwareScrollView>
          </ModalPaper>
        </Portal>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: { flex: 1, borderWidth: 1 },
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
  backContainer: {
    position: 'absolute',
    top: 12,
    left: 16,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(116, 116, 128, 0.08)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  back: { fontFamily: 'SF Pro', fontWeight: '900', lineHeight: 16, fontSize: 16, color: 'rgba(0, 0, 0, 1)' },
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
  signUpForm: {
    width: '100%',
    alignItems: 'center',
  },
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

  txtButton: {
    fontFamily: 'SF Pro',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.4,
    color: '#FFFFFF',
  },
  forgetPass: {
    textDecorationLine: 'underline',
    fontFamily: 'SF Pro',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.4,
    color: '#1565C0',
  },
  links: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  txtBottom: {
    fontFamily: 'SF Pro',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: -0.4,
    color: 'rgba(60, 60, 67, 0.6)',
    textAlign: 'center',
  },
  txtLink: {
    textDecorationLine: 'underline',
  },
  txtLinkCommon: {
    marginLeft: 2, // Khoảng cách giữa các liên kết
    marginRight: 2,
  },
  dividerFull: {
    width: '100%',
    height: 1,
    backgroundColor: 'rgba(60, 60, 67, 0.18)',
    marginTop: 24,
    marginBottom: 24,
  },
  contact: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 144,
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  txtContact: {
    fontFamily: 'SF Pro',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: -0.4,
    color: 'rgba(60, 60, 67, 0.6)',
  },
  iconContact: {
    width: 24,
    height: 24,
    fontFamily: 'SF Pro',
    fontWeight: '900',
    fontSize: 20,
    lineHeight: 20,
    color: 'rgba(60, 60, 67, 0.6)',
    marginTop: 12,
  },
  iconContactView: { height: 40, width: 40, borderRadius: 16, padding: 8 },
});
export default SignUp;
