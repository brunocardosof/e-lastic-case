import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Home} from '../pages/Home/';

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => (
  <NavigationContainer>
    <AppStack.Navigator headerMode="none" initialRouteName="Home">
      <AppStack.Screen name="Home" component={Home} />
    </AppStack.Navigator>
  </NavigationContainer>
);

export {AppRoutes};
