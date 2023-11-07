import React from 'react';
import { ImageBackground, StatusBar, View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={BG} style={styles.bgImage}>
          <StatusBar translucent barStyle={'dark-content'} backgroundColor={'transparent'} />
          <View style={styles.navTop}>
            <Icon name="bars" size={24} style={styles.barIcon} color="#1565C0" />
            <View style={styles.title}>
              <Image source={logo} style={styles.logo} />
              <Text style={styles.titleContent}>Gmaths</Text>
            </View>
            <TouchableOpacity style={styles.rightFunc}>
              <MaterialCommunityIcons name="account-circle-outline" size={24} color={'#1565C0'} />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
const BG = require('../assets/images/backgrounds/BG.png');
const logo = require('../assets/images/logos/Gmaths.vn.png');
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    borderRadius: 16,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 46,
  },
  navTop: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    height: 56,
    justifyContent: 'space-around',
    borderWidth: 1,
  },
  barIcon: { margin: 8 },
  title: {
    flex: 1,
    flexDirection: 'row',

    margin: 8,
  },
  logo: {
    width: 32,
    height: 32,
  },
  titleContent: {
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 28,
    letterSpacing: -0.4,
    color: '#1565C0',
  },
  rightFunc: { marginRight: 0 },
});
export default Homepage;
