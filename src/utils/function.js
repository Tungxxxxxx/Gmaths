import { Dimensions } from 'react-native';

export const deviceWidth = () => {
  const { width } = Dimensions.get('window');
  return width;
};
export const deviceHeight = () => {
  const { height } = Dimensions.get('window');
  return height;
};
export function generateRandomArray(n) {
  // Tạo một mảng chứa các số từ 1 đến n
  const array = Array.from({ length: n }, (_, index) => index + 1);

  // Thuật toán Fisher-Yates để trộn mảng
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}
