import {
  ImageBackground,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import { BG } from '../../assets/images/index';
import HeaderBar from '../../components/Header';
import React from 'react';
import RadialGradient from 'react-native-radial-gradient';
import { radialColor, radialStops } from '../../color/Color';
import { logo, Rectangle1 } from '../../assets/images/index';
import Contact from '../../components/Contact';
import { LESSON_CONTACT_1, LESSON_CONTACT_2 } from '../../constant/Message';

import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
const bannerWidth = width - 32;

class LessonDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { avatar, title, content } = this.props.route.params;
    return (
      <View style={styles.container}>
        <ImageBackground source={BG} style={styles.bgImage}>
          <HeaderBar avatar={avatar} title={title} isAvatar={true} />
          <View style={styles.content}>
            <View style={styles.bannerContainer}>
              <RadialGradient style={styles.bannerHero} colors={radialColor} stops={radialStops}>
                <Image source={Rectangle1} style={styles.rectangle1Image} />

                <View style={{ flex: 67 }} />
                <TouchableOpacity
                  style={styles.buttonCTA}
                  disabled={!this.props.isActiveButtonCTA}
                  onPress={() => {
                    this.props.fetchGetPackages();
                    this.props.updateModal(BUY_COURSE);
                  }}
                >
                  <Text style={styles.labelButtonCTA}>Đăng ký gói cước ngay</Text>
                </TouchableOpacity>
                <View style={{ flex: 87 }} />
              </RadialGradient>
            </View>
            <View style={styles.info}>
              <Text style={styles.titleInfo}>Thông tin hướng dẫn</Text>
              <Text style={styles.contentInfo}>{content}</Text>
            </View>
            <View style={styles.dividerFull}></View>
            <Contact contentContact1={LESSON_CONTACT_1} contentContact2={LESSON_CONTACT_2} />
          </View>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: { flex: 1 },
  bgImage: {
    flex: 1,
    resizeMode: 'cover',
    paddingHorizontal: 16,
  },
  content: { flex: 1, paddingTop: 12, paddingBottom: 40 },
  bannerContainer: {
    width: '100%',
    height: (210 * bannerWidth) / 343,
    marginBottom: 12,
  },
  bannerHero: {
    flex: 1,
    borderRadius: 16,
    overflow: 'hidden',
    alignItems: 'center',
    shadowColor: 'rgba(25, 118, 210, 0.3)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 16,
  },

  buttonCTA: {
    width: '57%',
    flex: 56,
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  labelButtonCTA: {
    fontFamily: 'SF Pro',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.4,
    color: '#004390',
  },
  rectangle1Image: {
    resizeMode: 'stretch',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    width: '100%',
  },
  info: { paddingBottom: 24, paddingTop: 12, marginBottom: 24 },
  titleInfo: {
    fontFamily: 'SF Pro',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 28,
    letterSpacing: -0.4,
    color: '#1565C0',
    marginBottom: 16,
  },
  contentInfo: {
    fontFamily: 'SF Pro',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.4,
    color: '#22313F',
  },
  dividerFull: {
    width: '100%',
    height: 1,
    backgroundColor: 'rgba(60, 60, 67, 0.18)',
    marginBottom: 24,
  },
});
export default LessonDetail;
