import React, { useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Spacer from '../components/Spaces';
import { Context as AuthContext } from '../context/AuthContext';


const AccountScreen = () => {
    const { signout } = useContext(AuthContext);
    return <SafeAreaView forceInset={{ top: 'always' }}>
        <Spacer></Spacer>
            <Text style={{ fontSize: 22 }}>Soog - Mon compte</Text>
            <Spacer>
                <Button 
                title="Deconnexion" 
                buttonStyle={styles.button}  
                onPress={signout} 
                />
            </Spacer>
            
        </SafeAreaView>
        
};
const styles = StyleSheet.create({
    
    button: {  
       backgroundColor: '#dc143c',
       borderColor: '#f08080',
       borderWidth: 5,
       borderRadius: 25    
    }
 })

export default AccountScreen;
