import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { auth } from "../../firebase"; // Import Firebase auth

const DrawerContent = ({ navigation }) => {
  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        // Sign-out successful.
        navigation.navigate("LoginScreen"); // Navigate to the login screen after logout
      })
      .catch((error) => {
        // An error happened during sign out
        console.error("Error signing out: ", error);
      });
  };
  const userDetails = () => {
            navigation.navigate("UserDetails"); // Navigate to the login screen after logout
     
  };

  return (
    <View style={styles.container} className="mt-10">
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.drawerItemText}>Home</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity style={styles.drawerItem} onPress={() => navigation.navigate('Enquiry')}>
        <Text style={styles.drawerItemText}>Enquiry</Text>
      </TouchableOpacity> */}

      <TouchableOpacity style={styles.drawerItem} onPress={userDetails}>
        <Text style={styles.drawerItemText}>User Details</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerItem} onPress={handleLogout}>
        <Text style={styles.drawerItemText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  drawerItem: {
    marginBottom: 10,
  },
  drawerItemText: {
    fontSize: 18,
  },
});

export default DrawerContent;
