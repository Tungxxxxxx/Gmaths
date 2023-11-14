import { NavigationContainer } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homepage from '../screens/homepage/Homepage';
import React from 'react';
const Stack = createStackNavigator();
class Route extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <NavigationContainer fallback={<></>}>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen name="Homepage" component={Homepage} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Route;
