import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, {useState} from "react";

export default function BMICalculator() {

  const [weight, setWeight] = useState("")
  const [height, setHeight] = useState("")

  return (
    <View className="flex-1 flex-col items-center justify-center p-8">
      <View className="w-full">
        <Text className="text-lg mb-3">Weight(KG)</Text>
        <TextInput className="border-2 w-full border-gray-500 p-4 text-lg" keyboardType="decimal-pad"/>
      </View>
      <View className="w-full">
        <Text className="text-lg mb-3">Height(cm)</Text>
        <TextInput className="border-2 border-gray-500 p-4 text-lg" keyboardType="decimal-pad"/>
      </View>
      <View className="py-4">
        <Text className="text-xl">BMI: 0.00</Text>
      </View>
      <View>
        <TouchableOpacity className="border-2 border-gray-800 p-5 bg-blue-400">
          <Text className="text-3xl font-semibold">Compute</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}