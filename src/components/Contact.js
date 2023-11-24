import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, Linking } from 'react-native';
import { CALL_IOS, CALL_ANDROID, MESSENGER_URL_1, MESSENGER_URL_2, ZALO_URL } from '../constant/Constant';
import { SvgXml } from 'react-native-svg';
import { zaloIcon, messenger, phone } from '../assets/images/index';
import { connect } from 'react-redux';
class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleMakeCall = () => {
    let phoneNumber = '';
    if (Platform.OS === 'android') {
      phoneNumber = CALL_ANDROID;
    } else {
      phoneNumber = CALL_IOS;
    }
    Linking.openURL(phoneNumber);
  };
  handleOpenUrl = (url) => {
    this.props.navigation.navigate('Browser', { uri: url });
  };
  render() {
    const { contentContact1, contentContact2 } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.txtContact}>{contentContact1}</Text>
        <Text style={styles.txtContact}>{contentContact2}</Text>
        <View style={styles.contact}>
          <TouchableOpacity
            style={styles.iconContactView}
            onPress={() => {
              this.handleMakeCall();
            }}
          >
            <SvgXml xml={phone} style={styles.iconContact} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconContactView}
            onPress={() => {
              this.handleOpenUrl(ZALO_URL);
            }}
          >
            <SvgXml xml={zaloIcon} style={styles.iconContact} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconContactView}
            onPress={() => {
              this.handleOpenUrl(MESSENGER_URL_1);
            }}
          >
            <SvgXml xml={messenger} style={styles.iconContact} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: { justifyContent: 'center', alignItems: 'center' },
  contact: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 144,
    justifyContent: 'space-between',
    marginTop: 12,
  },
  txtContact: {
    fontFamily: 'SF Pro',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.4,
    color: 'rgba(60, 60, 67, 0.6)',
    textAlign: 'center',
  },
  iconContact: {
    width: 24,
    height: 24,
    fontFamily: 'SF Pro',
    fontWeight: '900',
    fontSize: 20,
    lineHeight: 20,
    color: 'rgba(60, 60, 67, 0.6)',
  },
  iconContactView: { height: 40, width: 40, borderRadius: 16, padding: 8 },
});
const mapStateToProps = (state) => {
  return { navigation: state.params.navigation };
};
export default connect(mapStateToProps)(Contact);
