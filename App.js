import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store/store';
import Splash from './src/screens/splash/Splash';
import Homepage from './src/screens/homepage/Homepage';
export default function App() {
  return (
    <Provider store={store}>
      <Splash />
    </Provider>
  );
}
