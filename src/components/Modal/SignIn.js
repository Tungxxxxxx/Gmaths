import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LeftIconInput from '../Input/LeftIconInput';
import PassInput from '../Input/PassInput';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { logo } from '../../assets/images/index';
import { IN_CORRECT_PASS, LOGIN_CONTACT_1, LOGIN_CONTACT_2 } from '../../constant/Message';
import { SIGN_UP } from '../../constant/Constant';
import { connect } from 'react-redux';
import { fetchGetUserLogin } from '../../redux/actions/fetchGetUsers';
import { fetchGetCoursesOfUser } from '../../redux/actions/fetchGetUserCourses';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Portal, Modal as ModalPaper } from 'react-native-paper';
import { styles as modalStyles } from './Styles';
import Contact from '../Contact';
import AuthAcc from '../AuthAcc';
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false, errorMes: '', username: '0986189492', pass: '123456' };
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
  handleChangeUsername = (username) => {
    this.setState({
      username: username,
    });
  };
  handleChangePass = (pass) => {
    this.setState({
      pass: pass,
    });
  };
  handleLogin = async () => {
    const { username, pass } = this.state;
    await this.props.fetchGetUserLogin(username, pass);
    const { userLogin, navigation } = this.props;
    if (userLogin) {
      this.setState(
        () => {
          return { errorMes: '', visible: false };
        },
        navigation.navigate('Homepage'),
        this.props.fetchGetCoursesOfUser(userLogin.id),
      );
    } else {
      this.setState({
        errorMes: IN_CORRECT_PASS,
      });
    }
  };

  render() {
    const { visible, errorMes } = this.state;
    return (
      <View style={modalStyles.container}>
        <Portal>
          <ModalPaper
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
              <View style={modalStyles.container}>
                <View style={modalStyles.grabber}></View>
                <View style={modalStyles.titleContainer}>
                  <Text style={modalStyles.title}>Đăng nhập</Text>
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
                  <View style={modalStyles.form}>
                    <LeftIconInput
                      name={'person-outline'}
                      transform={[{ rotate: '0deg' }]}
                      handleChangeUsername={this.handleChangeUsername}
                      username={this.state.username}
                    />
                    <PassInput errorMes={errorMes} handleChangePass={this.handleChangePass} pass={this.state.pass} />
                    {errorMes !== '' && <Text style={styles.errorMes}>{errorMes}</Text>}
                    <TouchableOpacity
                      style={modalStyles.buttonContainer}
                      onPress={() => {
                        this.handleLogin();
                      }}
                    >
                      <Text style={modalStyles.txtButton}>Đăng nhập</Text>
                    </TouchableOpacity>
                    <View style={modalStyles.links}>
                      <TouchableOpacity>
                        <Text style={modalStyles.forgetPass}>Quên mật khẩu?</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => {
                          this.closeModal();
                          this.props.updateModal(SIGN_UP);
                        }}
                      >
                        <Text style={modalStyles.forgetPass}>Đăng ký</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  {errorMes === '' ? (
                    <>
                      <View style={styles.orSignIn}>
                        <View style={modalStyles.divider}></View>
                        <Text style={styles.txtOrSignIn}>hoặc</Text>
                        <View style={modalStyles.divider}></View>
                      </View>
                      <AuthAcc closeModal={this.closeModal} />
                    </>
                  ) : (
                    <View style={modalStyles.dividerFull}></View>
                  )}
                  <Contact contentContact1={LOGIN_CONTACT_1} contentContact2={LOGIN_CONTACT_2} />
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

  orSignIn: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
});
const mapStateToProps = (state) => {
  return { navigation: state.params.navigation, userLogin: state.data.userLogin };
};
export default connect(mapStateToProps, { fetchGetUserLogin, fetchGetCoursesOfUser }, null, {
  forwardRef: true,
})(SignIn);
