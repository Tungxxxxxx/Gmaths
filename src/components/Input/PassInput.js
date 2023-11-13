import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';

class PassInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { onFocus: false, isShowPass: false };
  }
  showHidePass = () => {
    this.setState((prevState) => {
      return { isShowPass: !prevState.isShowPass };
    });
  };
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
  render() {
    const { onFocus, isShowPass } = this.state;
    const { errorMes } = this.props;
    return (
      <View
        style={[
          styles.container,
          onFocus ? styles.focusInput : errorMes !== '' ? styles.errorInput : styles.normalInput,
        ]}
      >
        <Octicons
          name="key"
          style={[styles.icon, onFocus || errorMes !== '' ? styles.focusIcon : styles.normalIcon]}
          size={16}
        />
        <TextInput
          style={styles.input}
          placeholder="Mật khẩu"
          placeholderTextColor={onFocus || errorMes !== '' ? '#000000' : 'rgba(60, 60, 67, 0.3)'}
          secureTextEntry={!isShowPass}
          enterKeyHint="done"
          onFocus={() => {
            this.onFocus();
          }}
          onBlur={() => {
            this.onBlur();
          }}
        />
        <TouchableOpacity
          onPress={() => {
            this.showHidePass();
          }}
        >
          <Ionicons
            name={!isShowPass ? 'eye-off-outline' : 'eye-outline'}
            style={[styles.icon, styles.normalIcon]}
            size={16}
          />
        </TouchableOpacity>
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
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  normalInput: {
    borderColor: 'rgba(60, 60, 67, 0.18)',
    borderWidth: 1,
  },
  focusInput: {
    borderColor: 'rgba(0, 122, 255, 0.3)',
    borderWidth: 2,
  },
  errorInput: {
    borderColor: 'rgba(255, 59, 48, 0.3)',
    borderWidth: 2,
  },
  icon: { marginRight: 4, fontWeight: '400', lineHeight: 16 },
  normalIcon: {
    color: 'rgba(60, 60, 67, 0.18)',
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
    textAlignVertical: 'center',
    padding: 0,
  },
});
export default PassInput;
