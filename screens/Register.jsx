import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../config/firebase";
import { getFirestore, collection, addDoc } from "firebase/firestore";

export default function Register() {
  const [name, setName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [passWord, setPassword] = useState(" ");
  const [age, setAge] = useState(" ");
  const [gender, setGender] = useState(" ");
  const [address, setAddress] = useState(" ");
  const [bio, setBio] = useState(" ");
  const [relationship, setRelationship] = useState(" ");

  const navigation = useNavigation();
  const firebaseAuth = getAuth(app);
  const firestore = getFirestore(app);

  const register = async () => {
    await createUserWithEmailAndPassword(firebaseAuth, email, passWord);
    const userDocRef = await addDoc(collection(firestore, "User"), {
      name: name,
      email: email,
      password: passWord,
      age: age,
      gender: gender,
      address: address,
      relationship: relationship,
      bio: bio,
    })
      .then(() => {
        Alert.alert("Đăng ký thành công", "Success Message", [
          {
            text: "Cancel",
            onPress: () => Alert.alert("Cancel Pressed"),
            style: "cancel",
          },
          {
            text: "OK",
            onPress: () => navigation.navigate("Login"),
          },
        ]);
      })
      .catch((error) => {
        Alert.alert(
          "Đăng ký thất bại",
          "Error Message",
          [
            {
              text: "Hủy",
              onPress: () => Alert.alert("Cancel Pressed"),
              style: "cancel",
            },
          ],
          {
            cancelable: true,
          }
        );
        console.log(error);
      });
  };

  return (
    <View className="w-full h-full flex items-center">
      <View className="flex flex-row w-full justify-between p-8 px-4">
        <Text className="flex flex-row items-center font-bold text-4xl">
          <Text className="text-blue-700">Blue</Text>
          <Text>der</Text>
        </Text>
      </View>
      <View className="flex flex-col gap-2 mb-4">
        <View>
          <Text className="mx-5 text-base font-semibold">Tên người dùng</Text>
          <TextInput
            className="border-2 w-[300px] h-[50px] border-slate-300 text-base rounded-3xl px-5"
            onChangeText={(name) => setName(name)}
          />
        </View>
        <View>
          <Text className="mx-5 text-base font-semibold">Email</Text>
          <TextInput
            className="border-2 w-[300px] h-[50px] border-slate-300 text-base rounded-3xl px-5"
            onChangeText={(mail) => setEmail(mail)}
          />
        </View>
        <View>
          <Text className="mx-5 text-base font-semibold">Mật khẩu</Text>
          <TextInput
            className="border-2 w-[300px] h-[50px] border-slate-300 text-base rounded-3xl px-5"
            secureTextEntry={true}
            onChangeText={(pw) => setPassword(pw)}
          />
        </View>
      </View>
      <View className="w-[300px] h-[410px] flex flex-col border-2 border-slate-300 rounded-3xl">
        <View className="flex flex-col w-full h-full items-center justify-around mt-2">
          <View className="flex-row gap-2">
            <View className="w-[135px] h-[45px] border-2 border-slate-300 rounded-3xl">
              <TextInput
                className="w-full h-full px-3"
                placeholder="Tuổi"
                onChangeText={(age) => setAge(age)}
              />
            </View>
            <View className="w-[135px] h-[45px] border-2 border-slate-300 rounded-3xl">
              <TextInput
                className="w-full h-full px-3"
                placeholder="Giới tính"
                onChangeText={(gender) => setGender(gender)}
              />
            </View>
          </View>
          <View className="w-[280px] h-[45px] border-2 border-slate-300 rounded-3xl">
            <TextInput
              className="w-full h-full px-3"
              placeholder="Tình trạng"
              onChangeText={(relationship) => setRelationship(relationship)}
            />
          </View>
          <View className="w-[280px] h-[45px] border-2 border-slate-300 rounded-3xl">
            <TextInput
              className="w-full h-full px-3"
              placeholder="Địa chỉ"
              onChangeText={(address) => setAddress(address)}
            />
          </View>
          <View className="w-[280px] h-[130px] border-2 border-slate-300 rounded-3xl">
            <TextInput
              className="w-full h-full px-3"
              placeholder="Thông tin"
              onChangeText={(bio) => setBio(bio)}
            />
          </View>
          <TouchableOpacity>
            <View className="w-[160px] h-[33px] bg-blue-700 rounded-3xl flex items-center justify-center mb-2">
              <Text onPress={register} className="text-lg text-white font-bold">
                Đăng ký
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
