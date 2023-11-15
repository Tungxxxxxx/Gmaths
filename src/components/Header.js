import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-paper';
import { connect } from 'react-redux';
class HeaderBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { title, avatar, isAvatar, navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Ionicons name="chevron-back-sharp" style={styles.backIcon} size={24} />
          </TouchableOpacity>
          <Text style={styles.title}>{title}</Text>
        </View>
        {isAvatar ? (
          <Avatar.Image source={avatar} size={24} />
        ) : (
          <Ionicons name="bookmark-outline" style={styles.backIcon} size={24} />
        )}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 4,
    paddingVertical: 14,
    // gap: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backIcon: { color: '#1565C0' },
  titleContainer: { gap: 8, flexDirection: 'row', alignItems: 'center' },
  title: {
    fontFamily: 'SF Pro',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 28,
    letterSpacing: -0.4,
    color: '#1565C0',
  },
});
const mapStateToProps = (state) => {
  return { navigation: state.navigation.navigation };
};
export default connect(mapStateToProps)(HeaderBar);
