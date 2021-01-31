import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

const RentalScreen = () => {
    return (
            <ImageBackground source={require('../img/logo_soog.png')} style={styles.background}>
            </ImageBackground>
    );
};

RentalScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    background: {
            ...StyleSheet.absoluteFillObject
    }
});
export default RentalScreen;
