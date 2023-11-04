import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const UserDetails = () => {
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
          Record
        </Text>
      </View>

      <View className="absolute top-40 gap-5 flex flex-col items-start mt-20">
        <Text className="text-black text-xl font-semibold">
         User Details
        </Text>           
            <Text >
              Name: {"George A."}
            </Text>
            <Text >
              Age: {30}
            </Text>
            <Text >
              Sex: {"M"}
            </Text>
       
      </View>
    </View>
  );
};

export default UserDetails;
