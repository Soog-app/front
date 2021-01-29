import React, { useEffect, useContext } from 'react';
import { Context as AuthContext } from '../context/AuthContext';
import { Image } from 'react-native';

const LoadingScreen = () => {
    const { tryLocalSignin } = useContext(AuthContext);

    useEffect(() => {
        tryLocalSignin();
    }, []);

    return <Image source={require('../img/logo_soog.png')} />;
};

export default LoadingScreen;
