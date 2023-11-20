// import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store/store';
import Route from './src/navigation/Route';
import { Provider as ProviderPaper } from 'react-native-paper';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ProviderPaper>
        <Provider store={store}>
          <Route />
        </Provider>
      </ProviderPaper>
    );
  }
}

export default App;
