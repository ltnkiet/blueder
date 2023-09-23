import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";

import { useNavigation } from "@react-navigation/native";

export default function Login() {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  return (
    <View className="w-full h-full flex items-center justify-center">
      <Text className="flex flex-row items-center font-bold text-7xl">
        <Text className="text-blue-700">Blue</Text>
        <Text>der</Text>
      </Text>
      <View className="flex flex-col my-20">
        <View className="mb-10">
          <Text className="mx-5 text-base font-semibold">
            Tên đăng nhập / Số điện thoại
          </Text>
          <TextInput className="border-2 w-[300px] h-[60px] border-slate-700 text-base rounded-3xl mt-3 px-5" />
        </View>
        <View>
          <Text className="mx-5 text-base font-semibold">Mật khẩu</Text>
          <TextInput className="border-2 w-[300px] h-[60px] border-slate-700 text-base rounded-3xl mt-3 px-5" />
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}>
        <View className="w-[300px] h-[70px] bg-blue-700 rounded-3xl flex items-center justify-center">
          <Text className="text-xl text-white font-bold">Đăng nhập</Text>
        </View>
      </TouchableOpacity>
      <View className="flex flex-row items-center font-bold text-7xl mt-10">
        <Text className="text-base font-bold">
          <Text>Bạn chưa có tài khoản?</Text>
          <Text
            onPress={() => {
              navigation.navigate("Register");
            }}
            className="text-blue-700">
            {" "}
            Tạo tài khoản
          </Text>
        </Text>
      </View>
    </View>
  );
}
