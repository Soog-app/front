import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { withNavigationFocus } from 'react-navigation';
import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';

const TrackCreateScreen = ({ isFocused }) => {
    const { addLocation } = useContext(LocationContext);
    const [err] = useLocation(isFocused, addLocation);

    return (
        <>
            <Map />
            {err ? <Text>Veuillez activer la localisation sur votre téléphone.</Text> : null}
        </>
    );
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
