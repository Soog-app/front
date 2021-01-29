import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import createMaterialBottomTabNavigator from './src/components/BottomTabNavigator'
import { setNavigator } from './src/navigationRef';

import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as LocationProvider } from './src/context/LocationContext';

import SigninScreen from './src/screens/SigninScreen';
import SignUpScreen from './src/screens/SignupScreen';
import LoadingScreen from './src/screens/LoadingScreen';

const switchNavigator = createSwitchNavigator({
  Loading: LoadingScreen,
  loginFlow: createStackNavigator({
    Signin: SigninScreen,
    Signup: SignUpScreen
  }),
  mainFlow: createMaterialBottomTabNavigator
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
      <LocationProvider>
        <AuthProvider>
          <App ref={(navigator) => { setNavigator(navigator)}} />
        </AuthProvider>
      </LocationProvider>
  )
}
