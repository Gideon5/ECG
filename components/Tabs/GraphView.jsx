import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  Dimensions,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { DataProvider } from "../../contexts/DataContext";
import Graph from "../Graph/Graph";
import Hr from "../Graph/Hr";
import { Audio } from "expo-av";
import DropDownList from "../DropDownList";
import { MaterialIcons } from "@expo/vector-icons";

const GraphView = () => {
  const [userDetails, setUserDetails] = useState({});
  const [isConnected, setIsConnected] = useState(true);
  const [showGraph, setShowGraph] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [heartRate, setHeartRate] = useState(0); // Initialize with 0
  const [heartRateThreshold, setHeartRateThreshold] = useState(""); // Default threshold for running
  const [activity, setActivity] = useState("running");
  const [heartRateData, setHeartRateData] = useState(null);

  var deviceWidth = Dimensions.get("window").width;

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/sound.mp3")
    );
    await sound.playAsync();
  };

  const handleECGPress = () => {
    setShowGraph(true);
  };

  const handleHRPress = () => {
    setShowGraph(false);
  };

  // Use useEffect to update heartRateThreshold when activity changes
  useEffect(() => {
    if (activity === "running") {
      setHeartRateThreshold(100);
    } else if (activity === "walking") {
      setHeartRateThreshold(70);
    } else if (activity === "resting") {
      setHeartRateThreshold(40);
    }
  }, [activity]);

  const compareHeartRate = () => {
    if (activity === "running" && heartRate > heartRateThreshold) {
      playSound();
      console.log(
        "Heart rate exceeds threshold: ",
        heartRate,
        heartRateThreshold
      );
    } else if (activity === "walking" && heartRate > heartRateThreshold) {
      playSound();
      console.log(
        "Heart rate exceeds threshold: ",
        heartRate,
        heartRateThreshold
      );
    } else if (activity === "resting" && heartRate > heartRateThreshold) {
      playSound();
      console.log(
        "Heart rate exceeds threshold: ",
        heartRate,
        heartRateThreshold
      );
    }
  };

  return (
    <DataProvider>
      <SafeAreaView style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              flexDirection: "row",
              marginBottom: 50,
              marginTop: 0,
              alignItems: "center",
            }}
          >
            <Text>Activity Status: </Text>
            <View>
              <DropDownList />
            </View>
          </View>
        </View>
        <View className="mt-[-30] mb-2">
          <View style={{ flexDirection: "row" }}>
            <TextInput
              style={{ flex: 1, marginRight: 8 }}
              placeholder="Enter Heart Rate"
              keyboardType="numeric"
              value={heartRate.toString()}
              onChangeText={(text) => setHeartRate(parseInt(text) || 0)}
            />

            <TouchableOpacity
              className="flex items-center justify-center h-12 rounded-lg bg-blue-300 w-40"
              onPress={compareHeartRate}
              style={{
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 5,
              }}
            >
              <Text className="text-center text-white">Set HeartRate</Text>
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView horizontal>
          <View style={styles.graphContainer}>
            {showGraph ? <Graph /> : <Hr />}
          </View>
        </ScrollView>
        <View>
          <View>
            <TouchableOpacity
              className="flex items-center justify-center h-12 rounded-lg bg-red-300 mt-2 w-20"
              style={{
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 5,
              }}
            >
              <MaterialIcons name="alarm-off" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonWrapper}>
            <Button
              title="ECG"
              onPress={handleHRPress}
              color={!showGraph ? "#0099ff" : "#d1d1e0"}
            ></Button>
            <Button
              title="HR"
              onPress={handleECGPress}
              color={showGraph ? "#0099ff" : "#d1d1e0"}
            ></Button>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          {isConnected ? (
            <Button title="Online" onPress={() => {}} color="green" />
          ) : (
            <Button title="Offline" onPress={() => {}} color="red" />
          )}
        </View>
      </SafeAreaView>
    </DataProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    marginTop: 0,
    paddingBottom: 16,
    paddingHorizontal: 16,
  },
  graphContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  buttonWrapper: {
    borderRadius: 4,
    flexDirection: "row",
    marginHorizontal: 8,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#0099ff",
  },
  activeButtonText: {
    color: "white",
  },
  inactiveButtonText: {
    color: "#0099ff",
  },
});

export default GraphView;
