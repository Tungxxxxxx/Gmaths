import React from 'react';
import { Text, View, ImageBackground, StatusBar, Image } from 'react-native';
import { BG, logo } from '../../assets/images/index';
import { connect } from 'react-redux';
import * as styles from './Styles';
class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = { timePass: false };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setTimePass();
    }, 2000);
  }
  setTimePass = () => {
    this.setState({
      timePass: true,
    });
  };
  render() {
    if (!this.state.timePass) {
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
}

export default connect()(Splash);
