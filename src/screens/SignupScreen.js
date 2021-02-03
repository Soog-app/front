import React, { useContext, useRef } from 'react';
import { ImageBackground, ScrollView, StyleSheet } from 'react-native';
import { NavigationEvents, SafeAreaView } from 'react-navigation';
import { useFormik } from 'formik';
import { Button, Input, Text } from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthContext';
import NavLink from '../components/NavLink';
import Spacer from '../components/Spaces';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Trop court!')
        .max(50, 'Trop long!')
        .required('Requis'),
    lastName: Yup.string()
        .min(2, 'Trop court!')
        .max(50, 'Trop long!')
        .required('Requis'),
    email: Yup.string().email('Email non valide').required('Requis'),
    phoneNumber: Yup.string()
        .matches(
            /(\+212|0)([ \-_/]*)(\d[ \-_/]*){9}/,
            {
                message: 'Format incorrect (formats acceptés: +212XXXXXXXXX / XXXXXXXXXX'
            }
        )
        .required('Requis'),
    password: Yup.string()
        .min(6, 'Trop court!')
        .required('Requis'),
    passwordCheck: Yup.string()
        .min(6, 'Trop court!')
        .required('Requis')
        .test('passwords-match', 'Passwords must match ya fool', function(value) {
            return this.parent.password === value;
        }),
});

const SignUpScreen = () => {
    const lastName = useRef(null);
    const email = useRef(null);
    const phoneNumber = useRef(null);
    const password = useRef(null);
    const { state, clearErrorMessage } = useContext(AuthContext);
    const {
        handleChange,
        handleSubmit,
        handleBlur,
        errors,
        touched
    } = useFormik({
        validationSchema: SignupSchema,
        initialValues: { firstName: '', lastName: '', email: '', phoneNumber: '', password: '', passwordCheck: '' },
        onSubmit: (values) => alert(`Email : ${values.email}`) });

    return (
    <ScrollView style={styles.container}>
        <SafeAreaView forceInset={{ top: 'always' }}>
        </SafeAreaView>
        <ImageBackground source={require('../img/logo_bg_sign.png')} style={styles.background}>
        </ImageBackground>

        <NavigationEvents onWillFocus={clearErrorMessage} />
            <Input
                label="Prénom"
                onChangeText={handleChange('firstName')}
                autoCorrect={false}
                returnKeyType='next'
                returnKeyLabel='next'
                onBlur={handleBlur('email')}
                errorStyle={{ color: 'red' }}
                errorMessage={errors.firstName}
                inputContainerStyle={{ borderColor: errors.firstName ?'red' : 'blue' }}
                touched={touched.firstName}
                onSubmitEditing={() => lastName.current?.focus()}
            />
            <Input
                label="Nom"
                onChangeText={handleChange('lastName')}
                autoCorrect={false}
                returnKeyType='next'
                returnKeyLabel='next'
                errorStyle={{ color: 'red' }}
                errorMessage={errors.lastName}
                inputContainerStyle={{ borderColor: errors.lastName ?'red' : 'blue' }}
                touched={touched.lastName}
                onSubmitEditing={() => email.current?.focus()}
                ref={lastName}
            />
            <Input
                label="Email"
                onChangeText={handleChange('email')}
                autoCapitalize="none"
                autoCorrect={false}
                autoCompleteType='email'
                returnKeyType='next'
                returnKeyLabel='next'
                onBlur={handleBlur('email')}
                errorStyle={{ color: 'red' }}
                errorMessage={errors.email}
                inputContainerStyle={{ borderColor: errors.email ?'red' : 'blue' }}
                touched={touched.email}
                onSubmitEditing={() => phoneNumber.current?.focus()}
                ref={email}
            />
            <Input
                label="Téléphone"
                onChangeText={handleChange('phoneNumber')}
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType='next'
                returnKeyLabel='next'
                onBlur={handleBlur('phoneNumber')}
                errorStyle={{ color: 'red' }}
                errorMessage={errors.phoneNumber}
                inputContainerStyle={{ borderColor: errors.phoneNumber ?'red' : 'blue' }}
                touched={touched.phoneNumber}
                onSubmitEditing={() => password.current?.focus()}
                ref={phoneNumber}

            />
        <Spacer>
            <Input
                secureTextEntry
                label="Mot de passe"
                onChangeText={handleChange('password')}
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType='next'
                returnKeyLabel='next'
                onBlur={handleBlur('password')}
                errorStyle={{ color: 'red' }}
                errorMessage={errors.password}
                inputContainerStyle={{ borderColor: errors.password ?'red' : 'blue' }}
                touched={touched.password}
                ref={password}
            />
        </Spacer>
        <Spacer>
            <Input
                secureTextEntry
                label="Confirmer votre mot de passe"
                onChangeText={handleChange('passwordCheck')}
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType='go'
                returnKeyLabel='go'
                onBlur={handleBlur('passwordCheck')}
                errorStyle={{ color: 'red' }}
                errorMessage={errors.passwordCheck}
                inputContainerStyle={{ borderColor: errors.passwordCheck ?'red' : 'blue' }}
                touched={touched.passwordCheck}
                onSubmitEditing={() => handleSubmit()}
            />
        </Spacer>
        {state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null}
        <Spacer>
            <Button
                title="S'inscrire"
                buttonStyle={styles.button}
                onPress={handleSubmit}
            />
        </Spacer>
        <NavLink
            routeName="Signin"
            text="Vous avez déjà un compte? Connectez-vous."
        />
    </ScrollView>
    );
};

SignUpScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    background: {
        ...StyleSheet.absoluteFillObject
    },
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

export default SignUpScreen;
