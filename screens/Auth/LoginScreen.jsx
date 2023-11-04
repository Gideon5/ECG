import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate("Enquiry");
  };
  const handleRegister = () => {
    navigation.navigate("RegisterScreen");
  };

  return (
    <View className="flex-1 items-center bg-white">
      <View className="absolute inset-x-0 mt-24 h-16">
        <Text className="text-center text-blue-950 text-3xl font-extrabold mb-4">
          Holter Monitor
        </Text>
      </View>

      <View className="absolute top-40 gap-5 flex flex-col items-start mt-20">
        <Text className="text-black text-xl font-semibold">
          Login to your Account
        </Text>
        <TextInput
          className="w-80 h-12 border border-gray-300 rounded-lg px-2"
          placeholder="Email"
          keyboardType="email-address"
          style={{
            backgroundColor: "#FFF",
            // borderColor: "#CCC",
            // borderWidth: 1,
            // paddingHorizontal: 10,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
            // marginBottom: 10,
          }}
        />

        <TextInput
          className="w-80 h-12 border  border-gray-300 rounded-lg mb-2  px-2"
          placeholder="Password"
          style={{
            backgroundColor: "#FFF",
            // borderColor: "#CCC",
            // borderWidth: 1,
            // paddingHorizontal: 10,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
            // marginBottom: 10,
          }}
          secureTextEntry
        />

        <TouchableOpacity
          className="bg-blue-950 rounded-lg h-12 w-80 flex items-center justify-center"
          onPress={handleLogin}
          style={{
            // borderColor: "#CCC",
            // borderWidth: 1,
            // paddingHorizontal: 10,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
            // marginBottom: 10,
          }}
        >
          <Text className="text-white  text-center ">Sign In</Text>
        </TouchableOpacity>
      </View>
      <View className="absolute bottom-10  flex flex-row">
        <Text className="text-gray-500">
          Don't have an account?
          <TouchableOpacity onPress={handleRegister}>
            <Text className="text-blue-500">Sign up</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;
