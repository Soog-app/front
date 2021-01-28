import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignUpScreen = () => {
    const { state, signup, clearErrorMessage } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <NavigationEvents onWillFocus={clearErrorMessage} />
            <AuthForm
            errorMessage={state.errorMessage}
            submitButtonText="S'inscrire"
            onSubmit={signup}
            />
            <NavLink
                routeName="Signin"
                text="Vous avez déjà un compte? Connectez-vous."
            />
        </View>
    );
};

SignUpScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
});

export default SignUpScreen;
