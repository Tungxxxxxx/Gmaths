import React from 'react';
import { ImageBackground, StatusBar, Text, View, Image, TouchableOpacity, ScrollView, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { BG, logo } from '../../assets/images/index';
import { styles } from './Styles';
import BannerHero from './BannerHero';
import PagingDot from '../../components/PagingDot';
import Listing from './Listing';
import { Dimensions } from 'react-native';
import SignIn from '../../components/Modal/SignIn';
import { SIGN_IN, SIGN_UP, BUY_COURSE } from '../../constant/Constant';
import SignUp from '../../components/Modal/SignUp';
import BuyCourse from '../../components/Modal/BuyCourse';
import { connect } from 'react-redux';
import { Avatar } from 'react-native-paper';
import { GapVertical } from '../../components/GapComponent';

const { width } = Dimensions.get('window');
const bannerWidth = width - 32;
class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeDot: 1, isActiveButtonCTA: false, modal: SIGN_UP };
    this.scrollViewRef = React.createRef();
    this.signInRef = React.createRef();
    this.signUpRef = React.createRef();
    this.buyCourseRef = React.createRef();
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
  setActiveButtonCTA = (flag) => {
    this.setState({
      isActiveButtonCTA: flag,
    });
  };
  showSignInModal = () => {
    this.setState(
      () => ({ modal: SIGN_IN }),
      () => {
        if (this.signInRef.current) {
          this.signInRef.current.showModal();
        }
      },
    );
  };
  updateModal = (modalName) => {
    this.setState(
      () => ({
        modal: modalName,
      }),
      () => {
        if (this.signUpRef.current) {
          this.signUpRef.current.showModal();
        }
        if (this.buyCourseRef.current) {
          console.log('Homepage', modalName);
          this.buyCourseRef.current.showModal();
        }
      },
    );
  };

  render() {
    const { activeDot, modal } = this.state;
    const { userLogin } = this.props;
    return (
      <View style={styles.container}>
        <ImageBackground source={BG} style={styles.bgImage}>
          <StatusBar translucent barStyle={'dark-content'} backgroundColor={'transparent'} />
          <GapVertical height={26} />
          <View style={styles.navTop}>
            <Icon name="bars" size={24} style={styles.barIcon} color="#1565C0" />
            <View style={styles.title}>
              <Image source={logo} style={styles.logo} />
              <Text style={styles.titleContent}>Gmaths</Text>
            </View>
            <TouchableOpacity
              style={styles.rightFunc}
              onPress={() => {
                this.showSignInModal();
              }}
            >
              {userLogin ? (
                <Avatar.Image source={userLogin.avatar} size={24} />
              ) : (
                <MaterialCommunityIcons name="account-circle-outline" size={24} color={'#1565C0'} />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.content}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              ref={this.scrollViewRef}
              contentContainerStyle={{ paddingBottom: '100%' }}
            >
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
                  <BannerHero isActiveButtonCTA={this.state.isActiveButtonCTA} updateModal={this.updateModal} />
                  <BannerHero isActiveButtonCTA={this.state.isActiveButtonCTA} updateModal={this.updateModal} />
                  <BannerHero isActiveButtonCTA={this.state.isActiveButtonCTA} updateModal={this.updateModal} />
                </ScrollView>
              </View>
              <View style={styles.listing}>
                <Listing
                  scrollViewRef={this.scrollViewRef}
                  setActiveButtonCTA={this.setActiveButtonCTA}
                  updateModal={this.updateModal}
                />
              </View>
            </ScrollView>
          </View>
          {modal === SIGN_IN ? (
            <SignIn ref={this.signInRef} updateModal={this.updateModal} />
          ) : modal === SIGN_UP ? (
            <SignUp ref={this.signUpRef} showSignInModal={this.showSignInModal} />
          ) : modal === BUY_COURSE ? (
            <BuyCourse ref={this.buyCourseRef} />
          ) : null}
        </ImageBackground>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return { userLogin: state.userLogin.userLogin };
};
export default connect(mapStateToProps)(Homepage);
