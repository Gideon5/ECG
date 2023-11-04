import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Enquiry = () => {
    const navigation = useNavigation()

    const handleConnectBluetooth = () => {
        navigation.navigate('DeviceConnection')
    };

    const handleOnline = () => {
        navigation.navigate('Home')
    };

    return (
        <View style={styles.container}>
            <Text>Please connect to the monitor</Text>
            <View style={styles.buttonContainer}>
            <Button title="Online" onPress={handleOnline} style={styles.button} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    buttonSpacing: {
        width: 10, // Adjust the desired spacing width
    },
    button: {
        flex: 1,
    },
});

export default Enquiry;