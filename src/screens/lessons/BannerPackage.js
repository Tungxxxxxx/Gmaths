import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';
import { fetchGetPackages } from '../../redux/actions/fetchGetPackage';
import RadialGradient from 'react-native-radial-gradient';
import { radialColor, radialStops } from '../../color/Color';
import { Rectangle1 } from '../../assets/images/index';
import { Dimensions } from 'react-native';
import BuyCourse from '../../components/Modal/BuyCourse';
const { width } = Dimensions.get('window');
const bannerWidth = width - 32;
class BannerPackage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
    this.buyCourseRef = React.createRef();
  }
  showBuyCourses = () => {
    if (this.buyCourseRef.current) {
      this.buyCourseRef.current.showModal();
    }
  };
  render() {
    return (
      <>
        <BuyCourse ref={this.buyCourseRef} />
        <View style={styles.bannerContainer}>
          <RadialGradient style={styles.bannerHero} colors={radialColor} stops={radialStops}>
            <Image source={Rectangle1} style={styles.rectangle1Image} />

            <View style={{ flex: 67 }} />
            <TouchableOpacity
              style={styles.buttonCTA}
              onPress={() => {
                this.props.fetchGetPackages();
                this.showBuyCourses();
              }}
            >
              <Text style={styles.labelButtonCTA}>Đăng ký gói cước ngay</Text>
            </TouchableOpacity>
            <View style={{ flex: 87 }} />
          </RadialGradient>
        </View>
      </>
    );
  }
}
const styles = StyleSheet.create({
  bannerContainer: {
    width: '100%',
    height: 210,
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

  rectangle1Image: {
    resizeMode: 'stretch',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    width: '100%',
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
});
export default connect(null, { fetchGetPackages })(BannerPackage);
