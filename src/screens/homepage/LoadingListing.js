import Loadable from 'react-loadable';
import { Text, View } from 'react-native';

const setLoad = () => {
  setTimeout(() => {}, 5000);
};
const LoadableListing = Loadable({
  loader: () => import('./Listing'),
  loading: () => (
    <View>
      <Text>Loading...</Text>
    </View>
  ),
});

export default LoadableListing;
