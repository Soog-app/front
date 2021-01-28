import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { setNavigator } from './src/navigationRef';

import SigninScreen from './src/screens/SigninScreen';
import SignUpScreen from './src/screens/SignupScreen';
import LoadingScreen from './src/screens/LoadingScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';
import createMaterialBottomTabNavigator from './src/components/BottomTabNavigator'


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
      <AuthProvider>
        <App ref={(navigator) => { setNavigator(navigator)}} />
      </AuthProvider>
  )
}
