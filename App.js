// import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store/store';
import Splash from './src/screens/splash/Splash';
import Homepage from './src/screens/homepage/Homepage';
import Route from './src/navigation/Route';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Provider store={store}>
        <Route />
      </Provider>
    );
  }
}

export default App;
