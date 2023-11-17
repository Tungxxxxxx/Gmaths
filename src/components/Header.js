import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, StatusBar } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-paper';
import { connect } from 'react-redux';

import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
const titleWidth = width - 52 - 56;

class HeaderBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { title, avatar, isAvatar, navigation } = this.props;
    return (
      <>
        <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent />
        <View style={styles.top}></View>
        <View style={styles.barContainer}>
          <View style={styles.titleContainer}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Ionicons name="chevron-back-sharp" style={styles.backIcon} size={24} />
            </TouchableOpacity>
            <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
              {title}
            </Text>
          </View>
          {isAvatar ? (
            <Avatar.Image source={avatar} size={24} />
          ) : (
            <Ionicons name="bookmark-outline" style={styles.backIcon} size={24} />
          )}
        </View>
      </>
    );
  }
}
const styles = StyleSheet.create({
  top: { width: '100%', height: 46 },
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
    fontSize: 20,
    lineHeight: 28,
    letterSpacing: -0.4,
    color: '#1565C0',
    width: titleWidth,
    overflow: 'hidden',
  },
});
const mapStateToProps = (state) => {
  return { navigation: state.navigation.navigation };
};
export default connect(mapStateToProps)(HeaderBar);
