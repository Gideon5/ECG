import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, Switch,StyleSheet } from "react-native";

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [marketingContent, setMarketingContent] = useState(false);

  const handleVerification = () => {
    navigation.navigate("Enquiry");
  };

  return (
    <View className="flex-1 items-center bg-white mt-10">
      <View className="absolute inset-x-0 top-10 h-16 mt-4 bottom-20">
        <Text className="text-center text-blue-950 text-3xl font-extrabold mb-4">
          Holter Monitor
        </Text>
      </View>
      <View className="absolute top-40 gap-5 flex flex-col items-start mt-10">
        <Text className="text-center text-black text-xl font-semibold pr-24">
          Create Your Account
        </Text>

        <TextInput
          className="w-80 h-12 border  border-gray-300 rounded-lg  px-2"
          placeholder="Phone Number" keyboardType="phone-pad"
          style={{
            backgroundColor: "#FFF",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
          }}
        />


        <TextInput
          className="w-80 h-12 border  border-gray-300 rounded-lg  px-2"
          placeholder="Email"
          keyboardType="email-address"
          style={{
            backgroundColor: "#FFF",

            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
          }}
        />

        <TextInput
          className="w-80 h-12 border border-gray-300 rounded-lg  px-2 shadow-lg"
          placeholder="Password"
          secureTextEntry
          style={{
            backgroundColor: "#FFF",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
          }}
        />

        {/* <View style={styles.toggleContainer}>
        <Switch
            value={marketingContent}
            onValueChange={value => setMarketingContent(value)}
            style={styles.switch}
          />
          <Text style={styles.toggleText}>
            I would like to receive marketing and announcement content from Zahanda
          </Text>
         
        </View> */}




        <TouchableOpacity
          className="bg-blue-950 rounded-lg h-12 w-80 flex items-center justify-center"
          onPress={handleVerification}
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
          <Text className="text-white text-center" >Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  toggleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  toggleText: {
    flex: 1,
    color: "#rgba(0, 0, 0, 0.55)",
  },
  switch: {
    marginRight: 10,
  },
});

export default RegisterScreen;
