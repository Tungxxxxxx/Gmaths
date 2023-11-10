import React from 'react';
import { Image, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { logo } from '../../assets/images/index';
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }
  showModal = () => {
    this.setState((prevState) => {
      return { visible: !prevState.visible };
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <Text>ssssssss</Text>
        </TouchableOpacity>
        <Modal animationType="slide" transparent={true} visible={this.state.visible} style={styles.modalContainer}>
          <Text style={styles.title}>Đăng nhập</Text>
          <View style={styles.logoView}>
            <Image source={logo} size={80} />
            <Text style={styles.logoTitle}>GMATHS EDUCATION</Text>
          </View>
          <View style={styles.signInForm}>
            <TextInput placeholder=""></TextInput>
          </View>
        </Modal>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: { flex: 1, borderWidth: 1 },
  modalContainer: { width: '100%', height: '85.47%', borderWidth: 1, backgroundColor: 'blue' },
});
export default SignIn;
