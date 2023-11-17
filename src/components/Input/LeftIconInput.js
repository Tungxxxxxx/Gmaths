import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

class LeftIconInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { onFocus: false };
  }
  onFocus = () => {
    this.setState({
      onFocus: true,
    });
  };
  onBlur = () => {
    this.setState({
      onFocus: false,
    });
  };
  handleOnchange = (val) => {
    this.props.handleChangeUsername(val);
  };
  render() {
    const { onFocus } = this.state;
    const { name, transform, username } = this.props;
    return (
      <View style={[styles.container, onFocus ? styles.focusInput : styles.normalInput]}>
        <Ionicons
          name={name}
          style={[{ transform: transform }, styles.icon, onFocus ? styles.focusIcon : styles.normalIcon]}
          size={16}
        />
        <TextInput
          style={styles.input}
          placeholder="Tên / Số điện thoại"
          placeholderTextColor={'#000000'}
          autoFocus={true}
          ref={(input) => {
            this.accountInputRef = input;
          }}
          // enterKeyHint="next"
          returnKeyType="next"
          autoCorrect={false}
          keyboardType="email-address"
          onFocus={() => {
            this.onFocus();
          }}
          onBlur={() => {
            this.onBlur();
          }}
          onChangeText={(val) => {
            this.handleOnchange(val);
          }}
          value={username}
        />
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
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 12,
    marginBottom: 12,
    paddingVertical: 0,
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

  icon: { marginRight: 4, fontWeight: '400', lineHeight: 16 },
  normalIcon: {
    color: 'rgba(60, 60, 67, 0.6)',
  },
  focusIcon: {
    color: '#1565C0',
  },

  input: {
    flex: 1,
    backgroundColor: 'transparent',
    fontFamily: 'SF Pro',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.4,
    color: '#000000',
    height: 48,
    padding: 0,
  },
});
export default LeftIconInput;
