import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

const TrackListScreen = () => {
    return (
            <ImageBackground source={require('../img/logo_soog.png')} style={styles.background}>
            </ImageBackground>
    );
};

TrackListScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    background: {
            ...StyleSheet.absoluteFillObject
    }
});
export default TrackListScreen;
