import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, Linking } from 'react-native';
import { PHONE_NUMBER_ANDROID, PHONE_NUMBER_IOS } from '../constant/Constant';
import { SvgXml } from 'react-native-svg';
import { zaloIcon, messenger, phone } from '../assets/images/index';
class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleMakeCall = () => {
    let phoneNumber = '';
    if (Platform.OS === 'android') {
      phoneNumber = PHONE_NUMBER_ANDROID;
    } else {
      phoneNumber = PHONE_NUMBER_IOS;
    }
    Linking.openURL(phoneNumber);
  };
  handleOpenUrl = (url) => {
    Linking.openURL(url);
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
          <TouchableOpacity style={styles.iconContactView} onPress={() => {}}>
            <SvgXml xml={zaloIcon} style={styles.iconContact} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContactView}>
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
export default Contact;
