import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { URI_FB_LOGIN } from '../constant/Constant';
import { connect } from 'react-redux';
import InAppBrowser from 'react-native-inappbrowser-reborn';
class AuthAcc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleFbLogin = () => {
    const { navigation, closeModal } = this.props;
    closeModal();
    navigation.navigate('FBLogin', { uri: URI_FB_LOGIN });
  };
  handleGGLogin = () => {
    const { navigation, closeModal } = this.props;
    closeModal();
    navigation.navigate('Browser', { uri: URI_FB_LOGIN });
  };

  handleAppleLogin = () => {
    const { navigation, closeModal } = this.props;
    closeModal();
  };

  render() {
    return (
      <View style={styles.authAcc}>
        <TouchableOpacity
          style={styles.CTA}
          onPress={() => {
            this.handleAppleLogin();
          }}
        >
          <AntDesign style={styles.socialIcon} name="apple1" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.CTA}>
          <AntDesign
            style={styles.socialIcon}
            name="google"
            onPress={() => {
              this.handleGGLogin();
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.CTA}
          onPress={() => {
            this.handleFbLogin();
          }}
        >
          <FontAwesome style={[styles.socialIcon, { paddingLeft: 5 }]} name="facebook" />
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
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
});
const mapStateToProps = (state) => {
  return { navigation: state.params.navigation };
};
export default connect(mapStateToProps, null)(AuthAcc);
