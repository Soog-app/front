import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import TrackListScreen from '../screens/TrackListScreen';
import TrackDetailScreen from '../screens/TrackDetailScreen';
import TrackCreateScreen from '../screens/TrackCreateScreen';
import AccountScreen from '../screens/AccountScreen';

export default createMaterialBottomTabNavigator(
    {
        trackListFlow: createStackNavigator({
            TrackList: TrackListScreen,
            TrackDetail: TrackDetailScreen,
        }),
        TrackCreate: TrackCreateScreen,
        Account: AccountScreen
    },
    {
        initialRouteName: 'Account',
        activeColor: '#f0edf6',
        inactiveColor: '#3e2465',
        barStyle: { backgroundColor: '#694fad' },
    }
);