import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import TrackListScreen from '../screens/TrackListScreen';
import RentalScreen from '../screens/RentalScreen';
import DemandsScreen from '../screens/DemandsScreen';
import TrackDetailScreen from '../screens/TrackDetailScreen';
import TrackCreateScreen from '../screens/TrackCreateScreen';
import AccountScreen from '../screens/AccountScreen';
import { StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
    tabsStyle: {
        backgroundColor: '#303F9F'
    }
});

export default createMaterialBottomTabNavigator(
    {
        TrackCreate: {
            screen: TrackCreateScreen,
            navigationOptions: {
                title: 'Recherche',
                tabBarIcon({ tintColor }) {
                    return <MaterialCommunityIcons name='magnify' size={25} color={tintColor}/>;
                },
            }
        },

        Demands: {
            screen: DemandsScreen,
            navigationOptions: {
                title: 'Demandes',
                tabBarIcon({ tintColor }) {
                    return <MaterialCommunityIcons name='mail' size={25} color={tintColor}/>;
                },
            }
        },

        Rental: {
            screen: RentalScreen,
            navigationOptions: {
                title: 'Locations',
                tabBarIcon({ tintColor }) {
                    return <MaterialCommunityIcons name='key' size={25} color={tintColor}/>;
                },
            }
        },

        trackListFlow: {
            screen: createStackNavigator({
                TrackList: TrackListScreen,
                TrackDetail: TrackDetailScreen,
            }),
            navigationOptions: {
                title: 'Mes voitures',
                tabBarIcon({ focused, tintColor }) {
                    const iconName = `car${focused ? '' : '-outline'}`;
                    return <Ionicons name={iconName} size={25} color={tintColor} />;
                },
            }
        },

        Account: {
            screen: AccountScreen,
            navigationOptions: {
                title: 'Mon compte',
                tabBarIcon({ focused, tintColor }) {
                    const iconName = `account-circle${focused ? '' : '-outline'}`;
                    return <MaterialCommunityIcons name={iconName} size={25} color={tintColor} />;
                },
            }
        }
    },
    {
        activeColor: '#e8eaf6',
        inactiveColor: '#c5cae9',
        barStyle: styles.tabsStyle,
    }
);
