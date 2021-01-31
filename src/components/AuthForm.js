import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import Spacer from './Spaces';

const AuthForm = ({ errorMessage, onSubmit, submitButtonText }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <Spacer>
                <Input
                    label="Email"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
            </Spacer>
            <Spacer>
                <Input
                    secureTextEntry
                    label="Mot de passe"
                    value={password}
                    onChangeText={setPassword}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
            </Spacer>
            <Spacer>
                <Button title={submitButtonText}  buttonStyle={styles.button} onPress={() => onSubmit({ email, password })} />
            </Spacer>
        </>
    );
};

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15
    },
    button: {  
        backgroundColor: '#303F9F',
        borderColor: '#303F9F',
        borderWidth: 5,
        borderRadius: 25,
        justifyContent: 'center',
        width: 400,
     }
});

export default AuthForm;

