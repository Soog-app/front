import React, { useState, useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Spacer from '../components/Spaces';
import { Context as AuthContext } from '../context/AuthContext';

const SignUpScreen = ({ navigation }) => {
    const { state, signup } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return <View style={ styles.container }>
        <Spacer>
            <Input
                label="Email"
                value={ email }
                onChangeText={ setEmail }
                autoCapitalize="none"
                autoCorrect={ false }
            />
        </Spacer>
        <Spacer>
            <Input
                secureTextEntry
                label="Mot de passe"
                value={ password }
                onChangeText={ setPassword }
                autoCapitalize="none"
                autoCorrect={ false }
            />
        </Spacer>
        <Spacer>
            <Button title="S'inscrire" onPress={() => signup({ email, password })} />
        </Spacer>
        <Spacer>
            <Button
                title="Se connecter"
                onPress={() => navigation.navigate('Signin')}
            />
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
    }
});

export default SignUpScreen;