import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homepage from '../screens/homepage/Homepage';
import React from 'react';
import Splash from '../screens/splash/Splash';
import LessonsOfCourse from '../screens/lessons/LessonsOfCourse';
import LessonDetail from '../screens/lessons/LessonDetail';
import DetailsOfCourse from '../screens/details/DetailsOfCourse';
import ExerciseDetail from '../screens/exercises/ExerciseDetail';
import ExcerciseFeedback from '../screens/exercises/ExcerciseFeedback';
import ExerciseDone from '../screens/exercises/ExerciseDone';
const Stack = createStackNavigator();
class Route extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <NavigationContainer fallback={<></>}>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
          <Stack.Screen name="Homepage" component={Homepage} options={{ headerShown: false }} />
          <Stack.Screen name="LessonsOfCourse" component={LessonsOfCourse} options={{ headerShown: false }} />
          <Stack.Screen name="DetailsOfCourse" component={DetailsOfCourse} options={{ headerShown: false }} />
          <Stack.Screen name="LessonDetail" component={LessonDetail} options={{ headerShown: false }} />
          <Stack.Screen name="ExerciseDetail" component={ExerciseDetail} options={{ headerShown: false }} />
          <Stack.Screen name="ExcerciseFeedback" component={ExcerciseFeedback} options={{ headerShown: false }} />
          <Stack.Screen name="ExerciseDone" component={ExerciseDone} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Route;
