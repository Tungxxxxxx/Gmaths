import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, StatusBar } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-paper';
import { connect } from 'react-redux';

import { Dimensions } from 'react-native';
import { GapVertical } from './GapComponent';
const { width } = Dimensions.get('window');
const titleWidth = width - 52 - 56;

class BrowserHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { title, userLogin, isAvatar, navigation } = this.props;
    return (
      <>
        <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent />
        <GapVertical height={26} />
        <View style={styles.barContainer}>
          <View style={styles.titleContainer}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Ionicons name="chevron-back-sharp" style={styles.backIcon} size={16} />
            </TouchableOpacity>
            <View style={styles.gapHorizontal_8} />
            <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
              {title}
            </Text>
          </View>
          {isAvatar && userLogin ? (
            <Avatar.Image source={userLogin.avatar} size={16} />
          ) : (
            <Ionicons name="bookmark-outline" style={styles.backIcon} size={16} />
          )}
        </View>
      </>
    );
  }
}
const styles = StyleSheet.create({
  // top: { width: '100%', height: '5.665%' },
  barContainer: {
    height: 56,
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 14,
    // gap: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backIcon: { color: '#1565C0' },
  titleContainer: { flexDirection: 'row', alignItems: 'center' },
  title: {
    fontFamily: 'SF Pro',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.4,
    color: '#1565C0',
    width: titleWidth,
    overflow: 'hidden',
  },
  gapHorizontal_8: {
    width: 8,
  },
});
const mapStateToProps = (state) => {
  return { navigation: state.params.navigation, userLogin: state.data.userLogin };
};
export default connect(mapStateToProps)(BrowserHeader);
