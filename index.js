/**
 * @format
 */

import { AppRegistry } from 'react-native';
// import App from './App';
import Splash from './src/screens/splash/Splash';
import Homepage from './src/screens/homepage/Homepage';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => Homepage);
