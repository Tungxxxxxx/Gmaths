import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import RadialGradient from 'react-native-radial-gradient';
import { styles, radialColor, radialStops } from './Styles';
import { logo, Rectangle1 } from '../../assets/images/index';
import { connect } from 'react-redux';
import { fetchGetPackages } from '../../redux/actions/fetchGetPackage';
import { BUY_COURSE } from '../../constant/Constant';

class BannerHero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <RadialGradient style={styles.bannerHero} colors={radialColor} stops={radialStops}>
        {/* <View style={styles.rectangle1}> */}
        <Image source={Rectangle1} style={styles.rectangle1Image} />
        {/* </View> */}
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
      </RadialGradient>
    );
  }
}

export default connect(null, { fetchGetPackages })(BannerHero);
