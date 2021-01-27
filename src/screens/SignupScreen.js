import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import Spacer from '../components/Spaces';

const SignUpScreen = ({ navigation }) => {
    const { state, signup } = useContext(AuthContext);

    return <View style={styles.container}>
        <AuthForm
        errorMessage={state.errorMessage}
        submitButtonText="S'inscrire"
        onSubmit={signup}
        />
        <Spacer>
            <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
                <Text style={styles.link}>Vous avez déjà un compte? Connectez-vous.</Text>
            </TouchableOpacity>
        </Spacer>
    </View>
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
    },
    link: {
        color: 'blue'
    }
});

export default SignUpScreen;
