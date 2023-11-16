import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { zaloIcon, messenger, phone } from '../assets/images/index';
class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { contentContact1, contentContact2 } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.txtContact}>{contentContact1}</Text>
        <Text style={styles.txtContact}>{contentContact2}</Text>
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
