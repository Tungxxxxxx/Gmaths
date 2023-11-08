import React from 'react';
import { StyleSheet, View } from 'react-native';
class PagingDot extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeDot: 1 };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={this.props.activeDot === 1 ? styles.activeDot : styles.unActiveDot}></View>
        <View style={this.props.activeDot === 2 ? styles.activeDot : styles.unActiveDot}></View>
        <View style={this.props.activeDot === 3 ? styles.activeDot : styles.unActiveDot}></View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flexDirection: 'row',
    backgroundColor: 'transparent',
    width: 72,
    height: 8,
    justifyContent: 'space-between',
    bottom: 10,
    alignItems: 'center',
    zIndex: 9999,
  },
  activeDot: {
    backgroundColor: '#0061AF',
    width: 40,
    height: 8,
    borderRadius: 5,
  },
  unActiveDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(245, 245, 247, 0.32)',
  },
});
export default PagingDot;
