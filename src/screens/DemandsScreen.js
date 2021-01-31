import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

const DemandsScreen = () => {
    return (
            <ImageBackground source={require('../img/logo_soog4.jpg')} style={styles.background}>
            </ImageBackground>
    );
};

DemandsScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    background: {
            ...StyleSheet.absoluteFillObject
    }
});
export default DemandsScreen;
