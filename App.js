import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store/store';
import Splash from './src/screens/splash/Splash';
import Homepage from './src/screens/homepage/Homepage';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isSplash: true };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isSplash: false });
    }, 2000);
  }

  render() {
    return <Provider store={store}>{this.state.isSplash ? <Splash /> : <Homepage />}</Provider>;
  }
}

export default App;
