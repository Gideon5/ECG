import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { DataContext } from "../../contexts/DataContext";
import { useContext } from "react";
import { Audio } from "expo-av";

const Onboard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1630531210902-0673fd470570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        }}
        style={styles.image}
      >
        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("LoginScreen")}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    margin: 0,
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    justifyContent: "center",
  },
  buttonWrapper: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50,
  },
  button: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignSelf: "center",
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default Onboard;
