import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LeftIconInput from '../Input/LeftIconInput';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { logo } from '../../assets/images/index';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Portal, Modal as ModalPaper } from 'react-native-paper';
import { styles as modalStyles } from './Styles';
import Contact from '../Contact';
import { SIGN_UP_CONTACT_1, SIGN_UP_CONTACT_2 } from '../../constant/Message';
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
      <View style={modalStyles.container}>
        <Portal>
          <ModalPaper
            animationType="slide"
            visible={visible}
            onDismiss={() => {
              this.closeModal();
            }}
            contentContainerStyle={modalStyles.modalContainer}
          >
            <KeyboardAwareScrollView
              style={{ flex: 1, width: '100%' }}
              extraScrollHeight={50}
              showsVerticalScrollIndicator={false}
            >
              <View style={{ flex: 1, alignItems: 'center' }}>
                <View style={modalStyles.grabber}></View>
                <View style={modalStyles.titleContainer}>
                  <Text style={modalStyles.title}>Đăng ký</Text>
                  <TouchableOpacity
                    style={[modalStyles.closeContainer, { left: 16 }]}
                    onPress={() => {
                      this.closeModal();
                    }}
                  >
                    <AntDesign name="left" size={16} style={modalStyles.close} />
                  </TouchableOpacity>
                </View>
                <View style={modalStyles.content}>
                  <View style={modalStyles.logoView}>
                    <Image source={logo} style={modalStyles.logoImage} />
                    <Text style={modalStyles.logoTitle}>GMATHS EDUCATION</Text>
                  </View>
                  <View style={modalStyles.form}>
                    <LeftIconInput name={'phone-portrait-outline'} transform={[{ rotate: '180deg' }]} />
                    <TouchableOpacity style={modalStyles.buttonContainer}>
                      <Text style={modalStyles.txtButton}>Gửi mã OTP</Text>
                    </TouchableOpacity>
                    <View style={[modalStyles.links, { justifyContent: 'center' }]}>
                      <TouchableOpacity>
                        <Text style={modalStyles.forgetPass}>Đã có tài khoản? Đăng nhập ngay!</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                      <Text style={styles.txtBottom}>
                        Bằng cách điền thông tin sau đó nhấp vào "Đăng ký", bạn mặc nhiên đồng ý với{` `}
                      </Text>
                      <TouchableOpacity>
                        <Text style={[modalStyles.txtLink, styles.txtBottom]}>Điều khoản</Text>
                      </TouchableOpacity>
                      <Text style={styles.txtBottom}>, </Text>
                      <TouchableOpacity>
                        <Text style={[modalStyles.txtLink, styles.txtBottom]}>Quy chế hoạt động</Text>
                      </TouchableOpacity>
                      <Text style={styles.txtBottom}> và </Text>
                      <TouchableOpacity>
                        <Text style={[modalStyles.txtLink, styles.txtBottom]}>Chính sách bảo mật</Text>
                      </TouchableOpacity>
                      <Text style={styles.txtBottom}> của Gmaths.vn!</Text>
                    </View>
                    <View style={modalStyles.dividerFull}></View>
                  </View>
                  <Contact contentContact1={SIGN_UP_CONTACT_1} contentContact2={SIGN_UP_CONTACT_2} />
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
  txtBottom: {
    fontFamily: 'SF Pro',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: -0.4,
    color: 'rgba(60, 60, 67, 0.6)',
    textAlign: 'center',
  },

  txtLinkCommon: {
    marginLeft: 2, // Khoảng cách giữa các liên kết
    marginRight: 2,
  },
});
export default SignUp;
