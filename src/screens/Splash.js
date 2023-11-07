import React from 'react';
import { Text, View, ImageBackground, StatusBar, Image, StyleSheet, SafeAreaView } from 'react-native';
import { deviceWidth, deviceHeight } from '../utils/function';
import { DEVICE_WIDTH, DEVICE_HEIGHT } from '../Constant/Dimensions';

//Lam tron co gan nhat
const mainTop = Math.round((272 / DEVICE_HEIGHT) * deviceHeight);
class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.bgImage} source={BG}>
          <StatusBar barStyle={'dark-content'} translucent backgroundColor="transparent" />
          <View style={styles.main}>
            <Image style={styles.logo} source={logo} />
            <Text style={styles.mainContent}>GMATHS EDUCATION</Text>
          </View>
          <View style={styles.bottom}>
            <Text style={styles.bottomContent}>© 2023 Gmaths Global</Text>
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
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContent: {
    color: '#1565C0',
    fontWeight: '500',
    marginTop: 20,
    lineHeight: 32,
    fontSize: 24,
  },
  logo: {
    width: 112,
    height: 112,
  },
  bottom: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    height: 100,
    justifyContent: 'center',
  },
  bottomContent: {
    fontFamily: 'SFProDisplay-Regular',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    color: '#3C3C4399',
    letterSpacing: -0.4, // Tương ứng với letterSpacing trong CSS
  },
});
export default Splash;
