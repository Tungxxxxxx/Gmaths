import { StyleSheet, View } from 'react-native';
const DividerComponent = (color, width, height) => <View style={styles.divider(color, width, height)}></View>;

const styles = StyleSheet.create({
  divider: (color, width, height) => ({
    width: width,
    height: height,
    backgroundColor: color,
  }),
});
export default DividerComponent;
