import { Dimensions } from 'react-native';

export const deviceWidth = () => {
  const { width } = Dimensions.get('window');
  return width;
};
export const deviceHeight = () => {
  const { height } = Dimensions.get('window');
  return height;
};
