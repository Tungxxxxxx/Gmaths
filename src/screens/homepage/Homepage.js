import React from 'react';
import { ImageBackground, StatusBar, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { BG, logo } from '../../assets/images/index';
import { styles } from './Styles';
import BannerHero from './BannerHero';
import { Dimensions } from 'react-native';
import PagingDot from '../../components/PagingDot';
const { width } = Dimensions.get('window');
const bannerWidth = width - 32;
class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeDot: 1 };
  }
  handleScrollBanner = (e) => {
    if (!e) {
      return;
    } else {
      const { nativeEvent } = e;
      let currentOffset = 0;
      if (nativeEvent && nativeEvent.contentOffset) {
        currentOffset = nativeEvent.contentOffset.x;
      }
      const check = currentOffset / bannerWidth;
      if (check <= 0.6) {
        this.setState((prevState) => {
          return { activeDot: 1 };
        });
      } else if (check <= 1.6) {
        this.setState((prevState) => {
          return { activeDot: 2 };
        });
      } else {
        this.setState((prevState) => {
          return { activeDot: 3 };
        });
      }
      // console.log('>>>>Check event scroll', check);
    }
  };
  render() {
    const { activeDot } = this.state;
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
            <View style={styles.bannerContainer}>
              <PagingDot activeDot={activeDot} />
              <ScrollView
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                horizontal={true}
                contentContainerStyle={{ width: bannerWidth * 3, height: 335 }}
                scrollEventThrottle={16}
                onScroll={(e) => {
                  this.handleScrollBanner(e);
                }}
              >
                <BannerHero />
                <BannerHero />
                <BannerHero />
              </ScrollView>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default Homepage;