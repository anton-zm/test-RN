import React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { Intro } from './src/screens/intro-screen'
import { Home } from './src/screens/home-screen'
import { createStackNavigator } from '@react-navigation/stack'

const Route = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Route.Navigator screenOptions={{headerShown:false}}>
        <Route.Screen name='Intro' component={Intro} />
        <Route.Screen name='Home' component={Home} />
      </Route.Navigator>
    </NavigationContainer>
    
  );
}

