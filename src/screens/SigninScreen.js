import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Spacer from '../components/Spaces';

const SigninScreen = () => {
    return <>
        <Spacer>
            <Input label="Email" />
        </Spacer>
        <Spacer>
            <Input label="Mot de passe" />
        </Spacer>
        <Spacer>
            <Button title="Connexion" />
        </Spacer>
    </>
};

const styles = StyleSheet.create({});

export default SigninScreen;