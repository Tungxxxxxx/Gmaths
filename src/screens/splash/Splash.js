import React from 'react';
import { Text, View, ImageBackground, StatusBar, Image } from 'react-native';
import { BG, logo } from '../../assets/images/index';
import { connect } from 'react-redux';
import { setNavigation } from '../../redux/actions/setNavigation';
import NetInfo from '@react-native-community/netinfo';
import * as styles from './Styles';
class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  async componentDidMount() {
    const { navigation } = this.props;
    setTimeout(async () => {
      await this.props.setNavigation(this.props.navigation);
      // Sau khi đợi 2 giây, gọi navigate
      navigation.navigate('Homepage');
    }, 2000);
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

export default connect(null, { setNavigation })(Splash);
