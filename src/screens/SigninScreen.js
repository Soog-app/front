import React, { useContext } from 'react';
import { ImageBackground, View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SigninScreen = () => {
    const { state, signin, clearErrorMessage } = useContext(AuthContext);

    return (
        <View style={styles.container}>
             <ImageBackground source={require('../img/logo_bg_sign.png')} style={styles.background}>
            </ImageBackground>
            <NavigationEvents onWillFocus={clearErrorMessage} />
            <AuthForm
                errorMessage={state.errorMessage}
                submitButtonText="Se connecter"
                onSubmit={signin}
            />
            <NavLink
                routeName="Signup"
                text="Vous n'avez pas de compte? Inscrivez-vous en cliquant sur ce lien."
            />
        </View>
    );
};

SigninScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    background: {
        ...StyleSheet.absoluteFillObject
}
});

export default SigninScreen;
