// import React, { useState, useEffect } from 'react';
// import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
// import BluetoothSerial from 'react-native-bluetooth-serial';

// const HeartMonitorPage = () => {
//   const [devices, setDevices] = useState([]);
//   const [searching, setSearching] = useState(false);

//   useEffect(() => {
//     // Subscribe to Bluetooth device discovery events
//     BluetoothSerial.on('bluetoothEnabled', () => console.log('Bluetooth enabled'));
//     BluetoothSerial.on('bluetoothDisabled', () => console.log('Bluetooth disabled'));
//     BluetoothSerial.on('error', (err) => console.log('Bluetooth error:', err));

//     return () => {
//       // Unsubscribe from Bluetooth device discovery events
//       BluetoothSerial.removeAllListeners();
//     };
//   }, []);

//   const searchDevices = () => {
//     setDevices([]);
//     setSearching(true);

//     BluetoothSerial.list()
//       .then((list) => {
//         setDevices(list);
//         setSearching(false);
//       })
//       .catch((err) => {
//         console.log('Error searching devices:', err);
//         setSearching(false);
//       });
//   };

//   const renderItem = ({ item }) => (
//     <View style={styles.deviceItem}>
//       <Text style={styles.deviceName}>{item.name}</Text>
//       <Text style={styles.deviceAddress}>{item.address}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Button title="Connect to Heart Monitor" onPress={searchDevices} disabled={searching} />
//       <FlatList
//         data={devices}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.address}
//         ListEmptyComponent={() => <Text>No devices found</Text>}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//   },
//   deviceItem: {
//     marginBottom: 8,
//   },
//   deviceName: {
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   deviceAddress: {
//     color: '#888',
//   },
// });

// export default HeartMonitorPage;
