import React from 'react';
import { ImageBackground, StatusBar, View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import RadialGradient from 'react-native-radial-gradient';
import { deviceWidth } from '../utils/function';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  halfWidth = () => 300;
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={BG} style={styles.bgImage}>
          <StatusBar translucent barStyle={'dark-content'} backgroundColor={'transparent'} />
          <View style={styles.top}></View>
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
          <View style={styles.content}>
            <RadialGradient
              style={styles.bannerHero}
              colors={['rgba(66, 165, 245, 1)', 'rgba(25, 118, 210, 1)', 'rgba(21, 101, 192, 1)']}
              stops={[0, 0.7419, 1]}
            >
              <Image source={Rectangle1} resizeMode="stretch" style={styles.rectangle1} />
              <View style={styles.logoContent}>
                <View style={styles.bgLogo}>
                  <Image style={styles.logoContentImage} source={logo} size={24} />
                </View>
                <Text style={styles.logoText}>GMATH EDUCATION</Text>
              </View>
              <View style={styles.txtContainer}>
                <Text style={styles.txtLarge}>BACK TO</Text>
                <Text style={styles.txtLarge}>SCHOOL</Text>
                <Text style={styles.txtSmall}>FUN WITH MATHS</Text>
              </View>
              <TouchableOpacity style={styles.buttonCTA}>
                <Text style={styles.labelButtonCTA}>Đăng ký gói cước ngay</Text>
              </TouchableOpacity>
            </RadialGradient>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
const BG = require('../assets/images/backgrounds/BG.png');
const Rectangle1 = require('../assets/images/backgrounds/Rectangle1.png');
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
  top: { flex: 46 },
  navTop: {
    flex: 56,
    flexDirection: 'row',
    width: '100%',
    height: 56,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 20,
  },
  barIcon: { margin: 8 },
  title: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
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
  content: {
    flex: 710,
    width: '100%',
    paddingHorizontal: 16,
  },
  bannerHero: {
    height: 335,
    shadowColor: 'rgba(25, 118, 210, 0.3)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    borderRadius: 16,
    shadowColor: '#1976D2',
    overflow: 'hidden',
    alignItems: 'center',
    paddingTop: 16,
    paddingRight: 12,
    paddingBottom: 12,
    paddingLeft: 12,
  },
  logoContent: { alignItems: 'center', marginBottom: 8 },
  bgLogo: { backgroundColor: '#FFFFFF', width: 32, height: 32, padding: 4, borderRadius: 16 },
  logoContentImage: { flex: 1, resizeMode: 'contain', width: 24 },
  logoText: {
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: -0.4,
    color: '#FFFFFF',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowColor: '#000000',
    shadowOpacity: 0.29,
  },
  txtContainer: { alignItems: 'center', marginBottom: 8 },
  txtSmall: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.4,
    color: '#FFFFFF',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.16,
    shadowRadius: 16,
  },
  txtLarge: {
    fontWeight: '700',
    fontSize: 48,
    lineHeight: 56,
    letterSpacing: -0.4,
    color: '#FFFFFF',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
  },
  buttonCTA: {
    width: 215,
    height: 56,
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelButtonCTA: {
    fontFamily: 'Nunito-ExtraLightItalic',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.4,
    color: '#004390',
  },
  rectangle1: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    left: 0,
    right: 0,
  },
});
export default Homepage;
