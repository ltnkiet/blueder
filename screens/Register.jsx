import { View, Text, TextInput } from "react-native";
import React from "react";

export default function Register() {
  return (
    <View className="w-full h-full relative flex items-center justify-center">
      <View className="absolute top-16 left-6">
        <Text className="flex flex-row items-center font-bold text-4xl">
          <Text className="text-blue-700">Blue</Text>
          <Text>der</Text>
        </Text>
      </View>
      <View className="flex flex-col gap-4 mb-4">
        <View>
          <Text className="mx-5 text-base font-semibold">
            Tên đăng nhập / Số điện thoại
          </Text>
          <TextInput className="border-2 w-[300px] h-[50px] border-slate-700 text-base rounded-3xl px-5" />
        </View>
        <View>
          <Text className="mx-5 text-base font-semibold">Mật khẩu</Text>
          <TextInput className="border-2 w-[300px] h-[50px] border-slate-700 text-base rounded-3xl px-5" />
        </View>
        <View>
          <Text className="mx-5 text-base font-semibold">Nhập lại mật khẩu</Text>
          <TextInput className="border-2 w-[300px] h-[50px] border-slate-700 text-base rounded-3xl px-5" />
        </View>
      </View>
      <View className=" w-[300px] h-[320px] border-2 rounded-3xl">
        
      </View>
    </View>
  );
}
