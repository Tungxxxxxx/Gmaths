import React from 'react';
import { Image, Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import LeftIconInput from '../Input/LeftIconInput';
import PassInput from '../Input/PassInput';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { SvgXml } from 'react-native-svg';
import { zaloIcon, messenger, phone, logo } from '../../assets/images/index';
import { IN_CORRECT_PASS } from '../../constant/Message';
import { SIGN_UP } from '../../constant/Constant';
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
const contentWidth = width - 64;
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false, errorMes: '' };
  }
  showModal = () => {
    this.setState((prevState) => {
      return { visible: true };
    });
  };
  closeModal = () => {
    this.setState({
      visible: false,
    });
  };
  render() {
    const { visible, errorMes } = this.state;
    console.log('SignIn', visible);
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            this.showModal();
          }}
        ></TouchableOpacity>
        <Modal animationType="slide" transparent={true} visible={visible}>
          <View style={styles.modalContainer}>
            <View style={styles.grabber}></View>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Đăng nhập</Text>
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
              <View style={styles.signInForm}>
                <LeftIconInput name={'person-outline'} transform={[{ rotate: '0deg' }]} />
                <PassInput errorMes={errorMes} />
                {errorMes !== '' && <Text style={styles.errorMes}>{errorMes}</Text>}
                <TouchableOpacity style={styles.buttonContainer}>
                  <Text style={styles.txtButton}>Đăng nhập</Text>
                </TouchableOpacity>
                <View style={styles.links}>
                  <TouchableOpacity>
                    <Text style={styles.forgetPass}>Quên mật khẩu?</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.updateModal(SIGN_UP);
                    }}
                  >
                    <Text style={styles.forgetPass}>Đăng ký</Text>
                  </TouchableOpacity>
                </View>
              </View>
              {errorMes === '' ? (
                <View style={styles.orSignIn}>
                  <View style={styles.divider}></View>
                  <Text style={styles.txtOrSignIn}>hoặc</Text>
                  <View style={styles.divider}></View>
                </View>
              ) : (
                <View style={styles.dividerFull}></View>
              )}

              <View style={styles.authAcc}>
                <View style={styles.CTA}>
                  <AntDesign style={styles.socialIcon} name="apple1" />
                </View>
                <View style={styles.CTA}>
                  <AntDesign style={styles.socialIcon} name="google" />
                </View>
                <View style={styles.CTA}>
                  <FontAwesome style={[styles.socialIcon, { paddingLeft: 5 }]} name="facebook" />
                </View>
              </View>
              <Text style={styles.txtContact}>Không thể đăng nhập?</Text>
              <Text style={styles.txtContact}>Liên hệ với Gmaths để nhận được sự trợ giúp kịp thời</Text>
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
        </Modal>
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
  close: { fontFamily: 'SF Pro', fontWeight: '900', lineHeight: 16, fontSize: 16, color: 'rgba(0, 0, 0, 1)' },
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
  signInForm: {
    width: '100%',
    alignItems: 'center',
  },
  errorMes: {
    width: '100%',
    fontFamily: 'SF Pro',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.4,
    color: '#FF3B30',
    textAlign: 'left',
    marginTop: 12,
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
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  orSignIn: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  divider: {
    width: '42.44%',
    height: 1,
    backgroundColor: 'rgba(60, 60, 67, 0.18)',
  },
  dividerFull: {
    width: '100%',
    height: 1,
    backgroundColor: 'rgba(60, 60, 67, 0.18)',
    marginBottom: 24,
  },
  txtOrSignIn: {
    fontFamily: 'SF Pro',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.4,
    color: 'rgba(60, 60, 67, 0.6)',
  },
  authAcc: {
    flexDirection: 'row',
    width: 168,
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  CTA: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 12,
  },
  socialIcon: {
    width: 24,
    height: 24,
    color: '#1976D2',
    fontFamily: 'SF Pro',
    fontWeight: '400',
    fontSize: 24,
    lineHeight: 24,
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
export default SignIn;
