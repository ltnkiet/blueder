import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import React from "react";
import user1 from "../assets/img/3d1.png";
import user2 from "../assets/img/3d2.png";
import user3 from "../assets/img/3d3.png";
import user4 from "../assets/img/3d4.png";
import user5 from "../assets/img/3d5.png";
import user6 from "../assets/img/3d6.png";

export default function PreHome() {
  const navigation = useNavigation();
  return (
    <View className="w-full h-full flex items-center relative">
      <View className="absolute top-16 left-6">
        <Text className="flex flex-row items-center font-bold text-4xl">
          <Text className="text-blue-700">Blue</Text>
          <Text>der</Text>
        </Text>
      </View>
      <Image
        source={user1}
        className="absolute right-4 top-16 rounded-full w-[150px] h-[150px]"
      />
      <Image
        source={user2}
        className="absolute right-10 top-[30%] rounded-full w-[160px] h-[160px]"
      />
      <Image
        source={user3}
        className="absolute left-2 top-[18%] rounded-full w-[180px] h-[180px]"
      />
      <Image
        source={user4}
        className="absolute -left-16 top-[40%] rounded-full w-[150px] h-[150px]"
      />
      <Image
        source={user5}
        className="absolute -right-16 top-[50%] rounded-full w-[150px] h-[150px]"
      />
      <Image
        source={user6}
        className="absolute right-[30%] bottom-[30%] rounded-full w-[170px] h-[170px]"
      />
      <View className="absolute bottom-10">
        <View className="flex items-center flex-col mb-4">
          <Text className="text-4xl tracking-widest">Hãy tìm người</Text>
          <Text className="text-4xl tracking-widest">bạn đầu tiên nào</Text>
        </View>
        <TouchableOpacity onPress={() => {navigation.navigate('Home')}}>
          <View className="w-[300px] h-[70px] bg-blue-700 rounded-3xl flex items-center justify-center mb-5">
            <Text className="text-3xl text-white font-bold">Bắt đầu</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
