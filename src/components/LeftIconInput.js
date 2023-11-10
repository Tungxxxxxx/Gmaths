import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
class LeftIconInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { borderColor: 'rgba(60, 60, 67, 0.18)', borderWidth: 1, onFocus: false };
  }
  render() {
    return (
      <View style={[styles.container, styles.normalInput]}>
        <Ionicons name="person-outline" style={styles.icon} size={24}></Ionicons>
        <TextInput style={styles.input} placeholder="Tên / Số điện thoại"></TextInput>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    height: 48,
    width: '83.9%',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  normalInput: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderColor: 'rgba(60, 60, 67, 0.18)',
    borderWidth: 1,
  },
  focusInput: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderColor: 'rgba(0, 122, 255, 0.3)',
    borderWidth: 2,
  },
  disableInput: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderColor: 'rgba(60, 60, 67, 0.18)',
    borderWidth: 1,
  },
  normalIcon: {
    color: 'rgba(60, 60, 67, 0.6)',
  },
  focusIcon: {
    color: '#1565C0',
  },
  disableIcon: {
    color: 'rgba(60, 60, 67, 0.3)',
  },
  input: { flex: 1, backgroundColor: 'blue' },
});
export default LeftIconInput;
